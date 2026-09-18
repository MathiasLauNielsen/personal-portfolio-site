'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { getCopy, routes, switchLocalePath, type Locale } from '@/content'

export default function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? '/'
  const t = getCopy(locale).nav
  const r = routes[locale]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const other = switchLocalePath(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const links = [
    { href: r.cases, label: t.cases },
    { href: r.services, label: t.services },
    { href: r.about, label: t.about },
    { href: r.contact, label: t.contact },
  ]

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 bg-ink text-paper transition-shadow',
        scrolled && 'shadow-[0_1px_0_0_#232B36]'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href={r.home} className="flex items-center gap-3" aria-label="MLN Data Consulting">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-lime font-mono text-[11px] font-medium tracking-tight text-ink">
            MLN
          </span>
          <span className="hidden text-sm font-medium sm:block">Mathias Lau Nielsen</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                'text-sm transition-colors hover:text-paper',
                pathname === l.href ? 'text-paper' : 'text-muted-dark'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={other.href}
            hrefLang={other.locale}
            className="eyebrow hidden rounded-full border border-ink-line px-3 py-1.5 text-muted-dark transition-colors hover:border-paper/60 hover:text-paper sm:block"
          >
            {t.switchLabel}
          </Link>
          <Link href={r.contact} className="btn-lime hidden !px-5 !py-2.5 md:inline-flex">
            {t.cta}
          </Link>
          <button
            type="button"
            className="-mr-2 p-2 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-line md:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-3 text-lg">
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <Link href={r.contact} className="btn-lime flex-1">
                {t.cta}
              </Link>
              <Link href={other.href} hrefLang={other.locale} className="btn-ghost-dark">
                {t.switchLabel}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
