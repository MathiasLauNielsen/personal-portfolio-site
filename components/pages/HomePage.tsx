import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'
import ProofChart from '@/components/ProofChart'
import StatusBadge from '@/components/StatusBadge'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export default function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const t = copy.home
  const r = routes[locale]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #F7F5EF 1px, transparent 1px), linear-gradient(to bottom, #F7F5EF 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)',
          }}
        />
        <div className="container-page relative grid gap-14 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pb-32">
          <div>
            <p className="eyebrow animate-rise text-lime">{t.hero.eyebrow}</p>
            <h1 className="display mt-6 animate-rise text-[2.9rem] sm:text-7xl lg:text-[5.2rem]" style={{ animationDelay: '80ms' }}>
              {t.hero.titleA}{' '}
              <em className="text-lime">{t.hero.titleB}</em>
            </h1>
            <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted-dark" style={{ animationDelay: '160ms' }}>
              {t.hero.lead}
            </p>
            <div className="mt-10 flex animate-rise flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
              <Link href={r.contact} className="btn-lime">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} />
              </Link>
              <Link href={r.cases} className="btn-ghost-dark">{t.hero.ctaSecondary}</Link>
            </div>
          </div>
          <div className="animate-rise" style={{ animationDelay: '320ms' }}>
            <ProofChart chart={t.hero.chart} statusLabel={copy.statusLabels.tested} />
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-muted">{t.proof.eyebrow}</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">{t.proof.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.proof.lead}</p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-paper-line bg-paper-line sm:grid-cols-2">
            {t.proof.items.map((item, i) => (
              <Reveal key={item.label} delay={i * 80} className="flex flex-col bg-paper-card p-8 sm:p-10">
                <p className="font-mono text-4xl font-medium tracking-tight sm:text-5xl">{item.value}</p>
                <p className="mt-4 text-lg font-medium leading-snug">{item.label}</p>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{item.detail}</p>
                <div className="mt-6">
                  <StatusBadge status={item.status} label={copy.statusLabels[item.status]} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-y border-paper-line bg-paper-card py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-muted">{t.method.eyebrow}</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">{t.method.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{t.method.lead}</p>
          </Reveal>
          <ol className="flex flex-col">
            {t.method.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 60}>
                <li className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-paper-line py-8 first:border-t-0 first:pt-0">
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted">{t.services.eyebrow}</p>
              <h2 className="display mt-4 text-5xl sm:text-6xl">{t.services.title}</h2>
            </div>
            <Link href={r.services} className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold">
              {t.services.more}
              <ArrowRight size={15} />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {copy.services.items.map((s, i) => (
              <Reveal key={s.key} delay={i * 80}>
                <Link
                  href={`${r.services}#${s.key}`}
                  className="group flex h-full flex-col rounded-3xl border border-paper-line bg-paper-card p-8 transition-colors hover:border-ink"
                >
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                  <h3 className="mt-6 text-2xl font-medium tracking-tight">{s.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{s.tagline}</p>
                  <ArrowUpRight size={20} className="mt-8 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case + testimonial */}
      <section className="bg-ink py-24 text-paper sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-lime">{t.caseTeaser.eyebrow}</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">{t.caseTeaser.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-dark">{t.caseTeaser.body}</p>
            <Link href={r.cases} className="btn-lime mt-9">
              {t.caseTeaser.cta}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <figure className="h-full rounded-3xl border border-ink-line bg-ink-soft p-8 sm:p-10">
              <span className="display block text-7xl leading-none text-lime" aria-hidden>“</span>
              <blockquote lang="en" className="display -mt-4 text-2xl leading-snug sm:text-[1.7rem]">
                {t.testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-ink-line pt-5">
                <p className="font-medium">{t.testimonial.name}</p>
                <p className="mt-1 text-sm text-muted-dark">{t.testimonial.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-muted">{t.about.eyebrow}</p>
            <h2 className="display mt-4 text-5xl sm:text-6xl">{t.about.title}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed">{t.about.body}</p>
            <Link href={r.about} className="link-underline mt-8 inline-flex items-center gap-1.5 text-sm font-semibold">
              {t.about.cta}
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  )
}
