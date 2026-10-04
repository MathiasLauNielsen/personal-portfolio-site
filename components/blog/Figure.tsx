import type { ReactNode } from 'react'

// Every blog figure sits in this frame. The title is the takeaway in one sentence, so a reader who only
// looks at the figures gets the argument. The basis line says where the drawing comes from.
export type FigureBasis = 'measured' | 'tested' | 'illustration'

const basisLabel: Record<FigureBasis, string> = {
  measured: 'Measured in production',
  tested: 'Tested on past data',
  illustration: 'Illustration, not data',
}

export default function Figure({
  title,
  caption,
  basis,
  children,
}: {
  title: string
  caption: string
  basis: FigureBasis
  children: ReactNode
}) {
  return (
    <figure className="not-prose my-10 rounded-2xl border border-paper-line bg-paper-card p-5 sm:p-8">
      <p className="eyebrow !text-[10px] text-muted">{basisLabel[basis]}</p>
      <p className="display mt-2 text-xl text-ink sm:text-2xl">{title}</p>
      <div className="mt-6">{children}</div>
      <figcaption className="mt-5 text-sm leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  )
}
