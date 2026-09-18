import type { Copy } from '@/content'

// Two-bar comparison on the dark hero. Values are direct-labelled, so no axis or legend is needed.
export default function ProofChart({ chart, statusLabel }: { chart: Copy['home']['hero']['chart']; statusLabel: string }) {
  const rows = [
    { label: chart.before, value: chart.beforeValue, bar: 'bg-muted-dark/50', delay: '200ms' },
    { label: chart.after, value: chart.afterValue, bar: 'bg-lime', delay: '500ms' },
  ]

  return (
    <figure className="rounded-3xl border border-ink-line bg-ink-soft p-6 sm:p-8">
      <p className="eyebrow text-lime">{chart.kicker}</p>
      <figcaption className="mt-3 text-lg font-medium leading-snug text-paper">{chart.title}</figcaption>

      <div className="mt-8 flex flex-col gap-6" role="img" aria-label={`${chart.before}: ${chart.beforeValue}%. ${chart.after}: ${chart.afterValue}%.`}>
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm text-muted-dark">{row.label}</span>
              <span className="font-mono text-2xl font-medium text-paper">{row.value}{chart.percent}</span>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-ink-line">
              <div
                className={`h-3 origin-left animate-grow rounded-full ${row.bar}`}
                style={{ width: `${row.value}%`, animationDelay: row.delay }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 border-t border-ink-line pt-5 text-sm leading-relaxed text-muted-dark">{chart.footnote}</p>
      <p className="eyebrow mt-3 flex items-center gap-2 text-muted-dark">
        <span className="h-2 w-2 rounded-full bg-paper" aria-hidden />
        {statusLabel}
      </p>
    </figure>
  )
}
