import type { FigureDef } from './types'
import { Card, Legend, svgMuted, svgText } from './primitives'

// Figures for "Which number is your forecast?".

// A right-skewed bump (a gamma shape): a long tail of good quarters pulls the average above the midpoint.
// Marked points: 10th percentile x≈80, median x≈167, mean x=185.
function density(x: number) {
  const t = (x - 20) / 55
  return t <= 0 ? 0 : t * t * Math.exp(-t)
}

const forecastPoints: FigureDef = {
  basis: 'illustration',
  title: 'One forecast, three different numbers',
  caption:
    'Next quarter is a range of possible outcomes, not one number. Point 1 is the figure you will beat nine times in ten. Point 2, the midpoint, you beat half the time. Point 3, the average, sits above the midpoint when the good surprises are bigger than the bad ones. A hiring plan, a budget and a sales plan can each need a different point of this one curve.',
  Draw: () => {
    const xs = Array.from({ length: 65 }, (_, i) => 20 + i * 5)
    const peak = Math.max(...xs.map(density))
    const y = (x: number) => 140 - (density(x) / peak) * 115
    const line = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${y(x).toFixed(1)}`).join(' ')
    const area = `${line} L340,140 L20,140 Z`
    const marks = [
      { n: 1, x: 80, label: 'The figure you beat nine times in ten' },
      { n: 2, x: 167, label: 'Midpoint: beaten half the time' },
      { n: 3, x: 185, label: 'Average outcome' },
    ]
    return (
      <div className="max-w-lg">
        <svg viewBox="0 0 360 170" className="h-auto w-full" role="img" aria-label="A skewed curve with three marked points">
          <path d={area} className="fill-accent/10" />
          <path d={line} className="stroke-accent" strokeWidth="2" fill="none" strokeLinejoin="round" />
          <line x1="20" y1="140" x2="340" y2="140" className="stroke-paper-line" strokeWidth="1" />
          {marks.map((m) => (
            <g key={m.n}>
              <line x1={m.x} y1={y(m.x)} x2={m.x} y2="140" className="stroke-muted-dark" strokeWidth="1" />
              <circle cx={m.x} cy={y(m.x)} r="9" className="fill-ink stroke-paper-card" strokeWidth="2" />
              <text x={m.x} y={y(m.x) + 4} textAnchor="middle" fontSize="11" fontWeight="600" className="fill-white font-sans">
                {m.n}
              </text>
            </g>
          ))}
          <text x="20" y="160" fontSize="11" className={svgMuted}>
            Lower revenue
          </text>
          <text x="340" y="160" fontSize="11" textAnchor="end" className={svgMuted}>
            Higher revenue
          </text>
        </svg>
        <ol className="mt-3 flex flex-col gap-1 text-sm text-ink">
          {marks.map((m) => (
            <li key={m.n} className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                {m.n}
              </span>
              {m.label}
            </li>
          ))}
        </ol>
      </div>
    )
  },
}

const outcomes = [4, -8, 12, -3, 9, -14, 7, 2, -20, 10]

function BandRow({ half }: { half: number }) {
  return (
    <svg viewBox="0 0 360 70" className="h-auto w-full" role="img" aria-label="Ten past months, each with a forecast band and the outcome">
      {outcomes.map((o, i) => {
        const x = 20 + i * 35
        const inside = Math.abs(o) <= half
        return (
          <g key={i}>
            <rect x={x - 8} y={35 - half} width="16" height={half * 2} rx="3" className="fill-paper-line" />
            <circle cx={x} cy={35 + o} r="4.5" className={inside ? 'fill-ink stroke-paper-card' : 'fill-paper-card stroke-accent'} strokeWidth="2" />
          </g>
        )
      })}
    </svg>
  )
}

const calibrationSharpness: FigureDef = {
  basis: 'illustration',
  title: 'A range should hold as often as it claims, and be as narrow as it can while doing so',
  caption:
    'Each strip is ten past months. The grey band is the range the forecaster gave at the time, each claimed to hold nine times in ten; the dot is what happened, hollow when it fell outside. Here the range that always held was wider than it needed to be: one half as wide held 9 of 10. The one that often missed claimed more than it knew. Only a record of past forecasts and outcomes shows which kind you have.',
  Draw: () => (
    <div className="flex max-w-lg flex-col gap-5">
      {[
        { name: 'Always wide', half: 28, verdict: 'Held 10 of 10: too cautious to act on' },
        { name: 'Always narrow', half: 6, verdict: 'Held 3 of 10: claimed more than it knew' },
        { name: 'As narrow as the record allows', half: 15, verdict: 'Held 9 of 10, as claimed: the goal' },
      ].map((r) => (
        <div key={r.name}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
            <span className="font-semibold text-ink">{r.name}</span>
            <span className="text-xs text-muted">{r.verdict}</span>
          </div>
          <BandRow half={r.half} />
        </div>
      ))}
      <Legend
        items={[
          { swatch: 'bg-paper-line', label: 'Range given at the time (claimed: 9 in 10)' },
          { swatch: 'bg-ink rounded-full', label: 'Outcome inside the range' },
          { swatch: 'border-2 border-accent bg-paper-card rounded-full', label: 'Outcome outside the range' },
        ]}
      />
    </div>
  ),
}

const averaging: FigureDef = {
  basis: 'illustration',
  title: 'Averaging two forecasts is never further off than the two are on average, and often closer than both',
  caption:
    'Two teams disagree and miss in opposite directions, so in the average the mistakes partly cancel: 106 against an outcome of 103, closer than either team. When both miss the same way, the average is still no worse than the two are on average. Fifty years of studies find the plain average of good-faith forecasts hard to beat.',
  Draw: () => {
    const sx = (v: number) => 30 + ((v - 80) / 50) * 300
    return (
      <svg viewBox="0 0 360 90" className="h-auto w-full max-w-lg" role="img" aria-label="A number line with two forecasts, their average and the outcome">
        <line x1="30" y1="45" x2="330" y2="45" className="stroke-paper-line" strokeWidth="1" />
        <circle cx={sx(92)} cy="45" r="5" className="fill-muted-dark stroke-paper-card" strokeWidth="2" />
        <circle cx={sx(120)} cy="45" r="5" className="fill-muted-dark stroke-paper-card" strokeWidth="2" />
        <circle cx={sx(106)} cy="45" r="6" className="fill-accent stroke-paper-card" strokeWidth="2" />
        <rect x={sx(103) - 5} y="40" width="10" height="10" className="fill-ink stroke-paper-card" strokeWidth="2" />
        <text x={sx(92)} y="28" textAnchor="middle" fontSize="11" className={svgText}>
          Finance said 92
        </text>
        <text x={sx(120)} y="28" textAnchor="middle" fontSize="11" className={svgText}>
          Sales said 120
        </text>
        <text x={sx(103) - 10} y="72" textAnchor="end" fontSize="11" className={svgText}>
          Outcome 103
        </text>
        <text x={sx(106) + 10} y="72" fontSize="11" className={svgText}>
          Average 106
        </text>
      </svg>
    )
  },
}

const actuals = [52, 58, 50, 56, 60, 53, 74, 70, 78, 72, 76, 71]

function BandSeries({ centre, half }: { centre: number[]; half: number[] }) {
  const x = (i: number) => 20 + i * 29
  const y = (v: number) => 120 - v
  const upper = centre.map((c, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(c + half[i])}`).join(' ')
  const lower = centre
    .map((c, i) => `L${x(i)},${y(c - half[i])}`)
    .reverse()
    .join(' ')
  const misses = actuals.filter((a, i) => Math.abs(a - centre[i]) > half[i]).length
  return (
    <div>
      <svg viewBox="0 0 360 110" className="h-auto w-full" role="img" aria-label="Twelve months with a forecast band and outcomes">
        <path d={`${upper} ${lower} Z`} className="fill-accent/10" />
        <line x1={x(5) + 14.5} y1="8" x2={x(5) + 14.5} y2="100" className="stroke-muted-dark" strokeWidth="1" />
        <text x={x(5) + 19} y="16" fontSize="10" className={svgMuted}>
          Conditions change
        </text>
        {actuals.map((a, i) => (
          <circle
            key={i}
            cx={x(i)}
            cy={y(a)}
            r="4.5"
            className={Math.abs(a - centre[i]) > half[i] ? 'fill-paper-card stroke-accent' : 'fill-ink stroke-paper-card'}
            strokeWidth="2"
          />
        ))}
      </svg>
      <p className="text-xs text-muted">
        {misses} of 12 outcomes fell outside the range
      </p>
    </div>
  )
}

