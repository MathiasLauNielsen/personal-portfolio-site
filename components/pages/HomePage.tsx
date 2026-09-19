import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'
import HeroVisual from '@/components/HeroVisual'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home
  const r = routes[locale]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent-tint blur-3xl"
        />
        <div className="container-page relative grid gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:pb-28">
          <div>
            <p className="eyebrow animate-rise text-accent">{t.hero.eyebrow}</p>
            <h1 className="display mt-6 animate-rise text-[2.6rem] sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]" style={{ animationDelay: '80ms' }}>
              {t.hero.title} <span className="text-accent lg:block">{t.hero.title2}</span>
            </h1>
            <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: '160ms' }}>
              {t.hero.lead}
            </p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <Link href={r.contact} className="btn-accent">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link href={r.about} className="btn-ghost">{t.hero.ctaSecondary}</Link>
            </div>
          </div>
          <div className="animate-rise" style={{ animationDelay: '320ms' }}>
            <HeroVisual visual={t.hero.visual} />
          </div>
        </div>

        {/* Experience strip */}
        <div className="border-y border-paper-line bg-paper-card">
          <div className="container-page flex flex-wrap items-center gap-x-8 gap-y-2 py-5 text-sm">
            <span className="eyebrow text-muted">{t.experience.label}</span>
            {t.experience.items.map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* The two offers */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-muted">{t.offers.eyebrow}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {t.offers.items.map((offer, i) => (
              <Reveal key={offer.key} delay={i * 100}>
                <Link
                  href={offer.key === 'data' ? r.data : r.ai}
                  className="group flex h-full flex-col rounded-2xl border border-paper-line bg-paper-card p-8 transition-all hover:border-accent hover:shadow-[0_24px_60px_-30px_rgba(43,80,255,0.35)] sm:p-10"
                >
                  <span className="font-mono text-sm text-accent">0{i + 1}</span>
                  <h2 className="display mt-5 text-3xl sm:text-4xl">{offer.name}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{offer.body}</p>
                  <ul className="mt-7 flex flex-1 flex-col gap-3">
                    {offer.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    {offer.cta}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-accent-light">{t.proof.eyebrow}</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{t.proof.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-dark">{t.proof.lead}</p>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {t.proof.items.map((item, i) => (
              <Reveal key={item.value} delay={i * 80}>
                <div className="border-t border-ink-line pt-6">
                  <p className="display text-5xl text-accent-light">{item.value}</p>
                  <p className="mt-5 leading-relaxed">{item.label}</p>
                  <p className="eyebrow mt-5 text-muted-dark">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow text-muted">{t.why.eyebrow}</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{t.why.title}</h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {t.why.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="border-t border-ink pt-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-paper-line bg-paper-card py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <figure className="mx-auto max-w-4xl">
              <blockquote lang="en" className="display text-2xl !leading-snug !tracking-[-0.02em] sm:text-4xl">
                “{t.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-accent" aria-hidden />
                <span>
                  <span className="font-semibold">{t.testimonial.name}</span>
                  <span className="text-muted"> · {t.testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
