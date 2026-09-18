import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCopy, routes, site, type Locale } from '@/content'

export default function CtaBand({ locale }: { locale: Locale }) {
  const t = getCopy(locale).home.cta
  return (
    <section className="bg-lime text-ink">
      <div className="container-page grid gap-8 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <h2 className="display text-5xl sm:text-6xl">{t.title}</h2>
        <div>
          <p className="text-lg leading-relaxed">{t.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={routes[locale].contact} className="btn-ink">
              {t.primary}
              <ArrowRight size={16} />
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost-light">{t.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
