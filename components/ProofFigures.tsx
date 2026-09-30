import { getCopy, type Locale } from '@/content'
import Reveal from '@/components/Reveal'

// The measured results with their context line and labels. Compact inside the home page band,
// or as its own section with a heading on the data platform page.
export default function ProofFigures({ locale, withHeading = false }: { locale: Locale; withHeading?: boolean }) {
  const t = getCopy(locale).home.proof

  const figures = (
    <div className="grid gap-8 lg:grid-cols-3">
      {t.items.map((item) => (
        <div key={item.value}>
          <p className="display text-4xl text-accent">{item.value}</p>
          <p className="mt-3 text-sm leading-relaxed">{item.label}</p>
          <p className="eyebrow mt-3 !text-[10px] text-muted">{item.note}</p>
        </div>
      ))}
    </div>
  )

  if (!withHeading) {
    return (
      <div className="container-page py-10">
        <p className="mb-8 text-sm text-muted">
          <span className="eyebrow mr-3 text-accent">{t.eyebrow}</span>
          {t.lead}
        </p>
        {figures}
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
        <Reveal className="mt-12">{figures}</Reveal>
      </div>
    </section>
  )
}
