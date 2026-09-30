import type { Metadata } from 'next'
import { getCopy, routes, site, type Locale } from '@/content'

type PageKey = 'home' | 'data' | 'ai' | 'about' | 'contact'

// Title, description, canonical URL, language alternates and link preview text for one page.
// Pages set their own openGraph so a shared /ai-coding link previews as AI coding, not as the home page.
export function pageMetadata(locale: Locale, key: PageKey): Metadata {
  const t = getCopy(locale)[key].meta
  const title = key === 'home' ? t.title : `${t.title} | ${site.person}`
  return {
    ...(key === 'home' ? {} : { title: t.title }),
    description: t.description,
    alternates: {
      canonical: routes[locale][key],
      languages: { en: routes.en[key], da: routes.da[key], 'x-default': routes.en[key] },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'da' ? 'da_DK' : 'en_GB',
      siteName: site.company,
      url: routes[locale][key],
      title,
      description: t.description,
      images: [{ url: `/api/og?locale=${locale}&page=${key}`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description: t.description, images: [`/api/og?locale=${locale}&page=${key}`] },
  }
}