const bandWidens: FigureDef = {
  basis: 'illustration',
  title: 'When conditions change, a range that learns from its misses gets wider',
  caption:
    'Twelve months of revenue, higher drawn higher, with the range the forecast gave for each. Halfway through, conditions change. The top forecast watches its own misses: its range widens, its centre follows the new level, and it still holds eleven months in twelve. The bottom one never changes and misses half. A range that looked the same through the change was not telling you how much less it knew.',
  Draw: () => (
    <div className="flex max-w-lg flex-col gap-5">
      <div>
        <p className="text-sm font-semibold text-ink">Adapts: the range learns from its misses</p>
        <BandSeries centre={[55, 55, 55, 55, 55, 55, 60, 66, 71, 73, 73, 73]} half={[9, 9, 9, 9, 9, 9, 12, 16, 18, 18, 16, 14]} />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink">Never adapts: the range stays the same</p>
        <BandSeries centre={Array(12).fill(55)} half={Array(12).fill(9)} />
      </div>
      <Legend
        items={[
          { swatch: 'bg-accent/20', label: 'Range given at the time' },
          { swatch: 'bg-ink rounded-full', label: 'Outcome inside' },
          { swatch: 'border-2 border-accent bg-paper-card rounded-full', label: 'Outcome outside' },
        ]}
      />
    </div>
  ),
}

