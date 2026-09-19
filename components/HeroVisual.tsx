import { ArrowRight, Check } from 'lucide-react'
import type { Copy } from '@/content'

// Illustrates the two offers: a data platform flow above, an AI coding session below.
export default function HeroVisual({ visual }: { visual: Copy['home']['hero']['visual'] }) {
  return (
    <div className="flex flex-col gap-4" aria-hidden>
      <div className="rounded-2xl border border-paper-line bg-paper-card p-6 shadow-[0_24px_60px_-30px_rgba(16,19,26,0.25)]">
        <p className="eyebrow text-accent">{visual.platformLabel}</p>
        <ol className="mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-3">
          {visual.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span
                className={
                  i === visual.flow.length - 1
                    ? 'rounded-lg bg-accent px-2.5 py-2 font-mono text-[11px] text-white'
                    : 'rounded-lg border border-paper-line bg-paper px-2.5 py-2 font-mono text-[11px]'
                }
              >
                {step}
              </span>
              {i < visual.flow.length - 1 && <ArrowRight size={12} className="text-muted" />}
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl bg-ink p-6 text-white shadow-[0_24px_60px_-30px_rgba(16,19,26,0.5)]">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-accent-light">{visual.aiLabel}</p>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-line" />
          </div>
        </div>
        <ul className="mt-5 flex flex-col gap-2.5 font-mono text-[13px] leading-relaxed">
          {visual.terminal.map((line) => (
            <li key={line.text} className="flex gap-2.5">
              {line.kind === 'cmd' ? (
                <span className="text-accent-light">$</span>
              ) : (
                <Check size={14} className="mt-1 shrink-0 text-accent-light" />
              )}
              <span className={line.kind === 'cmd' ? 'text-white' : 'text-muted-dark'}>{line.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
