import type { CaseKey } from './site'

// Shapes that en.ts and da.ts both fill in, where the copy is a list of mixed parts.

// Horizontal bars on one scale, each labelled with its value. `highlight` marks the result;
// `upTo` draws a range from `value` to `upTo`.
export type BarChart = {
  caption: string
  max: number
  rows: { label: string; display: string; value: number; upTo?: number; highlight?: boolean }[]
}

// `study` is the written case the result belongs to; the home page figure links there and the case redraws the chart.
export type ProofItem = { value: string; label: string; note: string; chart: BarChart; study: CaseKey }

export type CaseBlock =
  | { kind: 'text'; title: string; paragraphs: string[] }
  // The proof items whose `study` is this case, each with its before/after chart.
  | { kind: 'results'; title: string; lead: string }
  | { kind: 'items'; title: string; lead: string; items: { title: string; body: string }[] }
  | { kind: 'split'; title: string; lead: string; columns: { title: string; items: string[] }[]; notes: string[] }
  | { kind: 'steps'; title: string; lead: string; steps: { title: string; body: string }[] }
  // `pr` is the pull request number in the public repository.
  | { kind: 'timeline'; title: string; lead: string; entries: { time: string; text: string; pr: number }[] }
  // `source` is a file path in the public repository; `text` is quoted from it word for word.
  | { kind: 'excerpts'; title: string; lead: string; items: { source: string; text: string; note: string }[] }

export type CaseStudy = {
  key: CaseKey
  offer: 'data' | 'ai'
  // Enquiry topic preselected in the form at the end of the case.
  topic: string
  // First published, as an ISO date (structured data).
  published: string
  meta: { title: string; description: string }
  hero: { eyebrow: string; title: string; lead: string; repoCta?: string; contactCta: string }
  // Shown wherever the case is linked from: the cases page, the offer page, the home page.
  card: { body: string; points: string[] }
  figures: { value: string; label: string }[]
  blocks: CaseBlock[]
  closing: { title: string; body: string }
}
