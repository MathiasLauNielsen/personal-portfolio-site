import type { FigureDef } from './types'
import { Bars, Card, Legend, RankList, svgMuted, svgText } from './primitives'

// Figures for "What it costs to find out: exploration under a budget" (first drawn for an earlier, shorter post
// on the same topic, which was merged into it).

const unchosenUnknown: FigureDef = {
  basis: 'illustration',
  title: 'You only get results for the things you chose',
  caption:
    'A system ranks eight items and processes the top three. Those three produce outcomes, which feed the next ranking. The other five produce nothing, so their rank never moves. If one of them is valuable, nothing in the data will ever show it.',
  Draw: () => (
    <RankList
      chosenLabel="Processed"
      notChosenLabel="Never processed"
      rows={[
        { rank: 1, chosen: true, outcome: 'valuable' },
        { rank: 2, chosen: true, outcome: 'nothing' },
        { rank: 3, chosen: true, outcome: 'valuable' },
        { rank: 4, chosen: false },
        { rank: 5, chosen: false },
        { rank: 6, chosen: false, flag: true, note: 'Valuable since last month. No outcome, so the ranking will never find out.' },
        { rank: 7, chosen: false },
        { rank: 8, chosen: false },
      ]}
    />
  ),
}

const learningCost: FigureDef = {
  basis: 'illustration',
  title: 'The unavoidable cost of learning grows slowly, if the learning goes where the uncertainty is',
  caption:
    'Any strategy that finds the best option has to spend some choices on the others. Spread that learning evenly and the waste grows in step with the number of decisions. Spend it on the options you are still unsure about and running ten times longer adds roughly a fixed amount, not ten times more. That floor was proved in 1985, and good strategies come close to it when the same kind of decision repeats often and results come back quickly.',
  Draw: () => {
    const xs = [50, 140, 230, 320]
    const ticks = ['100', '1,000', '10,000', '100,000']
    const log = [115, 90, 65, 40]
    return (
      <div className="max-w-lg">
        <svg viewBox="0 0 360 175" className="h-auto w-full" role="img" aria-label="Wasted choices against number of decisions, for two strategies">
          <line x1="40" y1="140" x2="340" y2="140" className="stroke-paper-line" strokeWidth="1" />
          <line x1="40" y1="20" x2="40" y2="140" className="stroke-paper-line" strokeWidth="1" />
          <path d={`M${xs[0]},${log[0]} L92,10`} className="stroke-muted-dark" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="98" y="18" fontSize="10" className={svgMuted}>
            Spread evenly: off the chart
          </text>
          <path d={xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${log[i]}`).join(' ')} className="stroke-accent" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
          {xs.map((x, i) => (
            <circle key={x} cx={x} cy={log[i]} r="4.5" className="fill-accent stroke-paper-card" strokeWidth="2" />
          ))}
          <text x="328" y="34" fontSize="10" textAnchor="end" className={svgText}>
            Where uncertain: a fixed amount more per tenfold
          </text>
          {xs.map((x, i) => (
            <text key={x} x={x} y="156" fontSize="10" textAnchor="middle" className={svgMuted}>
              {ticks[i]}
            </text>
          ))}
          <text x="190" y="171" fontSize="10" textAnchor="middle" className={svgMuted}>
            Decisions made
          </text>
          <text x="12" y="80" fontSize="10" textAnchor="middle" transform="rotate(-90 12 80)" className={svgMuted}>
            Choices wasted on learning
          </text>
        </svg>
        <Legend
          items={[
            { swatch: 'bg-accent', label: 'Explore where the uncertainty is' },
            { swatch: 'bg-muted-dark', label: 'Spread evenly across all options' },
          ]}
        />
      </div>
    )
  },
}

const whereUncertain: FigureDef = {
  basis: 'illustration',
  title: 'Spend the learning where the uncertainty is',
  caption:
    'Three options with what is known about each: a best guess and how far off it could be. Option A looks best. Option C has a worse guess but a wide range, and the top of that range beats A. Optimism picks C: either it turns out good, or trying it shrinks the uncertainty. Option B is almost certainly bad and is almost never tried.',
  Draw: () => {
    const sx = (v: number) => 80 + (v / 60) * 260
    const rows = [
      { name: 'Option A', est: 30, lo: 26, hi: 34, accent: false, note: 'known, good' },
      { name: 'Option B', est: 10, lo: 7, hi: 13, accent: false, note: 'known, bad' },
      { name: 'Option C', est: 20, lo: 5, hi: 45, accent: true, note: 'unknown: try it' },
    ]
    return (
      <div className="max-w-lg">
        <svg viewBox="0 0 360 140" className="h-auto w-full" role="img" aria-label="Three options with their estimate and range">
          <line x1={sx(34)} y1="12" x2={sx(34)} y2="128" className="stroke-muted-dark" strokeWidth="1" />
          <text x={sx(34) + 4} y="12" fontSize="10" className={svgMuted}>
            Best A could be
          </text>
          {rows.map((r, i) => {
            const y = 40 + i * 38
            return (
              <g key={r.name}>
                <text x="0" y={y + 4} fontSize="11" fontWeight="600" className={svgText}>
                  {r.name}
                </text>
                <line x1={sx(r.lo)} y1={y} x2={sx(r.hi)} y2={y} strokeWidth="8" strokeLinecap="round" className={r.accent ? 'stroke-accent/30' : 'stroke-paper-line'} />
                <circle cx={sx(r.est)} cy={y} r="5" className={r.accent ? 'fill-accent stroke-paper-card' : 'fill-muted-dark stroke-paper-card'} strokeWidth="2" />
                <text x={sx(r.hi) + 8} y={y + 4} fontSize="10" className={svgMuted}>
                  {r.note}
                </text>
              </g>
            )
          })}
        </svg>
        <Legend
          items={[
            { swatch: 'bg-muted-dark rounded-full', label: 'Best guess' },
            { swatch: 'bg-paper-line', label: 'How far off it could be' },
          ]}
        />
      </div>
    )
  },
}

const rankingResult: FigureDef = {
  basis: 'tested',
  title: '72% of the valuable cases from a quarter of the budget, up from 25%',
  caption:
    'Both bars use the same quarter of the processing budget. The old order found 25% of the valuable cases, no better than picking at random; a model that ranks items by expected value found 72%. Tested on two months of past data, not run in production.',
  Draw: () => (
    <Bars
      max={100}
      rows={[
        { label: 'Old order', value: 25, display: '25%' },
        { label: 'Ranking model, same budget', value: 72, display: '72%', highlight: true },
      ]}
    />
  ),
}

const randomSlice: FigureDef = {
  basis: 'illustration',
  title: 'A small random slice this year is what makes a new rule testable next year',
  caption:
    'Left: the old system only ever processed its top three, so a proposed new rule that would pick ranks 2, 5 and 7 can only be checked on one of its three picks. Right: the old system also processed a small random slice regardless of rank, so outcomes exist at every rank. Where the new rule’s picks fall in that slice, they can be scored, reweighted for how rarely each was picked. With a small slice only a few picks coincide each day, so the estimate needs enough history.',
  Draw: () => (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-semibold text-ink">Without a random slice</p>
        <RankList
          chosenLabel="Processed"
          notChosenLabel="Never processed"
          rows={[
            { rank: 1, chosen: true, outcome: 'valuable' },
            { rank: 2, chosen: true, outcome: 'nothing', flag: true },
            { rank: 3, chosen: true, outcome: 'valuable' },
            { rank: 4, chosen: false },
            { rank: 5, chosen: false, flag: true },
            { rank: 6, chosen: false },
            { rank: 7, chosen: false, flag: true },
            { rank: 8, chosen: false },
          ]}
        />
        <Card tone="muted">New rule checkable on 1 of its 3 picks. No answer.</Card>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-ink">With a small random slice</p>
        <RankList
          chosenLabel="Processed"
          notChosenLabel="Never processed"
          rows={[
            { rank: 1, chosen: true, outcome: 'valuable' },
            { rank: 2, chosen: true, outcome: 'nothing', flag: true },
            { rank: 3, chosen: true, outcome: 'valuable' },
            { rank: 4, chosen: false },
            { rank: 5, chosen: true, outcome: 'valuable', flag: true, note: 'Random pick' },
            { rank: 6, chosen: false },
            { rank: 7, chosen: true, outcome: 'nothing', flag: true, note: 'Random pick' },
            { rank: 8, chosen: false },
          ]}
        />
        <Card tone="accent">The new rule’s picks that fell in the random slice have outcomes. Reweighted, they give an honest estimate, with an error bar.</Card>
      </div>
      <div className="sm:col-span-2">
        <Legend items={[{ swatch: 'outline outline-2 outline-dashed outline-accent', label: 'What the proposed new rule would pick' }]} />
      </div>
    </div>
  ),
}

export const banditFigures = {
  'bandits-unchosen-unknown': unchosenUnknown,
  'bandits-learning-cost': learningCost,
  'bandits-where-uncertain': whereUncertain,
  'bandits-ranking-result': rankingResult,
  'bandits-random-slice': randomSlice,
}
