import { getCopy, type Locale } from '@/content'
import PageHero from '@/components/PageHero'
import ProofFigures from '@/components/ProofFigures'
import CaseCard from '@/components/CaseCard'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

// The work, shown: the data platform results as before and after, then the written cases.
export default function CasesPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).cases

  return (
    <>
      <PageHero {...t.hero} />

      <ProofFigures locale={locale} withHeading linkToCases={false} />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-muted">{t.ai.eyebrow}</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">{t.ai.title}</h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-5">
            {t.studies.filter((study) => study.offer === 'ai').map((study) => (
              <Reveal key={study.key}>
                <CaseCard locale={locale} study={study.key} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection locale={locale} />
    </>
  )
}
