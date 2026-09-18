import { getCopy, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import StatusBadge from '@/components/StatusBadge'
import CtaBand from '@/components/CtaBand'

export default function CasesPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const t = copy.cases
  const c = t.featured

  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <p className="eyebrow text-lime-deep">{c.client}</p>
              <p className="eyebrow text-muted">{c.industry}</p>
              <p className="eyebrow text-muted">{c.period}</p>
            </div>
            <h2 className="display mt-5 max-w-4xl text-4xl sm:text-6xl">{c.title}</h2>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.35fr_1fr]">
            <div className="flex flex-col gap-12">
              {c.sections.map((s) => (
                <Reveal key={s.heading}>
                  <h3 className="text-2xl font-medium tracking-tight">{s.heading}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{s.body}</p>
                  {s.bullets.length > 0 && (
                    <ul className="mt-6 flex flex-col gap-4">
                      {s.bullets.map((b, i) => (
                        <li key={b} className="grid grid-cols-[2.5rem_1fr] gap-2 border-t border-paper-line pt-4 leading-relaxed">
                          <span className="font-mono text-sm text-muted">0{i + 1}</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}

              <Reveal>
                <div className="rounded-3xl bg-ink p-8 text-paper sm:p-10">
                  <h3 className="display text-3xl">{c.honesty.heading}</h3>
                  <p className="mt-4 leading-relaxed text-muted-dark">{c.honesty.body}</p>
                </div>
              </Reveal>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <div className="rounded-3xl border border-paper-line bg-paper-card p-7 sm:p-8">
                  <p className="eyebrow text-muted">{c.resultsHeading}</p>
                  <ul className="mt-2 flex flex-col">
                    {c.results.map((res) => (
                      <li key={res.value} className="border-b border-paper-line py-6 last:border-b-0 last:pb-0">
                        <p className="font-mono text-3xl font-medium tracking-tight">{res.value}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{res.label}</p>
                        <div className="mt-3">
                          <StatusBadge status={res.status} label={copy.statusLabels[res.status]} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tech.map((item) => (
                    <li key={item} className="rounded-full border border-paper-line px-3.5 py-1.5 font-mono text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-paper-line bg-paper-card py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-muted">{t.testimonialHeading}</p>
            <blockquote lang="en" className="display mt-5 text-2xl leading-snug sm:text-3xl">
              “{t.testimonialFull}”
            </blockquote>
            <p className="mt-6 font-medium">{copy.home.testimonial.name}</p>
            <p className="mt-1 text-sm text-muted">{copy.home.testimonial.role}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-muted">{t.research.eyebrow}</p>
            <h2 className="display mt-5 text-3xl sm:text-4xl">{t.research.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t.research.body}</p>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
