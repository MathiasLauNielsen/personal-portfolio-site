import type { MetadataRoute } from 'next'
import { caseKeys, casePath, routes, site } from '@/content'
import { getPublishedPosts } from '@/lib/blog'

// Rebuilt hourly and whenever the admin saves a post (/api/blog-opdateret), so new posts are listed.
export const revalidate = 3600

// No lastModified: it would be the build time, not the real change date, and Google ignores inaccurate dates
// (it also ignores priority and changeFrequency).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const keys = ['home', 'data', 'ai', 'cases', 'about', 'contact'] as const
  const locales = ['en', 'da'] as const
  const pages = keys.map((key) => ({ en: routes.en[key], da: routes.da[key] }))
  const studies = caseKeys.map((key) => ({ en: casePath('en', key), da: casePath('da', key) }))
  const paired = [...pages, ...studies].flatMap((paths) =>
    locales.map((locale) => ({
      url: `${site.url}${paths[locale] === '/' ? '' : paths[locale]}`,
      alternates: {
        languages: { en: `${site.url}${paths.en}`, da: `${site.url}${paths.da}`, 'x-default': `${site.url}${paths.en}` },
      },
    }))
  )
  // Blog posts exist in one language each, so they carry no alternates. A language's list is listed only once it has
  // a post; while empty it is noindex (see the blog list routes).
  const postsByLocale = await Promise.all(locales.map(async (locale) => ({ locale, posts: await getPublishedPosts(locale) })))
  const lists = postsByLocale.filter(({ posts }) => posts.length > 0).map(({ locale }) => ({ url: `${site.url}${routes[locale].blog}` }))
  const posts = postsByLocale.flatMap(({ locale, posts }) => posts.map((p) => ({ url: `${site.url}${routes[locale].blog}/${p.slug}` })))
  return [...paired, ...lists, ...posts]
}
