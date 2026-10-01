import type { MetadataRoute } from 'next'
import { caseKeys, casePath, routes, site } from '@/content'

// No lastModified: it would be the build time, not the real change date, and Google ignores inaccurate dates
// (it also ignores priority and changeFrequency).
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = ['home', 'data', 'ai', 'cases', 'about', 'contact'] as const
  const locales = ['en', 'da'] as const
  const pages = keys.map((key) => ({ en: routes.en[key], da: routes.da[key] }))
  const studies = caseKeys.map((key) => ({ en: casePath('en', key), da: casePath('da', key) }))
  return [...pages, ...studies].flatMap((paths) =>
    locales.map((locale) => ({
      url: `${site.url}${paths[locale] === '/' ? '' : paths[locale]}`,
      alternates: {
        languages: { en: `${site.url}${paths.en}`, da: `${site.url}${paths.da}`, 'x-default': `${site.url}${paths.en}` },
      },
    }))
  )
}
