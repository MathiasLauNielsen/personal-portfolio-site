import type { FigureDef } from './types'
import { Arrow, Bars, Blocks, Card, Legend, type BlockState } from './primitives'

// Figures for "Why the nightly report costs more than it should".

const rewrittenVsChanged: FigureDef = {
  basis: 'measured',
  title: 'The job rewrote 46 million rows a night to change 683,000 of them',
  caption:
    'The grey bar is what was paid for every night; the blue bar is the work that was actually needed, about one row in 67. The report was correct every morning, so nobody looked. The job now touches only the rows that changed.',
  Draw: () => (
    <Bars
      max={46_000_000}
      rows={[
        { label: 'Rows rewritten every night', value: 46_000_000, display: '46 million' },
        { label: 'Rows that had actually changed', value: 683_000, display: '683,000', highlight: true },
      ]}
    />
  ),
}

function strip(changed: number[], read: number[]): BlockState[] {
  return Array.from({ length: 24 }, (_, i) => (changed.includes(i) ? 'changed' : read.includes(i) ? 'read' : 'idle'))
}

const threeKinds: FigureDef = {
  basis: 'illustration',
  title: 'Three kinds of calculation, three prices for keeping a report current',
  caption:
    'Each strip is a table behind a report, and one row has just changed. The squares show how much has to be read again to update the report. A sum needs only the new row. Matching sales against customers needs the new row and its matches in the other table. The biggest deal per region needs every deal in that region, because a correction can remove the current winner.',
  Draw: () => (
    <div className="flex max-w-lg flex-col gap-6">
      {[
        { name: 'Cheap: sums, counts, filters', how: 'Read the changed row only', strips: [{ label: 'Sales', states: strip([9], []) }] },
        {
          name: 'Middle: matching two tables',
          how: 'Read the changed row and its matches in the other table',
          strips: [
            { label: 'Sales', states: strip([9], []) },
            { label: 'Customers', states: strip([], [2, 15, 20]) },
          ],
        },
        {
          name: 'Expensive: latest, biggest, top ten, median',
          how: 'Read every row in the group, in case the winner is withdrawn',
          strips: [{ label: 'Deals in one region', states: strip([9], Array.from({ length: 24 }, (_, i) => i)) }],
        },
      ].map((k) => (
        <div key={k.name}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
            <span className="font-semibold text-ink">{k.name}</span>
            <span className="text-xs text-muted">{k.how}</span>
          </div>
          {k.strips.map((s) => (
            <div key={s.label} className="mt-2 grid grid-cols-[6.5rem_1fr] items-center gap-3">
              <span className="font-mono text-[10px] text-muted">{s.label}</span>
              <Blocks states={s.states} />
            </div>
          ))}
        </div>
      ))}
      <Legend
        items={[
          { swatch: 'bg-accent', label: 'The row that changed' },
          { swatch: 'bg-accent-light', label: 'Has to be read again' },
          { swatch: 'bg-paper-line', label: 'Untouched' },
        ]}
      />
    </div>
  ),
}

const correctionTwoRows: FigureDef = {
  basis: 'illustration',
  title: 'A correction is two more rows, if the system can count backwards',
  caption:
    'A sale booked in March that belonged in April becomes "minus one in March, plus one in April". A system that can hold a negative row takes the correction through the same cheap path as new sales. A system that can only add rows has to recompute everything the correction touches, or stay wrong about March.',
  Draw: () => (
    <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <div className="flex flex-col gap-2">
        <Card title="The correction">A sale was booked in March. It belonged in April.</Card>
        <div className="grid grid-cols-2 gap-2">
          <Card tone="accent">
            <span className="font-mono text-xs text-muted">March</span>
            <p className="mt-1 text-lg font-semibold">−1</p>
          </Card>
          <Card tone="accent">
            <span className="font-mono text-xs text-muted">April</span>
            <p className="mt-1 text-lg font-semibold">+1</p>
          </Card>
        </div>
      </div>
      <div className="hidden sm:block">
        <Arrow />
      </div>
      <div className="sm:hidden">
        <Arrow down />
      </div>
      <div className="flex flex-col gap-2">
        <Card tone="accent" title="Can hold a negative row">
          Both rows go through the same cheap update as any new sale. Seconds.
        </Card>
        <Card tone="muted" title="Can only add rows">
          Either recompute every total that March feeds into, usually most of the report, or keep reporting March wrong.
        </Card>
      </div>
    </div>
  ),
}

const oneTest: FigureDef = {
  basis: 'illustration',
  title: 'The one test that matters: the fast version must match a rebuild from scratch, row for row',
  caption:
    'For a while, both versions run every night on the same data. Every row where they differ is a bug in the fast version. When the difference has been zero for long enough, the slow rebuild is switched off. If this comparison was never run, nobody knows whether the fast report is right.',
  Draw: () => (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
      <div className="flex flex-col gap-2">
        <Card tone="accent" title="Fast: touch only what changed">
          Minutes. The version you want to keep.
        </Card>
        <Card tone="muted" title="Slow: rebuild everything">
          Hours. The version you trust.
        </Card>
      </div>
      <div className="hidden sm:block">
        <Arrow />
      </div>
      <div className="sm:hidden">
        <Arrow down />
      </div>
      <Card title="Compare every row">Same data in, both results out. Count the rows that differ.</Card>
      <div className="hidden sm:block">
        <Arrow />
      </div>
      <div className="sm:hidden">
        <Arrow down />
      </div>
      <div className="flex flex-col gap-2">
        <Card tone="accent">
          <span className="text-2xl font-semibold">0</span> differences: switch the slow one off.
        </Card>
        <Card tone="muted">
          <span className="text-2xl font-semibold">&gt;0</span> differences: every one is a bug to fix.
        </Card>
      </div>
    </div>
  ),
}

export const nightlyFigures = {
  'nightly-rewritten-vs-changed': rewrittenVsChanged,
  'nightly-three-kinds': threeKinds,
  'nightly-correction-two-rows': correctionTwoRows,
  'nightly-one-test': oneTest,
}
