import clsx from 'clsx'
import type { BarChart } from '@/content'

// Horizontal bars on one scale, each labelled with its value, so the chart reads without colour.
// Grey is what was found; the accent is the result.
export default function BarCompare({ chart }: { chart: BarChart }) {
  const pct = (n: number) => `${(n / chart.max) * 100}%`

  return (
    <figure>
      <figcaption className="eyebrow !text-[10px] text-muted">{chart.caption}</figcaption>
      <div className="mt-4 flex flex-col gap-3.5">
        {chart.rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-muted">{row.label}</span>
              <span className="font-semibold">{row.display}</span>
            </div>
            <div className="mt-1.5 flex h-2.5 gap-0.5 bg-paper-line/50">
              <div
                className={clsx('h-full min-w-[3px]', row.highlight ? 'bg-accent' : 'bg-muted-dark', !row.upTo && 'rounded-r')}
                style={{ width: pct(row.value) }}
              />
              {/* A range: the lighter part runs from the low to the high end. */}
              {row.upTo && <div className="h-full rounded-r bg-muted-dark/50" style={{ width: pct(row.upTo - row.value) }} />}
            </div>
          </div>
        ))}
      </div>
    </figure>
  )
}
