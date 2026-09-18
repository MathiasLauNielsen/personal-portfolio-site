import { Check } from 'lucide-react'
import { getCopy, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export default function ServicesPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).services

  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-20 sm:py-28">
        <div className="container-page flex flex-col gap-6">
          {t.items.map((s, i) => (
            <Reveal key={s.key}>
              <article
                id={s.key}
                className="grid scroll-mt-24 gap-10 rounded-3xl border border-paper-line bg-paper-card p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]"
              >
                <div>
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                  <h2 className="display mt-4 text-4xl sm:text-5xl">{s.name}</h2>
                  <p className="mt-4 text-xl font-medium leading-snug">{s.tagline}</p>
                  <p className="mt-5 leading-relaxed text-muted">{s.body}</p>
                  <p className="mt-6 border-l-2 border-lime pl-4 text-sm leading-relaxed">{s.fit}</p>
                </div>
                <div className="rounded-2xl bg-paper p-7">
                  <p className="eyebrow text-muted">{t.deliverablesLabel}</p>
                  <ul className="mt-5 flex flex-col gap-4">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 leading-relaxed">
                        <Check size={18} className="mt-1 shrink-0 text-lime-deep" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-card py-20 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-4xl">{t.engagement.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{t.engagement.body}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display text-4xl">{t.tech.title}</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {t.tech.items.map((item) => (
                <li key={item} className="rounded-full border border-paper-line px-4 py-2 font-mono text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