const partsAddUp: FigureDef = {
  basis: 'illustration',
  title: 'Regions forecast on their own rarely add up to the company forecast',
  caption:
    'Three regions forecast separately sum to 105; the company forecast, made from the total, says 100. Scaling every region down to fit gives each the same correction, whether or not it was the one that was off. Combining the levels by how reliable each has been makes them add up and, on average, makes the forecasts more accurate taken together.',
  Draw: () => (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-ink">Regions, forecast separately</span>
          <span className="font-semibold text-ink">105</span>
        </div>
        <div className="mt-1.5 flex h-6 gap-0.5">
          {[
            { n: 'North', v: 40 },
            { n: 'South', v: 35 },
            { n: 'West', v: 30 },
          ].map((r) => (
            <div key={r.n} className="flex items-center justify-center rounded-[3px] bg-muted-dark text-xs text-ink" style={{ width: `${(r.v / 105) * 100}%` }}>
              {r.n} {r.v}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-ink">Company, forecast from the total</span>
          <span className="font-semibold text-ink">100</span>
        </div>
        <div className="mt-1.5 flex h-6">
          <div className="rounded-[3px] bg-accent" style={{ width: `${(100 / 105) * 100}%` }} />
          <div className="flex items-center pl-1 text-xs text-muted" style={{ width: `${(5 / 105) * 100}%` }}>
            gap
          </div>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <Card tone="muted" title="The usual fix: scale the regions">
          Each region is cut by about 5% so the sum is 100, including the regions that were right.
        </Card>
        <Card tone="accent" title="The better way: combine the levels">
          Each level counts by how reliable it has been. The result adds up, and each level borrows what the others show.
        </Card>
      </div>
    </div>
  ),
}

export const forecastFigures = {
  'forecast-three-points': forecastPoints,
  'forecast-calibration-sharpness': calibrationSharpness,
  'forecast-averaging': averaging,
  'forecast-band-widens': bandWidens,
  'forecast-parts-add-up': partsAddUp,
}
