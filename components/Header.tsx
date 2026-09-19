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
    { href: r.data, label: t.data },
    { href: r.ai, label: t.ai },
    { href: r.about, label: t.about },
  ]

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 bg-paper/90 backdrop-blur transition-shadow',
        scrolled && 'shadow-[0_1px_0_0_#E6E3DC]'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href={r.home} className="font-display text-lg font-semibold tracking-tight">
          Mathias Lau Nielsen
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                'text-sm transition-colors hover:text-accent',
                pathname === l.href ? 'font-semibold text-ink' : 'text-muted'
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href={other.href} hrefLang={other.locale} className="hidden text-sm text-muted hover:text-accent sm:block">
            {t.switchLabel}
          </Link>
          <Link href={r.contact} className="btn-ink hidden !py-2.5 md:inline-flex">
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
        <nav className="border-t border-paper-line md:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-3 text-lg font-medium">
                {l.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <Link href={r.contact} className="btn-ink flex-1">
                {t.cta}
              </Link>
              <Link href={other.href} hrefLang={other.locale} className="btn-ghost">
                {t.switchLabel}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
