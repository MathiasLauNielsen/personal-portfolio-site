import { ImageResponse } from 'next/og'
import { OgCard, ogSize } from '@/components/OgCard'
import { getCopy, type Locale } from '@/content'

export const runtime = 'edge'

const pages = ['home', 'data', 'ai', 'about', 'contact'] as const
type Page = (typeof pages)[number]

// Link preview image per page and language: /api/og?locale=da&page=ai
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams
  const locale: Locale = params.get('locale') === 'da' ? 'da' : 'en'
  const page: Page = pages.find((p) => p === params.get('page')) ?? 'home'
  const copy = getCopy(locale)
  const logo = await fetch(new URL('/brand/logo-mark.png', request.url))
    .then((res) => (res.ok ? res.arrayBuffer() : undefined))
    .catch(() => undefined)

  if (page === 'home') {
    const h = copy.home.hero
    return new ImageResponse(<OgCard eyebrow={h.eyebrow.toUpperCase()} line1={h.title} line2={h.title2} logo={logo} />, ogSize)
  }
  const h = copy[page].hero
  return new ImageResponse(<OgCard eyebrow={h.eyebrow.toUpperCase()} line1={h.title} logo={logo} />, ogSize)
}
