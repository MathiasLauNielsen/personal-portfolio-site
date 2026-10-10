import { type Locale, getCopy } from '@/content'
import PageHero from '@/components/PageHero'
import CaseSection from '@/components/CaseSection'
import ContactSection from '@/components/ContactSection'

// Every written case, grouped by offer. The charts are on the case pages themselves.
export default function CasesPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).cases

  return (
    <>
      <PageHero {...t.hero}>
        <p className="max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">{t.note}</p>
      </PageHero>
      <CaseSection locale={locale} offer="data" tinted />
      <CaseSection locale={locale} offer="ai" />
      <ContactSection locale={locale} />
    </>
  )
}
