import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'
import BarCompare from '@/components/BarCompare'
import Reveal from '@/components/Reveal'

// The measured results with their context line and labels. Compact inside the home page band,
// or as its own section with a heading and a before/after chart per result (data platform and cases pages).
export default function ProofFigures({
  locale,
  withHeading = false,
  linkToCases = true,
}: {
  locale: Locale
  withHeading?: boolean
  linkToCases?: boolean
}) {
  const t = getCopy(locale).home.proof
  const more = linkToCases && (
    <Link href={routes[locale].cases} className="link-underline inline-flex items-center gap-2 text-sm font-semibold">
      {t.more}
      <ArrowRight size={14} />
    </Link>
  )

  if (!withHeading) {
    return (
      <div className="container-page py-10">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <p className="text-sm text-muted">
            <span className="eyebrow mr-3 text-accent">{t.eyebrow}</span>
            {t.lead}
          </p>
          {more}
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {t.items.map((item) => (
            <div key={item.value}>
              <p className="display text-4xl text-accent">{item.value}</p>
              <p className="mt-3 text-sm leading-relaxed">{item.label}</p>
              <p className="eyebrow mt-3 !text-[10px] text-muted">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="border-b border-paper-line bg-paper-card py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-muted">{t.eyebrow}</p>
          <h2 className="display mt-4 text-3xl sm:text-4xl">{t.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{t.lead}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={item.value} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-paper p-7">
                <p className="display text-4xl text-accent">{item.value}</p>
                <div className="mt-7">
                  <BarCompare chart={item.chart} />
                </div>
                <p className="mt-7 flex-1 text-sm leading-relaxed">{item.label}</p>
                <p className="eyebrow mt-5 !text-[10px] text-muted">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {more && <Reveal className="mt-10">{more}</Reveal>}
      </div>
    </section>
  )
}
