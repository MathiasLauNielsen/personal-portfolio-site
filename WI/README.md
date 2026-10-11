# Work-item folders (WI)

Every piece of tracked work has one folder here, `WI/<id>-<slug>/`. It holds the technical detail
and the session history that the issue does not. The tracker is this repository's GitHub issues:
the issue holds the goal and the status, and the folder lets whoever continues the work pick it up
without asking anyone to repeat context.

**This repository is public.** Everything committed here, and every issue comment, is readable by
anyone. The [wiki's public-repository rules](../wiki/schema.md) apply in full: no secrets,
personal data, client-confidential material, prices, rates, finances, enquiry contents or anything
read from the production database.

## Where each kind of information goes

| Where | Holds | Audience |
| --- | --- | --- |
| GitHub issue | Goal, scope, acceptance criteria, state, one short comment per session | Mathias and anyone reading the repo |
| `WI/<id>-<slug>/` | Definitions, the original request, plans, technical notes, the full session log | Whoever continues the work |
| `WI/<id>-<slug>/runs/` | Raw test, build, query and deploy output (git-ignored) | The person who ran it |
| `wiki/`, `CLAUDE.md` | Knowledge that outlives the task: decisions and their reasons, diagnoses, how things are set up | Every later task |

## When a folder is needed

- **Needed:** any task expected to end in a commit, a pull request or a change in an external
  system (Supabase, Vercel, DNS, email).
- **Not needed:** questions, reviews and read-only analysis, until they turn into such work.
- **Several issues in one piece of work:** use the parent's (epic's) folder.
- **Purely technical side work** (a spike, a performance check, a tool fix): use the folder of the
  issue it serves. It needs no issue of its own.

## Naming

- `<id>` is the GitHub issue number. `<slug>` is the branch description in lowercase kebab-case.
- Branch: `<type>/<id>-<slug>`, with the types this repo already uses (`feat`, `fix`, `docs`,
  `chore`, `copy`). `fix/42-null-dates` works in `WI/42-null-dates/`.
- Commit messages end with `Work item: #<id>`, before any trailer lines:

  ```
  Blog: figure for the reserve post

  Work item: #42

  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

## Folder layout

| Path | Content | In git |
| --- | --- | --- |
| `README.md` | Frontmatter (`work_item`, `type`, `parent`, `branch`, `created`), a `# #<id> <title>` heading, then **Definitions** (links, terms and Mathias's decisions) and **Input** (the request word for word, with its date) | Yes |
| `log.md` | Append-only session log. Each entry is headed `## YYYY-MM-DD HH:MM — <name>` | Yes |
| `<topic>.md` | Plans and notes, named in lowercase kebab-case (`plan.md`, `parity-check.md`) | Yes |
| `runs/YYYYMMDD-HHMMSS-<label>.log` | Output of a wrapped command | No |
| `WI/index.md` | Generated list of all folders: type, issue state, title, parent, branch, last log date | No |

## Workflow

1. **Before the first edit:** find the matching issue (`gh issue list`), or propose one and create
   it only after Mathias confirms. Then open its folder with `start` (idempotent). Copy the request
   into **Input** and add any links to **Definitions**, and create the branch `start` printed.
2. **Continuing someone's work:** read `README.md` and the latest `log.md` entries first.
3. **During work, log after each meaningful step:**
   - what was inspected or changed, and why (with commit hashes and PR links);
   - decisions, with their reason and who made them;
   - failed approaches;
   - the **Next** step.

   Use short bold lead-ins. Don't log routine file reads. Never edit earlier entries.
4. **Run checks whose output matters through the wrapper** (`run <id> <label> -- <cmd>`): the
   build, `npm run wiki`, `supabase db push`, a production check. It saves the output under
   `runs/` and logs the command, exit code and duration. Quote only the conclusion in `log.md`,
   never the raw output.
5. **Record each decision of Mathias's under Definitions:** `**X** (decided YYYY-MM-DD): … because …`.
6. **At session end, if something changed,** write one short issue comment (what changed, with
   hashes, plus decisions, next step and blockers; `gh issue comment <id> --body-file -`) and the
   matching log entry. Do both before the last commit, so the entry travels with it. Don't add a
   separate commit only to log a PR number.
7. **When the issue closes,** move what a later task needs (definitions, decisions and their
   reasons, diagnoses) into the wiki, following `CLAUDE.md`. The folder stays as history.

## Data rules

- Committed WI files contain no personal or row-level data, credentials, tokens or signed URLs,
  and nothing the public-repository rule above excludes.
- Keep even aggregate figures (visit counts, enquiry counts) in `runs/`, unless a figure is needed
  to explain a decision and may be public.
- Treat local run output as sensitive: never paste it into prompts, commits or issues.

## Tooling: `npm run wi -- <command>` (`scripts/wi.mjs`)

| Command | What it does |
| --- | --- |
| `start <id> [--title T] [--type feat] [--parent N] [--slug S]` | Creates the folder and prints the branch name. The title comes from the issue through `gh` unless given |
| `path <id>` | Resolves an id to its folder |
| `log <id> --file <entry.md>` | Appends a log entry (a UTF-8 file, or `-` for stdin; never a long inline argument). The name is `git config user.name` unless `--author` is given |
| `run <id> <label> [--tail N] -- <cmd…>` | Runs a command through the shell, saves its output under `runs/`, shows the last N lines (30) and exits with the command's code |
| `index` | Regenerates `WI/index.md`, with each issue's state from `gh` |
| `check` | Run in CI (`.github/workflows/wi.yml`) and as `npm run wi:check`. Fails on a misnamed folder or note, a missing `README.md` or `log.md`, incomplete frontmatter, a malformed log heading, a misnamed run file, duplicate ids, or run output or the index committed to git |

## Merge note

`log.md` merges by union locally (`.gitattributes`: `WI/**/log.md merge=union`). GitHub's server
side merges ignore that attribute, so never keep a single file that every branch appends to.
