import type { FigureDef } from './types'
import { Bars, Legend, svgMuted, svgText } from './primitives'

// Figures for "What it costs to find out: exploration under a budget".

// Log-gamma (Lanczos), enough for drawing Beta densities.
function lgamma(z: number): number {
  const g = 7
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059,
    12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ]
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lgamma(1 - z)
  z -= 1
  let x = c[0]
  for (let i = 1; i < g + 2; i++) x += c[i] / (z + i)
  const t = z + g + 0.5
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x)
}

function betaPdf(x: number, a: number, b: number): number {
  if (x <= 0 || x >= 1) return 0
  return Math.exp((a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x) - (lgamma(a) + lgamma(b) - lgamma(a + b)))
}

const thompson: FigureDef = {
  basis: 'illustration',
  title: 'Thompson sampling: draw one plausible value per option, pick the highest draw',
  caption:
    'Each curve is what the data so far says an option’s true rate could be. A has 9 wins in 30 tries and looks best on average. B has 60 in 300 and is well known at about 20%. C has 1 in 5 and is barely known. Each round, one value is drawn from each curve and the highest draw is played. This round C’s draw came out highest, so C is tried, and its curve narrows. An option that is almost certainly worse rarely draws highest. The curves are scaled to the same height; their width is what matters.',
  Draw: () => {
    const x0 = 24
    const x1 = 340
    const y0 = 130
    const arms = [
      { name: 'A: 9 of 30', a: 10, b: 22, sample: 0.33, accent: false },
      { name: 'B: 60 of 300', a: 61, b: 241, sample: 0.21, accent: false },
      { name: 'C: 1 of 5', a: 2, b: 5, sample: 0.52, accent: true },
    ]
    const xs = Array.from({ length: 121 }, (_, i) => i / 120)
    const peaks = arms.map((m) => Math.max(...xs.map((x) => betaPdf(x, m.a, m.b))))
    const sx = (x: number) => x0 + x * (x1 - x0)
    const sy = (v: number, i: number) => y0 - (v / peaks[i]) * 105
    return (
      <div className="max-w-lg">
        <svg viewBox="0 0 360 150" className="h-auto w-full" role="img" aria-label="Three posterior curves with one draw each">
          <line x1={x0} y1={y0} x2={x1} y2={y0} className="stroke-paper-line" strokeWidth="1" />
          {arms.map((m, k) => (
            <path
              key={m.name}
              d={xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${sx(x).toFixed(1)},${sy(betaPdf(x, m.a, m.b), k).toFixed(1)}`).join(' ')}
              className={m.accent ? 'stroke-accent' : 'stroke-muted-dark'}
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
            />
          ))}
          {arms.map((m, k) => (
            <g key={m.name + 's'}>
              <line x1={sx(m.sample)} y1={y0} x2={sx(m.sample)} y2={sy(betaPdf(m.sample, m.a, m.b), k)} className="stroke-paper-line" strokeWidth="1" />
              <circle cx={sx(m.sample)} cy={sy(betaPdf(m.sample, m.a, m.b), k)} r="4.5" className="fill-ink stroke-paper-card" strokeWidth="2" />
            </g>
          ))}
          <text x={sx(0.52)} y={sy(betaPdf(0.52, 2, 5), 2) - 10} fontSize="10" fontWeight="600" textAnchor="middle" className={svgText}>
            C drawn highest: play C
          </text>
          {[0, 0.25, 0.5, 0.75, 1].map((t) => (
            <text key={t} x={sx(t)} y="145" fontSize="10" textAnchor="middle" className={svgMuted}>
              {Math.round(t * 100)}%
            </text>
          ))}
        </svg>
        <Legend
          items={[
            { swatch: 'bg-muted-dark', label: 'A (9 of 30) and B (60 of 300): well known' },
            { swatch: 'bg-accent', label: 'C (1 of 5): barely known, wide curve' },
            { swatch: 'bg-ink rounded-full', label: 'This round’s draw' },
          ]}
        />
      </div>
    )
  },
}

const delayedFeedback: FigureDef = {
  basis: 'published',
  title: 'One result in eight arrived more than two weeks after the decision',
  caption:
    'When the sales that followed an ad click were recorded, in display advertising data from Criteo (30-day window). Each bar is a separate slice of time, and the four add up to 100%. A system that counts a silent click as a failure learns the wrong rate. Source: Chapelle, "Modeling delayed feedback in display advertising", KDD 2014.',
  Draw: () => (
    <Bars
      max={100}
      rows={[
        { label: 'Within the first hour', value: 35, display: '35%' },
        { label: 'Between one hour and one day', value: 15, display: 'about 15%' },
        { label: 'Between one day and two weeks', value: 37, display: 'about 37%' },
        { label: 'Later than two weeks', value: 13, display: '13%', highlight: true, note: 'Still unknown when a two-week test ends' },
      ]}
    />
  ),
}

const peeking: FigureDef = {
  basis: 'published',
  title: 'Checking an A/B test as it runs finds a winner where there is none',
  caption:
    'Optimizely simulated millions of tests of a page against itself, so there was no real difference to find. The bars show the share that declared a winner or loser at least once, by how often the usual test was checked, and with a sequential method built to be checked after every visitor. Source: Optimizely, "The story behind our Stats Engine", January 2015.',
  Draw: () => (
    <Bars
      max={100}
      rows={[
        { label: 'Usual test, checked after every visitor', value: 57, display: '57%' },
        { label: 'Usual test, checked every 500 visitors', value: 26, display: '26%' },
        { label: 'Usual test, checked every 1,000 visitors', value: 20, display: '20%' },
        { label: 'Sequential test, checked after every visitor', value: 3, display: '3%', highlight: true },
      ]}
    />
  ),
}

const ecmo: FigureDef = {
  basis: 'published',
  title: 'Adapting too hard: a trial that learned, and could not prove it',
  caption:
    'A 1985 trial of a treatment for newborns with respiratory failure made each next patient more likely to receive whichever treatment had done better so far. Twelve infants were enrolled: one received the conventional treatment and died, eleven received the new treatment and all survived. Ethically the design did what it meant to. Statistically it left one control patient, so the result convinced few and further trials followed. Source: Bartlett et al., Pediatrics 1985; Ware, Statistical Science 1989.',
  Draw: () => (
    <Bars
      max={12}
      rows={[
        { label: 'New treatment: 11 patients, 11 survived', value: 11, display: '11', highlight: true },
        { label: 'Conventional treatment: 1 patient, died', value: 1, display: '1', note: 'One control is not evidence' },
      ]}
    />
  ),
}

export const explorationFigures = {
  'exploration-thompson': thompson,
  'exploration-delayed-feedback': delayedFeedback,
  'exploration-peeking': peeking,
  'exploration-ecmo': ecmo,
}
