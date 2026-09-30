'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import { getCopy, routes, site, type Locale } from '@/content'

// Keeps the two fastest ways to reach Mathias on screen on phones, once the visitor has scrolled.
export default function MobileCtaBar({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const t = getCopy(locale).nav
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible || pathname === routes[locale].contact) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-paper-line bg-paper/95 p-3 backdrop-blur md:hidden">
      <a href={site.phoneHref} className="btn-ghost !px-4">
        <Phone size={16} aria-hidden />
        {t.call}
      </a>
      <Link href={routes[locale].contact} className="btn-accent flex-1">
        {t.cta}
      </Link>
    </div>
  )
}
