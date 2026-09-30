'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { registrerBesoeg } from '@/lib/besoeg'
import type { Locale } from '@/content'

// Logs one page view per navigation. The referrer and UTM parameters belong to the landing page only,
// so they are sent with the first view of a page load and not repeated on client-side navigation.
export default function SiteTracker({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const landed = useRef(false)

  useEffect(() => {
    if (!pathname) return
    const params = new URLSearchParams(window.location.search)
    const first = !landed.current
    landed.current = true
    registrerBesoeg({
      haendelse: 'sidevisning',
      sti: pathname,
      sprog: locale,
      henviser: first ? document.referrer || undefined : undefined,
      utm_kilde: first ? params.get('utm_source') ?? undefined : undefined,
      utm_medium: first ? params.get('utm_medium') ?? undefined : undefined,
      utm_kampagne: first ? params.get('utm_campaign') ?? undefined : undefined,
    })
  }, [pathname, locale])

  return null
}
