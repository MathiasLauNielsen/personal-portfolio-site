import Link from 'next/link'
import { ArrowRight, Linkedin } from 'lucide-react'
import { casePath, getCopy, site, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

// Work first, background second: the page should read as what he can show, not as a CV.
export default function AboutPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const t = copy.about

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
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.cases.studies.map((study, i) => (
              <Reveal key={study.key} delay={i * 80}>
                <li className="h-full">
                  <Link
                    href={casePath(locale, study.key)}
                    className="group flex h-full flex-col rounded-2xl border border-paper-line bg-paper p-7 transition-colors hover:border-ink"
                  >
                    <p className="eyebrow text-accent">{study.hero.eyebrow}</p>
                    <h3 className="mt-4 flex-1 text-xl font-semibold leading-snug">{study.hero.title}</h3>
                    <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 group-hover:text-accent group-hover:decoration-accent">
                      {copy.cases.read}
                      <ArrowRight size={14} />
                    </p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
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

      <ContactSection locale={locale} />
    </>
  )
}
