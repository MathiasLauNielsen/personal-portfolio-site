// Admin only. Turns the rows of site_besoeg into visits (one visitor key on one day) and sorts each visit
// into a category, so the statistics show real visitors by default and hide Mathias's own checks and
// visits too short to be read.

export type BesoegRow = {
  tidspunkt: string
  haendelse: 'sidevisning' | 'henvendelse_sendt'
  sti: string
  sprog: string | null
  besoegende: string
  henviser: string | null
  utm_kilde: string | null
  utm_medium: string | null
  utm_kampagne: string | null
  via: string | null
  land: string | null
  bynavn: string | null
  enhed: string | null
  emne: string | null
  eget: boolean
  visning_id: string | null
  sekunder: number | null
}

// rigtig: a real visit. kort: one page, visible under 3 seconds (bots that run scripts, and instant bounces).
// egen: Mathias's own device, or marked as his in the admin.
export type Kategori = 'rigtig' | 'kort' | 'egen'

export type Besoeg = {
  id: string
  besoegende: string
  dag: string
  start: string
  slut: string
  land: string | null
  bynavn: string | null
  enhed: string | null
  kilde: string
  via: string | null
  kampagne: string | null
  sider: { sti: string; tidspunkt: string; sekunder: number | null }[]
  // Total visible time; null when the visit predates time tracking (2026-10-11).
  sekunder: number | null
  henvendelse: boolean
  emner: string[]
  kategori: Kategori
}

export const besoegColumns =
  'tidspunkt, haendelse, sti, sprog, besoegende, henviser, utm_kilde, utm_medium, utm_kampagne, via, land, bynavn, enhed, emne, eget, visning_id, sekunder'

export function sourceOf(r: Pick<BesoegRow, 'via' | 'utm_kilde' | 'utm_medium' | 'henviser'>): string {
  if (r.via) return `link: ${r.via}`
  if (r.utm_kilde) return `${r.utm_kilde}${r.utm_medium ? ` / ${r.utm_medium}` : ''}`
  return r.henviser ?? '(direkte eller ukendt)'
}

// Rows must be sorted by time, oldest first.
export function groupVisits(rows: BesoegRow[]): Besoeg[] {
  const visits = new Map<string, BesoegRow[]>()
  for (const r of rows) {
    const id = `${r.besoegende}|${r.tidspunkt.slice(0, 10)}`
    const list = visits.get(id)
    if (list) list.push(r)
    else visits.set(id, [r])
  }

  return Array.from(visits, ([id, list]) => {
    const views = list.filter((r) => r.haendelse === 'sidevisning')
    const first = views[0] ?? list[0]
    const timed = views.length > 0 && views.every((r) => r.visning_id)
    // A timed view with no time recorded was never visible for a full second.
    const sekunder = timed ? views.reduce((sum, r) => sum + (r.sekunder ?? 0), 0) : null
    const sent = list.filter((r) => r.haendelse === 'henvendelse_sendt')
    const kategori: Kategori = list.some((r) => r.eget)
      ? 'egen'
      : sent.length === 0 && views.length <= 1 && sekunder !== null && sekunder < 3
        ? 'kort'
        : 'rigtig'
    return {
      id,
      besoegende: first.besoegende,
      dag: first.tidspunkt.slice(0, 10),
      start: list[0].tidspunkt,
      slut: list[list.length - 1].tidspunkt,
      land: first.land,
      bynavn: first.bynavn,
      enhed: first.enhed,
      kilde: sourceOf(first),
      via: first.via,
      kampagne: first.utm_kampagne,
      sider: views.map((r) => ({ sti: r.sti, tidspunkt: r.tidspunkt, sekunder: timed ? r.sekunder ?? 0 : null })),
      sekunder,
      henvendelse: sent.length > 0,
      emner: sent.map((r) => r.emne).filter((e): e is string => !!e),
      kategori,
    }
  })
}

export function formatSeconds(s: number | null): string {
  if (s === null) return '–'
  if (s < 60) return `${s} sek.`
  const m = Math.floor(s / 60)
  return `${m} min. ${String(s % 60).padStart(2, '0')} sek.`
}

export function median(values: number[]): number | null {
  if (values.length === 0) return null
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
}
