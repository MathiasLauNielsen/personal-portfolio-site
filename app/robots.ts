import type { MetadataRoute } from 'next'
import { site } from '@/content'

// /api/og stays crawlable: it serves the link-preview images, and LinkedIn's and X's bots honour robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/kontakt'] }],
    sitemap: `${site.url}/sitemap.xml`,
  }
}
