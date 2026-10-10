import Link from 'next/link'
import { redirect } from 'next/navigation'
import clsx from 'clsx'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { caseKeys, casePath, getCopy, routes, site } from '@/content'
import { besoegColumns, formatSeconds, groupVisits, median, type Besoeg, type BesoegRow, type Kategori } from '@/lib/besoeg-admin'
import AdminNav from '../components/AdminNav'
import { LinkBuilder, MarkOwnButton, OwnDeviceToggle } from './StatistikTools'

export const revalidate = 0

const ranges = [7, 30, 90, 365]
const maxRows = 50000

const kategorier: { key: Kategori; label: string; note: string }[] = [
  { key: 'rigtig', label: 'Rigtige besøg', note: 'vises altid' },
  { key: 'kort', label: 'Under 3 sekunder', note: 'én side, under 3 sek. synlig: bots, der kører scripts, og folk der lukker med det samme' },
  { key: 'egen', label: 'Dine egne', note: 'fra browsere, hvor du har åbnet admin, eller markeret med "Det er mig"' },
]

// Visits are logged by /api/besoeg without cookies. Real visits are shown by default; your own and the
// very short ones are counted but hidden until switched on.
export default async function AdminStatistik({ searchParams }: { searchParams: { dage?: string; vis?: string } }) {
  const supabase = createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const dage = ranges.includes(Number(searchParams.dage)) ? Number(searchParams.dage) : 30
  const shown = new Set<Kategori>(['rigtig', ...((searchParams.vis ?? '').split(',').filter((k) => k === 'kort' || k === 'egen') as Kategori[])])
  const since = new Date()
  since.setUTCHours(0, 0, 0, 0)
  since.setUTCDate(since.getUTCDate() - (dage - 1))

  const [{ data: rows }, { count: henvendelser }] = await Promise.all([
    supabase.from('site_besoeg').select(besoegColumns).gte('tidspunkt', since.toISOString()).order('tidspunkt', { ascending: true }).limit(maxRows),
    supabase.from('kontakt_henvendelser').select('id', { count: 'exact', head: true }).gte('oprettet_at', since.toISOString()),
  ])
  const all = (rows ?? []) as unknown as BesoegRow[]
  const allVisits = groupVisits(all)
  const counts = Object.fromEntries(kategorier.map((k) => [k.key, allVisits.filter((v) => v.kategori === k.key).length])) as Record<Kategori, number>
  const visits = allVisits.filter((v) => shown.has(v.kategori))
  const views = visits.flatMap((v) => v.sider.map((s) => ({ ...s, v })))

  const href = (next: { dage?: number; vis?: Kategori[] }) => {
    const vis = (next.vis ?? Array.from(shown)).filter((k) => k !== 'rigtig')
    const q = new URLSearchParams({ dage: String(next.dage ?? dage) })
    if (vis.length) q.set('vis', vis.join(','))
    return `/admin/statistik?${q}`
  }
  const toggled = (k: Kategori) => (shown.has(k) ? Array.from(shown).filter((s) => s !== k) : [...Array.from(shown), k])

  const days = Array.from({ length: dage }, (_, i) => {
    const d = new Date(since)
    d.setUTCDate(since.getUTCDate() + i)
    return d.toISOString().slice(0, 10)
  })
  const perDay = days.map((day) => {
    const dayVisits = visits.filter((v) => v.dag === day)
    return { day, views: dayVisits.reduce((n, v) => n + v.sider.length, 0), visitors: dayVisits.length }
  })
  const maxDay = Math.max(1, ...perDay.map((d) => d.views))

  // One row per label: page views, visits, and the median visible time where it is known.
  const count = (items: { label: string; v: Besoeg; sekunder?: number | null }[]) => {
    const m = new Map<string, { n: number; v: Set<string>; s: number[] }>()
    for (const it of items) {
      const e = m.get(it.label) ?? { n: 0, v: new Set<string>(), s: [] }
      e.n++
      e.v.add(it.v.id)
      if (it.sekunder != null) e.s.push(it.sekunder)
      m.set(it.label, e)
    }
    return Array.from(m, ([label, e]) => ({ label, n: e.n, visitors: e.v.size, time: median(e.s) })).sort((a, b) => b.n - a.n)
  }
  const perVisit = (pick: (v: Besoeg) => string | null) =>
    count(visits.filter((v) => pick(v)).map((v) => ({ label: pick(v) as string, v, sekunder: v.sekunder })))

  const tables: { title: string; unit: string; rows: ReturnType<typeof count>; empty?: string }[] = [
    { title: 'Kilder', unit: 'besøg', rows: perVisit((v) => v.kilde) },
    { title: 'Delte links og kampagner', unit: 'besøg', rows: perVisit((v) => (v.via ? `via ${v.via}` : v.kampagne ? `kampagne ${v.kampagne}` : null)), empty: 'Ingen endnu. Lav et link med mærkat nederst på siden.' },
    { title: 'Sider', unit: 'visninger', rows: count(views.map((x) => ({ label: x.sti, v: x.v, sekunder: x.sekunder }))) },
    { title: 'Byer', unit: 'besøg', rows: perVisit((v) => (v.bynavn ? `${v.bynavn}${v.land ? `, ${v.land}` : ''}` : v.land ? `(by ukendt), ${v.land}` : null)) },
    { title: 'Enheder', unit: 'besøg', rows: perVisit((v) => v.enhed) },
    { title: 'Henvendelser pr. emne', unit: 'henvendelser', rows: count(visits.flatMap((v) => v.emner.map((e) => ({ label: e, v })))) },
  ]

  const timedVisits = visits.filter((v) => v.sekunder !== null).map((v) => v.sekunder as number)
  const kpis = [
    { label: 'Besøg', value: visits.length.toLocaleString('da-DK'), note: 'én besøgende på én dag' },
    { label: 'Sidevisninger', value: views.length.toLocaleString('da-DK') },
    { label: 'Typisk tid pr. besøg', value: formatSeconds(median(timedVisits)), note: timedVisits.length ? `median af ${timedVisits.length} besøg med målt tid` : 'måles fra 11. okt. 2026' },
    { label: 'Henvendelser', value: (henvendelser ?? 0).toLocaleString('da-DK'), note: visits.length ? `${Math.round(((henvendelser ?? 0) / visits.length) * 1000) / 10} pr. 100 besøg` : undefined },
  ]

  const copy = getCopy('en')
  const linkPages = [
    ...(['home', 'data', 'ai', 'cases', 'about', 'contact'] as const).map((k) => ({ label: `${k === 'home' ? 'Forside' : copy.nav[k]} (en)`, path: routes.en[k] })),
    ...caseKeys.map((k) => ({ label: `Case: ${copy.cases.studies.find((s) => s.key === k)?.hero.eyebrow.replace('Case · ', '') ?? k} (en)`, path: casePath('en', k) })),
    ...(['home', 'data', 'ai', 'cases', 'about', 'contact'] as const).map((k) => ({ label: `${getCopy('da').nav[k]} (da)`, path: routes.da[k] })),
  ]
  const latest = [...visits].sort((a, b) => b.start.localeCompare(a.start)).slice(0, 40)
  const time = (iso: string) => new Date(iso).toLocaleString('da-DK', { timeZone: 'Europe/Copenhagen', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Statistik</h1>
              <p className="mt-1 text-sm text-slate-500">
                Uden cookies og uden IP-adresser. Et besøg er én besøgende på én dag; kendte bots og forhåndsvisninger gemmes slet ikke.
                {all.length >= maxRows && ' Kun de første 50.000 rækker i perioden er talt med.'}
              </p>
            </div>
            <nav className="flex gap-1 rounded-lg bg-white p-1 shadow-sm">
              {ranges.map((n) => (
                <Link
                  key={n}
                  href={href({ dage: n })}
                  className={clsx('rounded-md px-3 py-1.5 text-sm font-medium', n === dage ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100')}
                >
                  {n} dage
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories: real visits always, the other two only when switched on */}
          <div className="mb-6 flex flex-wrap gap-2">
            {kategorier.map((k) => {
              const on = shown.has(k.key)
              const inner = (
                <>
                  <span className={clsx('h-2.5 w-2.5 rounded-sm', on ? 'bg-blue-900' : 'border border-slate-300')} />
                  {k.label}
                  <span className="tabular-nums text-slate-400">{counts[k.key]}</span>
                </>
              )
              return k.key === 'rigtig' ? (
                <span key={k.key} title={k.note} className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-800 shadow-sm">
                  {inner}
                </span>
              ) : (
                <Link
                  key={k.key}
                  href={href({ vis: toggled(k.key) })}
                  title={k.note}
                  className={clsx('inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium shadow-sm', on ? 'bg-white text-slate-800' : 'bg-white/60 text-slate-500 hover:bg-white')}
                >
                  {inner}
                </Link>
              )
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">{k.label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{k.value}</p>
                {k.note && <p className="mt-1 text-xs text-slate-400">{k.note}</p>}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">Pr. dag</h2>
              <p className="text-xs text-slate-400">
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-blue-900 align-middle" /> sidevisninger
                <span className="ml-4 mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-cyan-500 align-middle" /> besøg
              </p>
            </div>
            <svg viewBox={`0 0 ${dage * 10} 120`} className="mt-4 h-40 w-full" preserveAspectRatio="none" role="img" aria-label="Sidevisninger og besøg pr. dag">
              {perDay.map((d, i) => (
                <g key={d.day}>
                  <title>{`${d.day}: ${d.views} sidevisninger, ${d.visitors} besøg`}</title>
                  <rect x={i * 10 + 1} y={120 - (d.views / maxDay) * 110} width={8} height={(d.views / maxDay) * 110} className="fill-blue-900" />
                  <rect x={i * 10 + 1} y={120 - (d.visitors / maxDay) * 110} width={8} height={(d.visitors / maxDay) * 110} className="fill-cyan-500" />
                </g>
              ))}
            </svg>
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>{days[0]}</span>
              <span>{days[days.length - 1]}</span>
            </div>
          </div>

          {/* Each visit: where it came from and what was read, in order */}
          <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">Seneste besøg</h2>
            <p className="mt-1 text-xs text-slate-400">
              Hvem der står bag, kan siden ikke se. Kilden, et mærkat fra et link, du har delt, og en henvendelse samme dag er det, der fortæller det.
            </p>
            {latest.length === 0 ? (
              <p className="mt-3 text-sm text-slate-400">Ingen besøg i perioden.</p>
            ) : (
              <ul className="mt-3 flex flex-col">
                {latest.map((v) => (
                  <li key={v.id} className="flex items-start gap-3 border-t border-slate-100 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        <span className="font-medium text-slate-900">{time(v.start)}</span>
                        <span className="text-slate-500">{[v.bynavn, v.land].filter(Boolean).join(', ') || 'ukendt sted'} · {v.enhed ?? 'ukendt enhed'}</span>
                        <span className="text-slate-500">{v.kilde}</span>
                        {v.henvendelse && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">sendte henvendelse</span>}
                        {v.kategori !== 'rigtig' && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{v.kategori === 'egen' ? 'dig' : 'under 3 sek.'}</span>}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {v.sider.map((s, i) => (
                          <span key={i}>
                            {i > 0 && <span className="text-slate-300"> → </span>}
                            <span className="text-slate-700">{s.sti}</span>
                            {s.sekunder !== null && <span className="text-slate-400"> ({formatSeconds(s.sekunder)})</span>}
                          </span>
                        ))}
                        {v.sekunder !== null && <span className="ml-2 text-slate-400">· i alt {formatSeconds(v.sekunder)}</span>}
                      </p>
                    </div>
                    <MarkOwnButton besoegende={v.besoegende} eget={v.kategori === 'egen'} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {tables.map((t) => (
              <div key={t.title} className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="font-semibold text-slate-900">{t.title}</h2>
                {t.rows.length === 0 ? (
                  <p className="mt-3 text-sm text-slate-400">{t.empty ?? 'Ingen data i perioden.'}</p>
                ) : (
                  <table className="mt-3 w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                        <th className="pb-2 font-medium"></th>
                        <th className="pb-2 text-right font-medium">{t.unit}</th>
                        {t.unit === 'visninger' && <th className="pb-2 text-right font-medium">besøg</th>}
                        <th className="pb-2 text-right font-medium">typisk tid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.slice(0, 12).map((r) => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="max-w-[16rem] truncate py-1.5 pr-3 text-slate-700" title={r.label}>{r.label}</td>
                          <td className="py-1.5 text-right tabular-nums text-slate-900">{r.n.toLocaleString('da-DK')}</td>
                          {t.unit === 'visninger' && <td className="py-1.5 text-right tabular-nums text-slate-500">{r.visitors.toLocaleString('da-DK')}</td>}
                          <td className="py-1.5 text-right tabular-nums text-slate-500">{formatSeconds(r.time)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-900">Link med mærkat</h2>
              <p className="mb-4 mt-1 text-xs text-slate-400">
                Til links, du selv sender: til en mægler, i et opslag eller til et firma. Mærkatet vises under kilder og på besøget, og siden fjerner det fra adresselinjen ved ankomst.
              </p>
              <LinkBuilder base={site.url} pages={linkPages} />
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-900">Denne browser</h2>
              <div className="mt-3">
                <OwnDeviceToggle />
              </div>
              <p className="mt-4 text-xs text-slate-400">På telefonen: log ind på admin én gang, så tæller dine besøg derfra også som dine.</p>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            Sammenlign med Vercel Web Analytics (sidste måned, uden hændelser) på vercel.com under projektet personal-portfolio-site → Analytics.
          </p>
        </div>
      </div>
    </div>
  )
}
