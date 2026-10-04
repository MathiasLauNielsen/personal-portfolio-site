import type { ReactNode } from 'react'
import clsx from 'clsx'

// Building blocks shared by the blog figures. One accent for the point, grey for context,
// a value on every mark so nothing depends on colour.

export function Bars({
  rows,
  max,
}: {
  rows: { label: string; value: number; display: string; highlight?: boolean; note?: string }[]
  max: number
}) {
  return (
    <div className="flex flex-col gap-4">
      {rows.map((row) => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-ink">{row.label}</span>
            <span className="font-semibold text-ink">{row.display}</span>
          </div>
          <div className="mt-1.5 h-3 bg-paper-line/50">
            <div
              className={clsx('h-full min-w-[3px] rounded-r', row.highlight ? 'bg-accent' : 'bg-muted-dark')}
              style={{ width: `${(row.value / max) * 100}%` }}
            />
          </div>
          {row.note && <p className="mt-1 text-xs text-muted">{row.note}</p>}
        </div>
      ))}
    </div>
  )
}

// A strip of equal squares: "the data". Each square is drawn in one of three states.
export type BlockState = 'idle' | 'read' | 'changed'
export function Blocks({ states }: { states: BlockState[] }) {
  return (
    <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(24, minmax(0, 1fr))' }}>
      {states.map((s, i) => (
        <div
          key={i}
          className={clsx(
            'aspect-square rounded-[3px]',
            s === 'changed' && 'bg-accent',
            s === 'read' && 'bg-accent-light',
            s === 'idle' && 'bg-paper-line'
          )}
        />
      ))}
    </div>
  )
}

export function Legend({ items }: { items: { swatch: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-muted">
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-2">
          <span className={clsx('inline-block h-2.5 w-2.5 rounded-[2px]', it.swatch)} aria-hidden />
          {it.label}
        </li>
      ))}
    </ul>
  )
}

// A ranked list of items, each with what we know about it.
export type RankRow = { rank: number; chosen: boolean; outcome?: 'valuable' | 'nothing'; note?: string; flag?: boolean }
export function RankList({ rows, chosenLabel, notChosenLabel }: { rows: RankRow[]; chosenLabel: string; notChosenLabel: string }) {
  return (
    <ol className="flex flex-col gap-1.5">
      {rows.map((r) => (
        <li
          key={r.rank}
          className={clsx(
            'grid grid-cols-[2rem_1fr_auto] items-center gap-x-3 rounded-lg px-3 py-2 text-sm',
            r.chosen ? 'bg-accent-tint' : 'bg-paper',
            r.flag && 'outline outline-2 outline-dashed outline-accent'
          )}
        >
          <span className="font-mono text-xs text-muted">#{r.rank}</span>
          <span className={r.chosen ? 'text-ink' : 'text-muted'}>{r.chosen ? chosenLabel : notChosenLabel}</span>
          <span className={clsx('font-semibold', r.outcome === 'valuable' ? 'text-accent' : 'text-muted')}>
            {r.outcome === 'valuable' ? 'Valuable' : r.outcome === 'nothing' ? 'Nothing' : '?'}
          </span>
          {r.note && <span className="col-span-3 mt-0.5 text-xs text-muted">{r.note}</span>}
        </li>
      ))}
    </ol>
  )
}

export function Arrow({ down }: { down?: boolean }) {
  return (
    <div className={clsx('flex items-center justify-center text-muted', down && 'rotate-90')} aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  )
}

export function Card({ children, tone = 'plain', title }: { children: ReactNode; tone?: 'plain' | 'accent' | 'muted'; title?: string }) {
  return (
    <div
      className={clsx(
        'rounded-xl border p-4 text-sm leading-relaxed',
        tone === 'plain' && 'border-paper-line bg-paper text-ink',
        tone === 'accent' && 'border-accent/40 bg-accent-tint text-ink',
        tone === 'muted' && 'border-paper-line bg-paper text-muted'
      )}
    >
      {title && <p className="mb-1 font-semibold text-ink">{title}</p>}
      {children}
    </div>
  )
}

// Shared SVG text styles. Figures use a 360-wide viewBox so text stays readable on a phone.
export const svgText = 'fill-ink font-sans'
export const svgMuted = 'fill-muted font-sans'
