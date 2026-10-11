import type { FigureDef } from './types'
import { Arrow, Bars, Blocks, Card, Legend, type BlockState } from './primitives'

// Figures for "Why nightly jobs cost more than they should".

const writtenVsChanged: FigureDef = {
  basis: 'illustration',
  title: 'A nightly job should cost what changed, not what exists',
  caption:
    'A job that rewrites a whole table every night pays for every row, although only a small share changed since yesterday. The result is the same either way, so nothing looks wrong. The gap between the two bars is work done for nothing.',
  Draw: () => (
    <Bars
      max={1_000_000}
      rows={[
        { label: 'Rows written every night', value: 1_000_000, display: '1,000,000' },
        { label: 'Rows that changed since yesterday', value: 10_000, display: '10,000', highlight: true },
      ]}
    />
  ),
}

function strip(changed: number[], read: number[]): BlockState[] {
  return Array.from({ length: 24 }, (_, i) => (changed.includes(i) ? 'changed' : read.includes(i) ? 'read' : 'idle'))
}

const threeKinds: FigureDef = {
  basis: 'illustration',
  title: 'Three kinds of calculation, three prices for keeping a result current',
  caption:
    'Each strip is a table behind a report, and one row has just changed. The squares show what has to be looked up, or kept, to update the report. A sum needs only the changed row. Matching sales against customers needs the changed row and its matches in the other table, so both tables are kept. The biggest deal per region needs more than the current winner kept, because a correction can remove it.',
  Draw: () => (
    <div className="flex max-w-lg flex-col gap-6">
      {[
        { name: 'Cheap: sums, counts, filters', how: 'The changed row is enough', strips: [{ label: 'Sales', states: strip([9], []) }] },
        {
          name: 'Middle: matching two tables',
          how: 'Look up its matches in the other table',
          strips: [
            { label: 'Sales', states: strip([9], []) },
            { label: 'Customers', states: strip([], [2, 15, 20]) },
          ],
        },
        {
          name: 'Expensive: latest, biggest, top ten',
          how: 'Keep more than the winner: the group, or a reserve of runners-up',
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
          { swatch: 'bg-accent-light', label: 'Looked up or kept' },
          { swatch: 'bg-paper-line', label: 'Untouched' },
        ]}
      />
    </div>
  ),
}

const correctionTwoRows: FigureDef = {
  basis: 'illustration',
  title: 'A correction is two more rows, if the system can record a removal',
  caption:
    'A sale booked in March that belonged in April becomes "minus one in March, plus one in April". A system that can record the minus takes the correction through the same cheap path as new sales, for sums and counts. A pipeline that only knows "new row" has to recompute every total the correction touches, or stay wrong about March.',
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
        <Card tone="accent" title="Can record a removal">
          For sums and counts, both rows go through the same cheap update as any new sale.
        </Card>
        <Card tone="muted" title="Only knows new rows">
          Either recompute every total that March feeds into, or keep reporting March wrong.
        </Card>
      </div>
    </div>
  ),
}

const oneTest: FigureDef = {
  basis: 'illustration',
  title: 'The test that matters most: the fast version must match a rebuild from scratch, row for row',
  caption:
    'For a while, both versions run on the same data. Every row where they differ is a bug in the fast version. When the difference has stayed at zero through corrections and re-runs, the slow rebuild can be switched off. If this comparison was never run, nobody knows whether the fast version is right.',
  Draw: () => (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
      <div className="flex flex-col gap-2">
        <Card tone="accent" title="Fast: update from the changes">
          The version you want to keep.
        </Card>
        <Card tone="muted" title="Slow: rebuild everything">
          The version you trust.
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
  'nightly-written-vs-changed': writtenVsChanged,
  'nightly-three-kinds': threeKinds,
  'nightly-correction-two-rows': correctionTwoRows,
  'nightly-one-test': oneTest,
}
