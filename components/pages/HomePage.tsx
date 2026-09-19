import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'
import HeroVisual from '@/components/HeroVisual'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

// Order follows the buyer's questions: what is it, can I trust it, how do I buy it, what stops me, how do I start.
export default function HomePage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home
  const r = routes[locale]
  const enquire = (topic: string) => `${r.contact}?topic=${topic}`

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent-tint blur-3xl"
        />
        <div className="container-page relative grid gap-14 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:pb-24">
          <div>
            <p className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-paper-line bg-paper-card px-3.5 py-1.5 text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {t.hero.availability}
            </p>
            <h1 className="display mt-6 animate-rise text-[2.6rem] sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]" style={{ animationDelay: '80ms' }}>
              {t.hero.title} <span className="text-accent lg:block">{t.hero.title2}</span>
            </h1>
            <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: '160ms' }}>
              {t.hero.lead}
            </p>
            <div className="mt-9 flex animate-rise flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <a href="#contact" className="btn-accent !px-6 !py-3.5">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </a>
              <a href="#hire" className="btn-ghost !px-6 !py-3.5">{t.hero.ctaSecondary}</a>
            </div>
          </div>
          <div className="animate-rise" style={{ animationDelay: '320ms' }}>
            <HeroVisual visual={t.hero.visual} />
          </div>
        </div>

        {/* Proof, straight under the fold */}
        <div className="border-y border-paper-line bg-paper-card">
          <div className="container-page grid gap-8 py-10 lg:grid-cols-3">
            {t.proof.items.map((item) => (
              <div key={item.value}>
                <p className="display text-4xl text-accent">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed">{item.label}</p>
                <p className="eyebrow mt-3 !text-[10px] text-muted">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-paper-line">
            <div className="container-page flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-sm">
              <span className="eyebrow text-muted">{t.experience.label}</span>
              {t.experience.items.map((item) => (
                <span key={item} className="font-medium">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The two offers */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-muted">{t.offers.eyebrow}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {t.offers.items.map((offer, i) => (
              <Reveal key={offer.key} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-paper-card p-8 sm:p-10">
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
                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link href={enquire(offer.key)} className="btn-ink">
                      {getCopy(locale).nav.cta}
                      <ArrowRight size={16} />
                    </Link>
                    <Link href={offer.key === 'data' ? r.data : r.ai} className="link-underline text-sm font-semibold">
                      {offer.cta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to buy */}
      <section id="hire" className="scroll-mt-16 bg-ink py-20 text-white sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-accent-light">{t.buy.eyebrow}</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{t.buy.title}</h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr_1fr]">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl bg-accent p-8">
                <h3 className="display text-3xl">{t.buy.hours.name}</h3>
                <p className="mt-4 leading-relaxed text-white/90">{t.buy.hours.body}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm">
                  {t.buy.hours.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <Check size={16} className="mt-0.5 shrink-0" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={enquire(t.buy.hours.topic)} className="btn mt-8 bg-white text-ink hover:bg-ink hover:text-white">
                  {t.buy.hours.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            {t.buy.products.map((product, i) => (
              <Reveal key={product.name} delay={(i + 1) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-ink-line bg-ink-soft p-8">
                  <p className="eyebrow text-accent-light">{t.buy.productsLabel}</p>
                  <h3 className="display mt-4 text-2xl">{product.name}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted-dark">{product.body}</p>
                  <p className="mt-6 font-mono text-xs text-muted-dark">{product.meta}</p>
                  <Link href={enquire(product.topic)} className="btn-ghost-dark mt-5">
                    {product.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why me + testimonial */}
      <section className="py-20 sm:py-24">
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

        <div className="container-page mt-20">
          <Reveal>
            <figure className="rounded-2xl border border-paper-line bg-paper-card p-8 sm:p-12">
              <blockquote lang="en" className="display text-2xl !leading-snug !tracking-[-0.02em] sm:text-3xl">
                “{t.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
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

      {/* FAQ */}
      <section className="border-t border-paper-line bg-paper-card py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl">{t.faq.title}</h2>
          </Reveal>
          <dl className="flex flex-col">
            {t.faq.items.map((item, i) => (
              <Reveal key={item.q} delay={i * 40}>
                <div className="border-t border-paper-line py-5">
                  <dt className="text-lg font-semibold">{item.q}</dt>
                  <dd className="mt-2 leading-relaxed text-muted">{item.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ContactSection locale={locale} />
    </>
  )
}
