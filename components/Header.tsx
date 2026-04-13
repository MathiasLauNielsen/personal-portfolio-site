'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Database } from 'lucide-react'
import clsx from 'clsx'

const navLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Om mig', href: '/om-mig' },
  { label: 'Ydelser', href: '/services' },
  { label: 'Cases', href: '/cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800 text-white transition-colors group-hover:bg-blue-700">
              <Database size={18} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Mathias Nielsen
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Data Konsulent
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-3 btn-primary text-xs px-4 py-2"
            >
              Kom i kontakt
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-800'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="mt-2 btn-primary justify-center"
            >
              Kom i kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
