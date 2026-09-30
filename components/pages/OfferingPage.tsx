import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import ProofFigures from '@/components/ProofFigures'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

// One layout for both offers: data platform and AI coding.
export default function OfferingPage({ locale, offer }: { locale: Locale; offer: 'data' | 'ai' }) {
  const copy = getCopy(locale)
  const t = copy[offer]
  const r = routes[locale]
  const otherHref = offer === 'data' ? r.ai : r.data
  const buy = copy.home.buy
  // Engagements tagged with a topic are the products and hours sold on the home page: same name, duration and enquiry link.
  const sold = (topic?: string) =>
    topic === 'hours' ? { meta: undefined, cta: buy.hours.cta } : buy.products.find((p) => p.topic === topic)

  return (
    <>
      <PageHero {...t.hero}>
        <a href="#contact" className="btn-accent !px-6 !py-3.5">
          {getCopy(locale).home.hero.ctaPrimary}
          <ArrowRight size={16} />
        </a>
      </PageHero>

      {/* When companies call */}
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">{t.signsTitle}</h2>
          </Reveal>
          <ul className="flex flex-col">
            {t.signs.map((sign, i) => (
              <Reveal key={sign} delay={i * 40}>
                <li className="grid grid-cols-[2.5rem_1fr] border-t border-paper-line py-4 text-lg leading-relaxed">
                  <span className="pt-1 font-mono text-sm text-accent">0{i + 1}</span>
                  {sign}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What I do */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">{t.whatTitle}</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {t.what.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="border-t border-ink-line pt-5">
                  <h3 className="text-xl font-semibold text-accent-light">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-dark">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {t.note && (
            <Reveal className="mt-12">
              <p className="rounded-2xl border border-ink-line bg-ink-soft p-6 text-lg leading-relaxed sm:p-8">{t.note}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Proof: the data platform results, labelled as on the home page */}
      {offer === 'data' && <ProofFigures locale={locale} withHeading />}

      {/* How we can work */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">{t.engagementsTitle}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {t.engagements.map((item, i) => {
              const product = sold(item.topic)
              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-paper-card p-7">
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-muted">{item.body}</p>
                    {product?.meta && <p className="mt-5 font-mono text-xs text-muted">{product.meta}</p>}
                    {product && (
                      <Link href={`${r.contact}?topic=${item.topic}`} className="link-underline mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                        {product.cta}
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="mt-16 grid gap-8 border-t border-paper-line pt-10 lg:grid-cols-[1fr_1.6fr]">
            <h2 className="eyebrow text-muted">{t.stackTitle}</h2>
            <ul className="flex flex-wrap gap-2">
              {t.stack.map((item) => (
                <li key={item} className="rounded-lg border border-paper-line bg-paper-card px-3.5 py-2 font-mono text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-10">
            <Link href={otherHref} className="link-underline inline-flex items-center gap-2 font-semibold">
              <span className="text-muted">{t.otherOffer.label}:</span> {t.otherOffer.text}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection locale={locale} topic={offer} />
    </>
  )
}
