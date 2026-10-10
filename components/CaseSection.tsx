import clsx from 'clsx'
import { getCopy, type Locale } from '@/content'
import CaseCard from '@/components/CaseCard'
import Reveal from '@/components/Reveal'

// The written cases for one offer under its heading. Used on the cases page and as the proof on each offer page.
export default function CaseSection({ locale, offer, tinted = false }: { locale: Locale; offer: 'data' | 'ai'; tinted?: boolean }) {
  const t = getCopy(locale).cases

  return (
    <section className={clsx('py-20 sm:py-24', tinted && 'border-y border-paper-line bg-paper-card')}>
      <div className="container-page">
        <Reveal>
          <p className="eyebrow text-muted">{t[offer].eyebrow}</p>
          <h2 className="display mt-4 text-3xl sm:text-4xl">{t[offer].title}</h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-5">
          {t.studies
            .filter((study) => study.offer === offer)
            .map((study) => (
              <Reveal key={study.key}>
                <CaseCard locale={locale} study={study.key} tone={tinted ? 'paper' : 'card'} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}
