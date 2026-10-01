import Link from 'next/link'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, UserRound } from 'lucide-react'
import { getCopy, routes, site, type CaseBlock, type CaseKey, type Locale } from '@/content'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

const external = { target: '_blank', rel: 'noopener noreferrer' }

function Heading({ title, lead, dark = false }: { title: string; lead?: string; dark?: boolean }) {
  return (
    <Reveal>
      <h2 className="display text-3xl sm:text-4xl">{title}</h2>
      {lead && <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${dark ? 'text-muted-dark' : 'text-muted'}`}>{lead}</p>}
    </Reveal>
  )
}

// One part of a case. Steps sit on dark and ignore `tinted`.
function Block({ block, tinted }: { block: CaseBlock; tinted: boolean }) {
  const light = `py-20 sm:py-24 ${tinted ? 'border-y border-paper-line bg-paper-card' : ''}`

  switch (block.kind) {
    case 'text':
      return (
        <section className={light}>
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <Heading title={block.title} />
            <div className="flex flex-col gap-5">
              {block.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 40}>
                  <p className={`text-lg leading-relaxed ${i === 0 ? '' : 'text-muted'}`}>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )

    case 'items':
      return (
        <section className={light}>
          <div className="container-page">
            <Heading title={block.title} lead={block.lead} />
            <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {block.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="border-t border-ink pt-5">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )

    case 'split':
      return (
        <section className={light}>
          <div className="container-page">
            <Heading title={block.title} lead={block.lead} />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {block.columns.map((column, i) => (
                <Reveal key={column.title} delay={i * 80}>
                  <div className={`h-full rounded-2xl border p-7 sm:p-8 ${i === 0 ? 'border-accent/30 bg-accent-tint' : 'border-paper-line bg-paper'}`}>
                    <h3 className="eyebrow text-accent">{column.title}</h3>
                    <ul className="mt-5 flex flex-col gap-3.5">
                      {column.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          {i === 0 ? (
                            <Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden />
                          ) : (
                            <UserRound size={18} className="mt-1 shrink-0 text-muted" aria-hidden />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-x-10 gap-y-4 lg:grid-cols-2">
              {block.notes.map((note) => (
                <Reveal key={note}>
                  <p className="border-l-2 border-accent pl-4 leading-relaxed text-muted">{note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )

    case 'steps':
      return (
        <section className="bg-ink py-20 text-white sm:py-24">
          <div className="container-page">
            <Heading title={block.title} lead={block.lead} dark />
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {block.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 60}>
                  <li className="flex h-full flex-col rounded-2xl border border-ink-line bg-ink-soft p-6">
                    <span className="flex items-center gap-3 font-mono text-sm text-accent-light">
                      0{i + 1}
                      {i < block.steps.length - 1 && <ArrowRight size={14} aria-hidden />}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-dark">{step.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )

    case 'timeline':
      return (
        <section className={light}>
          <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <Heading title={block.title} lead={block.lead} />
            <ol className="flex flex-col">
              {block.entries.map((entry, i) => (
                <Reveal key={entry.pr} delay={i * 30}>
                  <li className="border-t border-paper-line">
                    <a
                      href={`${site.repo}/pull/${entry.pr}`}
                      {...external}
                      className="group grid grid-cols-[3.75rem_1fr_auto] items-baseline gap-x-3 py-3.5 leading-relaxed"
                    >
                      <span className="font-mono text-sm text-accent">{entry.time}</span>
                      <span className="group-hover:text-accent">{entry.text}</span>
                      <span className="font-mono text-xs text-muted">#{entry.pr}</span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )

    case 'excerpts':
      return (
        <section className={light}>
          <div className="container-page">
            <Heading title={block.title} lead={block.lead} />
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {block.items.map((item, i) => (
                <Reveal key={item.text} delay={i * 60}>
                  <figure className="flex h-full flex-col rounded-2xl bg-ink p-6 text-white sm:p-7">
                    <a
                      href={`${site.repo}/blob/main/${item.source}`}
                      {...external}
                      className="inline-flex items-center gap-1.5 self-start font-mono text-xs text-accent-light hover:underline"
                    >
                      {item.source}
                      <ArrowUpRight size={12} aria-hidden />
                    </a>
                    <blockquote lang="en" className="mt-4 flex-1 font-mono text-[13px] leading-relaxed text-white/90">
                      {item.text}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-ink-line pt-4 text-sm leading-relaxed text-muted-dark">{item.note}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )
  }
}

export default function CaseStudyPage({ locale, study }: { locale: Locale; study: CaseKey }) {
  const t = getCopy(locale).cases
  const item = t.studies.find((s) => s.key === study)
  if (!item) return null
  const r = routes[locale]
  // Light sections alternate between the page background and white; a dark section restarts the pattern.
  const tints = item.blocks.reduce<boolean[]>((acc, block, i) => [...acc, block.kind === 'steps' || !(acc[i - 1] ?? true)], [])

  return (
    <>
      {/* Hero */}
      <section>
        <div className="container-page pb-14 pt-10 sm:pb-20 sm:pt-14">
          <Link href={r.cases} className="inline-flex animate-rise items-center gap-2 text-sm text-muted hover:text-accent">
            <ArrowLeft size={14} aria-hidden />
            {t.all}
          </Link>
          <p className="eyebrow mt-8 animate-rise text-accent">{item.hero.eyebrow}</p>
          <h1 className="display mt-5 max-w-4xl animate-rise text-4xl sm:text-6xl" style={{ animationDelay: '80ms' }}>
            {item.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: '160ms' }}>
            {item.hero.lead}
          </p>
          <div className="mt-9 flex animate-rise flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <a href="#contact" className="btn-accent !px-6 !py-3.5">
              {item.hero.contactCta}
              <ArrowRight size={16} />
            </a>
            {item.hero.repoCta && (
              <a href={site.repo} {...external} className="btn-ghost !px-6 !py-3.5">
                {item.hero.repoCta}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Key figures */}
        <div className="border-y border-paper-line bg-paper-card">
          <div className="container-page grid gap-8 py-10 lg:grid-cols-3">
            {item.figures.map((figure) => (
              <div key={figure.value}>
                <p className="display text-4xl text-accent">{figure.value}</p>
                <p className="mt-3 text-sm leading-relaxed">{figure.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {item.blocks.map((block, i) => (
        <Block key={block.title} block={block} tinted={tints[i]} />
      ))}

      {/* What it means for the reader, then the form */}
      <section className="border-t border-paper-line py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">{item.closing.title}</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="text-xl leading-relaxed">{item.closing.body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#contact" className="btn-ink">
                {item.hero.contactCta}
                <ArrowRight size={16} />
              </a>
              <Link href={item.offer === 'ai' ? r.ai : r.data} className="link-underline text-sm font-semibold">
                {item.offer === 'ai' ? getCopy(locale).nav.ai : getCopy(locale).nav.data}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection locale={locale} topic={item.topic} />
    </>
  )
}
