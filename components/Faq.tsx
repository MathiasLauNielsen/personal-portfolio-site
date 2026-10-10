import clsx from 'clsx'
import Reveal from '@/components/Reveal'
import { JsonLd } from '@/components/StructuredData'

// Questions a buyer asks before writing, with FAQPage markup. The home page has the buying questions,
// each offer page the questions about that kind of work.
export default function Faq({ title, items, tinted = false }: { title: string; items: { q: string; a: string }[]; tinted?: boolean }) {
  return (
    <section className={clsx('py-20 sm:py-24', tinted && 'border-t border-paper-line bg-paper-card')}>
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <h2 className="display text-3xl sm:text-4xl">{title}</h2>
        </Reveal>
        <dl className="flex flex-col">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 40}>
              <div className="border-t border-paper-line py-5">
                <dt className="text-lg font-semibold">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{item.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
        }}
      />
    </section>
  )
}
