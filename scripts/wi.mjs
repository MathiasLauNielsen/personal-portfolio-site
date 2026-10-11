// Work-item folders: one WI/<id>-<slug>/ per GitHub issue being worked on. Rules: WI/README.md.
// Usage: node scripts/wi.mjs start <id> [--title T] [--type feat] [--parent N] [--slug S]
//        node scripts/wi.mjs path <id>
//        node scripts/wi.mjs log <id> --file <entry.md | -> [--author NAME]
//        node scripts/wi.mjs run <id> <label> [--tail N] -- <command...>
//        node scripts/wi.mjs index    rewrite WI/index.md (issue states come from gh)
//        node scripts/wi.mjs check    fail on anything that breaks the rules (CI runs this)
import { readFileSync, writeFileSync, appendFileSync, readdirSync, existsSync, mkdirSync, createWriteStream } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn, spawnSync } from 'node:child_process'

const root = process.env.WI_ROOT ? resolve(process.env.WI_ROOT) : resolve(dirname(fileURLToPath(import.meta.url)), '..', 'WI')
const FOLDER = /^(\d+)-([a-z0-9]+(?:-[a-z0-9]+)*)$/
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const NOTE = /^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const RUN_FILE = /^\d{8}-\d{6}-[a-z0-9]+(?:-[a-z0-9]+)*\.log$/
const LOG_HEADING = /^## (\d{4}-\d{2}-\d{2} \d{2}:\d{2}) — (.+)$/
const ROOT_FILES = ['README.md', 'index.md']
const README_FIELDS = ['work_item', 'type', 'parent', 'branch', 'created']
// A run joins the latest log entry when that entry is this recent and by the same author,
// so a loop of test runs stays one entry.
const RUN_JOIN_MINUTES = 60

class WIError extends Error {}
const fail = (msg) => { throw new WIError(msg) }

// --- Helpers -----------------------------------------------------------------

