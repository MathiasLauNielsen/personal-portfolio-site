import type { MetadataRoute } from 'next'
import { routes, site } from '@/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = ['home', 'data', 'ai', 'about', 'contact'] as const
  return keys.flatMap((key) =>
    (['en', 'da'] as const).map((locale) => ({
      url: `${site.url}${routes[locale][key] === '/' ? '' : routes[locale][key]}`,
      changeFrequency: 'monthly' as const,
      priority: key === 'home' ? 1 : 0.8,
      alternates: { languages: { en: `${site.url}${routes.en[key]}`, da: `${site.url}${routes.da[key]}` } },
    }))
  )
}
