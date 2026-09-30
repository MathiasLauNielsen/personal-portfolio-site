import type { MetadataRoute } from 'next'
import { routes, site } from '@/content'

// No lastModified: it would be the build time, not the real change date, and Google ignores inaccurate dates
// (it also ignores priority and changeFrequency).
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = ['home', 'data', 'ai', 'about', 'contact'] as const
  return keys.flatMap((key) =>
    (['en', 'da'] as const).map((locale) => ({
      url: `${site.url}${routes[locale][key] === '/' ? '' : routes[locale][key]}`,
      alternates: {
        languages: { en: `${site.url}${routes.en[key]}`, da: `${site.url}${routes.da[key]}`, 'x-default': `${site.url}${routes.en[key]}` },
      },
    }))
  )
}
