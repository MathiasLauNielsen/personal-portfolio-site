import Link from 'next/link'
import { ArrowRight, Linkedin } from 'lucide-react'
import { getCopy, routes, site, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import CaseCard from '@/components/CaseCard'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

// Work first, background second: the page should read as what he can show, not as a CV.
export default function AboutPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const t = copy.about
  const r = routes[locale]

  return (
    <>
      <PageHero {...t.hero} />

      {/* Work he can show */}
      <section className="border-b border-paper-line bg-paper-card py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-muted">{t.work.eyebrow}</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">{t.work.title}</h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-5">
            <Reveal>
              <Link
                href={r.cases}
                className="group flex flex-col gap-6 rounded-2xl border border-paper-line bg-paper p-8 transition-colors hover:border-ink sm:p-10 lg:flex-row lg:items-center lg:justify-between"
              >
                <div>
                  <p className="eyebrow text-accent">{t.work.results.eyebrow}</p>
                  <h3 className="display mt-4 text-3xl sm:text-4xl">{t.work.results.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{t.work.results.body}</p>
                </div>
                <p className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 group-hover:text-accent group-hover:decoration-accent">
                  {t.work.results.cta}
                  <ArrowRight size={14} />
                </p>
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <CaseCard locale={locale} study="agent" tone="paper" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="eyebrow text-muted">{t.storyTitle}</h2>
            </Reveal>
            {t.story.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className={i === 0 ? 'text-xl leading-relaxed sm:text-2xl sm:leading-relaxed' : 'text-lg leading-relaxed text-muted'}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-24 lg:self-start">
            {/* A portrait goes above this card once there is one: <Image src="/images/mathias.jpg" … /> */}
            <div className="rounded-2xl border border-paper-line bg-paper-card p-7">
              <h2 className="eyebrow text-muted">{t.factsTitle}</h2>
              <dl className="mt-3 flex flex-col">
                {t.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-paper-line py-4 last:border-b-0 last:pb-0">
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="mt-1 font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <Linkedin size={16} aria-hidden /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-card py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <figure className="mx-auto max-w-4xl">
              <blockquote lang="en" className="display text-2xl !leading-snug !tracking-[-0.02em] sm:text-3xl">
                “{copy.home.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" aria-hidden />
                <span>
                  <span className="font-semibold">{copy.home.testimonial.name}</span>
                  <span className="text-muted"> · {copy.home.testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <ContactSection locale={locale} />
    </>
  )
}