const pad = (n) => String(n).padStart(2, '0')
const stamp = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
const fileStamp = (d) => stamp(d).replace(/[-:]/g, '').replace(' ', '-') + pad(d.getSeconds())
const read = (p) => readFileSync(p, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n')

function slugify(text, maxWords = 6) {
  const ascii = text.toLowerCase().replace(/æ/g, 'ae').replace(/ø/g, 'oe').replace(/å/g, 'aa')
    .normalize('NFKD').replace(/[^\x00-\x7f]/g, '')
  const words = ascii.match(/[a-z0-9]+/g) ?? fail(`cannot make a slug from "${text}"`)
  return words.slice(0, maxWords).join('-')
}

function parseId(text) {
  const id = String(text ?? '').replace(/^#/, '')
  if (!/^\d+$/.test(id)) fail(`invalid work-item id "${text}"`)
  return Number(id)
}

// `key: value` lines between --- fences; null when there is no frontmatter.
function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return null
  return Object.fromEntries(m[1].split('\n').map((l) => l.match(/^(\w+):\s*(.*)$/)).filter(Boolean).map((kv) => [kv[1], kv[2].trim()]))
}

const sh = (cmd, args) => {
  const r = spawnSync(cmd, args, { encoding: 'utf8' })
  return r.status === 0 ? r.stdout.trim() : null
}
const author = () => sh('git', ['config', 'user.name']) || process.env.USERNAME || process.env.USER || 'unknown'

function issue(id) {
  const out = sh('gh', ['issue', 'view', String(id), '--json', 'title,url,state'])
  return out ? JSON.parse(out) : null
}

function folders() {
  if (!existsSync(root)) return []
  return readdirSync(root, { withFileTypes: true }).filter((e) => e.isDirectory() && FOLDER.test(e.name))
    .map((e) => ({ id: Number(e.name.match(FOLDER)[1]), name: e.name, path: join(root, e.name) }))
}

function folderFor(id) {
  const matches = folders().filter((f) => f.id === id)
  if (!matches.length) fail(`no work-item folder for #${id}: run start ${id}`)
  if (matches.length > 1) fail(`#${id} has several folders: ${matches.map((f) => f.name).join(', ')}`)
  return matches[0]
}

function logEntry(when, who, body) {
  body = body.replace(/\r\n/g, '\n').trim()
  if (!body) fail('log entry is empty')
  if (body.split('\n').some((l) => /^##? /.test(l))) fail('an entry may not contain # or ## headings; use ### or bold lead-ins')
  return `\n## ${stamp(when)} — ${who}\n\n${body}\n`
}

function append(path, text) {
  const current = existsSync(path) ? readFileSync(path, 'utf8') : ''
  appendFileSync(path, (current && !current.endsWith('\n') ? '\n' : '') + text)
}

function lastEntry(logText) {
  const headings = [...logText.matchAll(/^## (\d{4}-\d{2}-\d{2} \d{2}:\d{2}) — (.+)$/gm)]
  if (!headings.length) return null
  const [, when, who] = headings.at(-1)
  return { when: new Date(when.replace(' ', 'T')), who }
}

// Quote for the shell that runs the command: cmd.exe on Windows, sh elsewhere.
const quote = (arg) =>
  !/[\s"'&|<>^%$`;()*?]/.test(arg) ? arg
    : process.platform === 'win32' ? `"${arg.replace(/"/g, '\\"')}"`
    : `'${arg.replace(/'/g, `'\\''`)}'`

function options(args, names) {
  const out = { _: [] }
  for (let i = 0; i < args.length; i++) {
    const name = args[i].startsWith('--') ? args[i].slice(2) : null
    if (name === null) out._.push(args[i])
    else if (!names.includes(name)) fail(`unknown option --${name}`)
    else if (i + 1 >= args.length) fail(`--${name} needs a value`)
    else out[name] = args[++i]
  }
  return out
}

// --- Commands ----------------------------------------------------------------

function start(args) {
  const o = options(args, ['title', 'type', 'parent', 'slug'])
  const id = parseId(o._[0] ?? fail('usage: start <id> [--title T] [--type feat] [--parent N] [--slug S]'))
  const existing = folders().filter((f) => f.id === id)
  if (existing.length) return console.log(`WI/${folderFor(id).name} (exists)`)

  const found = issue(id)
  // Issues and pull requests share one number sequence, and gh issue view accepts both.
  if (found?.url.includes('/pull/')) fail(`#${id} is a pull request, not an issue: a work item starts from an issue`)
  const title = o.title ?? found?.title ?? fail(`issue #${id} not found through gh: create the issue first, or pass --title`)
  const type = o.type ?? 'feat'
  if (!KEBAB.test(type)) fail(`invalid --type "${type}": a lowercase word such as feat, fix, docs or chore`)
  const parent = o.parent ? parseId(o.parent) : ''
  const slug = o.slug ?? slugify(title)
  if (!KEBAB.test(slug)) fail(`invalid --slug "${slug}": use lowercase-kebab-case`)
  const branch = `${type}/${id}-${slug}`
  const now = new Date()
  const dir = join(root, `${id}-${slug}`)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'README.md'), [
    '---', `work_item: ${id}`, `type: ${type}`, `parent: ${parent}`, `branch: ${branch}`, `created: ${stamp(now).slice(0, 10)}`, '---', '',
    `# #${id} ${title}`, '',
    '## Definitions', '',
    found?.url ? `- **Issue:** ${found.url}` : '<!-- Links, terms, and each decision as: **X** (decided YYYY-MM-DD): … because … -->', '',
    '## Input', '',
    '<!-- The request word for word, with its date. -->', '',
  ].join('\n'))
  writeFileSync(join(dir, 'log.md'), `# Log: #${id} ${title}\n` + logEntry(now, author(), `- **Started:** folder created; branch \`${branch}\`.`))
  console.log(`WI/${id}-${slug} (created)\nbranch: ${branch}`)
}

function path(args) {
  console.log(folderFor(parseId(args[0])).path.replace(/\\/g, '/'))
}

function log(args) {
  const o = options(args, ['file', 'author'])
  const f = folderFor(parseId(o._[0]))
  if (!o.file) fail('usage: log <id> --file <entry.md | -> (a UTF-8 file or stdin, never a long inline argument)')
  const body = (o.file === '-' ? readFileSync(0, 'utf8') : read(o.file)).replace(/^﻿/, '')
  append(join(f.path, 'log.md'), logEntry(new Date(), o.author ?? author(), body))
  console.log(`WI/${f.name}/log.md`)
}

function run(args) {
  const split = args.indexOf('--')
  if (split < 0 || split === args.length - 1) fail('usage: run <id> <label> [--tail N] -- <command...>')
  const o = options(args.slice(0, split), ['tail'])
  const command = args.slice(split + 1).map(quote).join(' ')
  const f = folderFor(parseId(o._[0]))
  const label = slugify(o._[1] ?? fail('run needs a label'), Infinity)
  const tailSize = o.tail === undefined ? 30 : Number(o.tail)

  mkdirSync(join(f.path, 'runs'), { recursive: true })
  const started = new Date()
  let file = join(f.path, 'runs', `${fileStamp(started)}-${label}.log`)
  for (let n = 2; existsSync(file); n++) file = join(f.path, 'runs', `${fileStamp(started)}-${label}-${n}.log`)
  const out = createWriteStream(file)
  out.write(`# command: ${command}\n# cwd: ${process.cwd().replace(/\\/g, '/')}\n# started: ${started.toISOString()}\n\n`)

  const tail = []
  let partial = ''
  const take = (chunk) => {
    out.write(chunk)
    const lines = (partial + chunk.toString('utf8')).split(/\r?\n/)
    partial = lines.pop()
    tail.push(...lines)
    tail.splice(0, Math.max(0, tail.length - tailSize))
  }
  const child = spawn(command, { shell: true, stdio: ['ignore', 'pipe', 'pipe'] })
  child.stdout.on('data', take)
  child.stderr.on('data', take)
  child.on('close', (code, signal) => {
    code = code ?? 1
    if (partial) tail.push(partial)
    const seconds = (Date.now() - started.getTime()) / 1000
    out.end(`\n# exit: ${code}${signal ? ` (${signal})` : ''}\n# seconds: ${seconds.toFixed(1)}\n`, () => {
      const rel = `runs/${file.split(/[\\/]/).pop()}`
      const bullet = `- Run \`${label}\`: \`${command}\` → exit ${code}, ${seconds >= 10 ? seconds.toFixed(0) : seconds.toFixed(1)} s (${rel}).\n`
      const logPath = join(f.path, 'log.md')
      const last = lastEntry(read(logPath))
      const who = author()
      const joins = last && last.who === who && Date.now() - last.when.getTime() <= RUN_JOIN_MINUTES * 60_000
      append(logPath, joins ? bullet : logEntry(new Date(), who, bullet))
      if (tailSize > 0 && tail.length) console.log(tail.slice(-tailSize).join('\n'))
      console.log(`exit ${code}, ${seconds.toFixed(1)} s: WI/${f.name}/${rel}`)
      process.exitCode = code
    })
  })
}

function index() {
  const states = new Map()
  const list = sh('gh', ['issue', 'list', '--state', 'all', '--limit', '1000', '--json', 'number,state'])
  if (list) for (const i of JSON.parse(list)) states.set(i.number, i.state.toLowerCase())
  const cell = (v) => String(v ?? '').replace(/\|/g, '\\|')
  const rows = folders().sort((a, b) => a.id - b.id || a.name.localeCompare(b.name)).map((f) => {
    const text = existsSync(join(f.path, 'README.md')) ? read(join(f.path, 'README.md')) : ''
    const fm = frontmatter(text) ?? {}
    const title = text.match(/^# #\d+ (.+)$/m)?.[1] ?? f.name
    const last = existsSync(join(f.path, 'log.md')) ? lastEntry(read(join(f.path, 'log.md'))) : null
    return `| [#${f.id}](${f.name}/README.md) | ${cell(fm.type)} | ${states.get(f.id) ?? (list ? 'not found' : '?')} | ${cell(title)} | ${fm.parent ? `#${fm.parent}` : ''} | ${fm.branch ? `\`${fm.branch}\`` : ''} | ${last ? stamp(last.when).slice(0, 10) : ''} |`
  })
  mkdirSync(root, { recursive: true })
  writeFileSync(join(root, 'index.md'), [
    '# Work items',
    '',
    `Generated by \`npm run wi -- index\`; git-ignored, don't edit.${list ? '' : ' State: ? = gh was not available.'}`,
    '',
    '| Issue | Type | State | Title | Parent | Branch | Last log |',
    '|---|---|---|---|---|---|---|',
    ...rows,
    '',
  ].join('\n'))
  console.log(`WI/index.md: ${rows.length} work items`)
}

function checkFolder(f) {
  const problems = []
  const readme = join(f.path, 'README.md')
  if (!existsSync(readme)) problems.push(`${f.name}: README.md missing`)
  else {
    const text = read(readme)
    const fm = frontmatter(text)
    if (!fm) problems.push(`${f.name}/README.md: no frontmatter`)
    else {
      for (const k of README_FIELDS) if (!(k in fm)) problems.push(`${f.name}/README.md: frontmatter "${k}" missing`)
      if ('work_item' in fm && fm.work_item !== String(f.id)) problems.push(`${f.name}/README.md: work_item ${fm.work_item} does not match the folder`)
      if (fm.parent && !/^\d+$/.test(fm.parent)) problems.push(`${f.name}/README.md: parent must be an issue number`)
      if (fm.branch && !new RegExp(`^[a-z]+/${f.id}-[a-z0-9-]+$`).test(fm.branch)) problems.push(`${f.name}/README.md: branch must be <type>/${f.id}-<slug>`)
      if ('created' in fm && !/^\d{4}-\d{2}-\d{2}$/.test(fm.created)) problems.push(`${f.name}/README.md: created must be YYYY-MM-DD`)
    }
    if (!new RegExp(`^# #${f.id} .+$`, 'm').test(text)) problems.push(`${f.name}/README.md: heading "# #${f.id} <title>" missing`)
    for (const s of ['Definitions', 'Input']) if (!new RegExp(`^## ${s}$`, 'm').test(text)) problems.push(`${f.name}/README.md: section "## ${s}" missing`)
  }
  const logPath = join(f.path, 'log.md')
  if (!existsSync(logPath)) problems.push(`${f.name}: log.md missing`)
  else read(logPath).split('\n').forEach((line, i) => {
    if (line.startsWith('## ') && !LOG_HEADING.test(line)) problems.push(`${f.name}/log.md:${i + 1}: heading is not "## YYYY-MM-DD HH:MM — <name>"`)
  })
  for (const e of readdirSync(f.path, { withFileTypes: true })) {
    if (e.isDirectory() && e.name === 'runs') {
      for (const r of readdirSync(join(f.path, 'runs'))) if (!RUN_FILE.test(r)) problems.push(`${f.name}/runs/${r}: not YYYYMMDD-HHMMSS-<label>.log`)
    } else if (e.isDirectory()) problems.push(`${f.name}/${e.name}/: unexpected folder (only runs/)`)
    else if (!['README.md', 'log.md'].includes(e.name) && !NOTE.test(e.name)) problems.push(`${f.name}/${e.name}: notes are lowercase-kebab-case.md`)
  }
  return problems
}

function check() {
  const problems = []
  if (existsSync(root)) {
    for (const e of readdirSync(root, { withFileTypes: true })) {
      if (e.isDirectory() && !FOLDER.test(e.name)) problems.push(`${e.name}/: not <id>-<slug>`)
      else if (!e.isDirectory() && !ROOT_FILES.includes(e.name)) problems.push(`${e.name}: unexpected file in WI/`)
    }
    const all = folders()
    for (const f of all) problems.push(...checkFolder(f))
    for (const id of new Set(all.map((f) => f.id))) {
      const same = all.filter((f) => f.id === id)
      if (same.length > 1) problems.push(`#${id} has several folders: ${same.map((f) => f.name).join(', ')}`)
    }
    const tracked = sh('git', ['-C', root, 'ls-files']) ?? ''
    for (const p of tracked.split('\n').filter(Boolean)) {
      if (p === 'index.md' || /^[^/]+\/runs\//.test(p)) problems.push(`${p}: committed to git, but it is local output (git rm --cached it)`)
    }
  }
  console.log(`${folders().length} work items, ${problems.length} problems`)
  for (const p of problems) console.log(`  - ${p}`)
  process.exitCode = problems.length ? 1 : 0
}

const commands = { start, path, log, run, index, check }
const [name, ...rest] = process.argv.slice(2)
try {
  if (!commands[name]) fail(`usage: wi.mjs <${Object.keys(commands).join(' | ')}> ...`)
  commands[name](rest)
} catch (e) {
  if (!(e instanceof WIError)) throw e
  console.error(e.message)
  process.exitCode = 1
}
