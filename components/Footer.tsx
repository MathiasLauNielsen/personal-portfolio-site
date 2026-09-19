import Link from 'next/link'
import { getCopy, routes, site, type Locale } from '@/content'

export default function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const t = copy.footer
  const r = routes[locale]

  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-2xl">{site.person}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-dark">{t.tagline}</p>
        </div>

        <div>
          <p className="eyebrow text-muted-dark">{t.pages}</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li><Link href={r.data} className="hover:text-accent-light">{copy.nav.data}</Link></li>
            <li><Link href={r.ai} className="hover:text-accent-light">{copy.nav.ai}</Link></li>
            <li><Link href={r.about} className="hover:text-accent-light">{copy.nav.about}</Link></li>
            <li><Link href={r.blog} className="hover:text-accent-light">{t.blog}</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-muted-dark">{t.contact}</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li><a href={`mailto:${site.email}`} className="hover:text-accent-light">{site.email}</a></li>
            <li><a href={site.phoneHref} className="hover:text-accent-light">{site.phone}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.company} · CVR {site.cvr} · {site.location[locale]}. {t.rights}
          </p>
          <Link href={r.privacy} className="hover:text-white">{t.privacy}</Link>
        </div>
      </div>
    </footer>
  )
}
