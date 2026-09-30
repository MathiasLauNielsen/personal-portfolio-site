import Link from 'next/link'
import { redirect } from 'next/navigation'
import clsx from 'clsx'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import AdminNav from '../components/AdminNav'

export const revalidate = 0

type Row = {
  tidspunkt: string
  haendelse: 'sidevisning' | 'henvendelse_sendt'
  sti: string
  sprog: string | null
  besoegende: string
  henviser: string | null
  utm_kilde: string | null
  utm_medium: string | null
  utm_kampagne: string | null
  land: string | null
  enhed: string | null
  emne: string | null
}

const ranges = [7, 30, 90, 365]
const maxRows = 50000

// Visits are logged by /api/besoeg without cookies; this page aggregates them for the signed-in admin.
export default async function AdminStatistik({ searchParams }: { searchParams: { dage?: string } }) {
  const supabase = createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const dage = ranges.includes(Number(searchParams.dage)) ? Number(searchParams.dage) : 30
  const since = new Date()
  since.setUTCHours(0, 0, 0, 0)
  since.setUTCDate(since.getUTCDate() - (dage - 1))

  const [{ data: rows }, { count: henvendelser }] = await Promise.all([
    supabase.from('site_besoeg').select('*').gte('tidspunkt', since.toISOString()).order('tidspunkt', { ascending: true }).limit(maxRows),
    supabase.from('kontakt_henvendelser').select('id', { count: 'exact', head: true }).gte('oprettet_at', since.toISOString()),
  ])
  const all = (rows ?? []) as Row[]
  const views = all.filter((r) => r.haendelse === 'sidevisning')
  const sent = all.filter((r) => r.haendelse === 'henvendelse_sendt')
  const visitors = new Set(views.map((r) => r.besoegende)).size

  // Landing rows are the first view per visitor per day: they carry the referrer and UTM parameters.
  const landings = new Map<string, Row>()
  for (const r of views) {
    const key = `${r.besoegende}|${r.tidspunkt.slice(0, 10)}`
    if (!landings.has(key)) landings.set(key, r)
  }
  const landed = Array.from(landings.values())

  const days = Array.from({ length: dage }, (_, i) => {
    const d = new Date(since)
    d.setUTCDate(since.getUTCDate() + i)
    return d.toISOString().slice(0, 10)
  })
  const perDay = days.map((day) => {
    const dayViews = views.filter((r) => r.tidspunkt.startsWith(day))
    return { day, views: dayViews.length, visitors: new Set(dayViews.map((r) => r.besoegende)).size }
  })
  const maxDay = Math.max(1, ...perDay.map((d) => d.views))

  const count = (items: Row[], pick: (r: Row) => string | null | undefined, fallback = '(ukendt)') => {
    const m = new Map<string, { n: number; v: Set<string> }>()
    for (const r of items) {
      const k = pick(r) || fallback
      const e = m.get(k) ?? { n: 0, v: new Set<string>() }
      e.n++
      e.v.add(r.besoegende)
      m.set(k, e)
    }
    return Array.from(m, ([label, e]) => ({ label, n: e.n, visitors: e.v.size })).sort((a, b) => b.n - a.n)
  }

  const source = (r: Row) => r.utm_kilde ? `${r.utm_kilde}${r.utm_medium ? ` / ${r.utm_medium}` : ''}` : r.henviser ? r.henviser : '(direkte eller ukendt)'

  const tables: { title: string; rows: { label: string; n: number; visitors: number }[]; unit?: string }[] = [
    { title: 'Sider', rows: count(views, (r) => r.sti) },
    { title: 'Kilder (første besøg pr. dag)', rows: count(landed, source), unit: 'landinger' },
    { title: 'Kampagner (UTM)', rows: count(landed.filter((r) => r.utm_kampagne), (r) => r.utm_kampagne), unit: 'landinger' },
    { title: 'Lande', rows: count(views, (r) => r.land) },
    { title: 'Enheder', rows: count(views, (r) => r.enhed) },
    { title: 'Sprog', rows: count(views, (r) => r.sprog) },
    { title: 'Henvendelser pr. emne', rows: count(sent, (r) => r.emne), unit: 'henvendelser' },
  ]

  const kpis = [
    { label: 'Sidevisninger', value: views.length },
    { label: 'Besøgende', value: visitors, note: 'unikke pr. dag' },
    { label: 'Henvendelser', value: henvendelser ?? 0, note: 'gemt i databasen' },
    { label: 'Henvendelser pr. 100 besøgende', value: visitors ? Math.round(((henvendelser ?? 0) / visitors) * 1000) / 10 : 0 },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Statistik</h1>
              <p className="mt-1 text-sm text-slate-500">
                Uden cookies. En besøgende tælles én gang pr. dag; bots og forhåndsvisninger er frasorteret.
                {all.length >= maxRows && ' Kun de første 50.000 rækker i perioden er talt med.'}
              </p>
            </div>
            <nav className="flex gap-1 rounded-lg bg-white p-1 shadow-sm">
              {ranges.map((n) => (
                <Link
                  key={n}
                  href={`/admin/statistik?dage=${n}`}
                  className={clsx('rounded-md px-3 py-1.5 text-sm font-medium', n === dage ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100')}
                >
                  {n} dage
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">{k.label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">{k.value.toLocaleString('da-DK')}</p>
                {k.note && <p className="mt-1 text-xs text-slate-400">{k.note}</p>}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">Sidevisninger pr. dag</h2>
              <p className="text-xs text-slate-400">
                <span className="mr-3 inline-block h-2.5 w-2.5 rounded-sm bg-blue-900 align-middle" /> visninger
                <span className="ml-4 mr-3 inline-block h-2.5 w-2.5 rounded-sm bg-cyan-500 align-middle" /> besøgende
              </p>
            </div>
            <svg viewBox={`0 0 ${dage * 10} 120`} className="mt-4 h-40 w-full" preserveAspectRatio="none" role="img" aria-label="Sidevisninger og besøgende pr. dag">
              {perDay.map((d, i) => (
                <g key={d.day}>
                  <title>{`${d.day}: ${d.views} visninger, ${d.visitors} besøgende`}</title>
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

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {tables.map((t) => (
              <div key={t.title} className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="font-semibold text-slate-900">{t.title}</h2>
                {t.rows.length === 0 ? (
                  <p className="mt-3 text-sm text-slate-400">Ingen data i perioden.</p>
                ) : (
                  <table className="mt-3 w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                        <th className="pb-2 font-medium"></th>
                        <th className="pb-2 text-right font-medium">{t.unit ?? 'visninger'}</th>
                        <th className="pb-2 text-right font-medium">besøgende</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.rows.slice(0, 12).map((r) => (
                        <tr key={r.label} className="border-t border-slate-100">
                          <td className="max-w-[16rem] truncate py-1.5 pr-3 text-slate-700" title={r.label}>{r.label}</td>
                          <td className="py-1.5 text-right tabular-nums text-slate-900">{r.n.toLocaleString('da-DK')}</td>
                          <td className="py-1.5 text-right tabular-nums text-slate-500">{r.visitors.toLocaleString('da-DK')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-400">
            Sammenlign med Vercel Web Analytics (sidste måned, uden hændelser) på vercel.com under projektet personal-portfolio-site → Analytics.
          </p>
        </div>
      </div>
    </div>
  )
}
