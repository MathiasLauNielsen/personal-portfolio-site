import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { casePath, getCopy, type CaseKey, type Locale } from '@/content'

// Links to a written case from the cases page, an offer page, the home page or the About page.
// `tone="paper"` is for white sections, where a white card would disappear.
export default function CaseCard({ locale, study, tone = 'card' }: { locale: Locale; study: CaseKey; tone?: 'card' | 'paper' }) {
  const t = getCopy(locale).cases
  const item = t.studies.find((s) => s.key === study)
  if (!item) return null

  return (
    <Link
      href={casePath(locale, study)}
      className={clsx(
        'group grid gap-8 rounded-2xl border border-paper-line p-8 transition-colors hover:border-ink sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:items-center',
        tone === 'paper' ? 'bg-paper' : 'bg-paper-card'
      )}
    >
      <div>
        <p className="eyebrow text-accent">{item.hero.eyebrow}</p>
        <h3 className="display mt-4 text-3xl sm:text-4xl">{item.hero.title}</h3>
        <p className="mt-5 text-lg leading-relaxed text-muted">{item.card.body}</p>
        <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 group-hover:text-accent group-hover:decoration-accent">
          {t.read}
          <ArrowRight size={14} />
        </p>
      </div>
      <ul className="flex flex-col">
        {item.card.points.map((point, i) => (
          <li key={point} className="grid grid-cols-[2.5rem_1fr] border-t border-paper-line py-4 leading-relaxed">
            <span className="pt-0.5 font-mono text-sm text-accent">0{i + 1}</span>
            {point}
          </li>
        ))}
      </ul>
    </Link>
  )
}
