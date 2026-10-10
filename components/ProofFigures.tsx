import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { casePath, getCopy, routes, type Locale } from '@/content'

// The measured results with their context line, in the home page band. Each figure links to the written case
// that explains it; the before/after charts live on those case pages.
export default function ProofFigures({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home.proof
  const read = getCopy(locale).cases.read

  return (
    <div className="container-page py-10">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <p className="text-sm text-muted">
          <span className="eyebrow mr-3 text-accent">{t.eyebrow}</span>
          {t.lead}
        </p>
        <Link href={routes[locale].cases} className="link-underline inline-flex items-center gap-2 text-sm font-semibold">
          {t.more}
          <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {t.items.map((item) => (
          <Link key={item.value} href={casePath(locale, item.study)} className="group block">
            <p className="display text-4xl text-accent">{item.value}</p>
            <p className="mt-3 text-sm leading-relaxed">{item.label}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="eyebrow !text-[10px] text-muted">{item.note}</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold underline decoration-ink/25 underline-offset-4 group-hover:text-accent group-hover:decoration-accent">
                {read}
                <ArrowRight size={12} aria-hidden />
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
