'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { newViewId, registrerBesoeg } from '@/lib/besoeg'
import type { Locale } from '@/content'

// Logs one page view per navigation, then how long the page was visible (sent when it is hidden, left or
// replaced). The referrer, UTM parameters and `via` label belong to the landing page only, so they are sent with
// the first view of a page load. `via` is removed from the address bar afterwards, so a forwarded link does not
// carry the label on.
export default function SiteTracker({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const landed = useRef(false)

  useEffect(() => {
    if (!pathname) return
    const params = new URLSearchParams(window.location.search)
    const first = !landed.current
    landed.current = true
    const id = newViewId()

    registrerBesoeg({
      haendelse: 'sidevisning',
      sti: pathname,
      sprog: locale,
      visning_id: id,
      henviser: first ? document.referrer || undefined : undefined,
      utm_kilde: first ? params.get('utm_source') ?? undefined : undefined,
      utm_medium: first ? params.get('utm_medium') ?? undefined : undefined,
      utm_kampagne: first ? params.get('utm_campaign') ?? undefined : undefined,
      via: first ? params.get('via') ?? undefined : undefined,
    })

    if (first && params.has('via')) {
      params.delete('via')
      const query = params.toString()
      window.history.replaceState(window.history.state, '', `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`)
    }

    let visibleSince: number | null = document.visibilityState === 'visible' ? Date.now() : null
    let visibleMs = 0
    let sent = 0
    const flush = () => {
      if (visibleSince !== null) {
        visibleMs += Date.now() - visibleSince
        visibleSince = null
      }
      const sekunder = Math.round(visibleMs / 1000)
      if (sekunder > sent) {
        sent = sekunder
        registrerBesoeg({ haendelse: 'aktiv_tid', sti: pathname, sprog: locale, visning_id: id, sekunder })
      }
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush()
      else if (visibleSince === null) visibleSince = Date.now()
    }
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', flush)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', flush)
      flush()
    }
  }, [pathname, locale])

  return null
}
