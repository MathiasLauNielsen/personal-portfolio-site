import { createClient } from '@supabase/supabase-js'
import { unstable_cache } from 'next/cache'
import type { Locale } from '@/content'
import type { BlogPost } from '@/types'

// Public reads of published posts. No cookies are involved, so the results can be cached and the
// pages stay static-ish: a new post shows within a minute. Admin pages read through the session client.
function publicClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    auth: { persistSession: false },
  })
}

export type BlogListItem = Pick<BlogPost, 'id' | 'titel' | 'slug' | 'ingress' | 'kategori' | 'tags' | 'publiceret_at'>

export const getPublishedPosts = unstable_cache(
  async (locale: Locale): Promise<BlogListItem[]> => {
    const { data } = await publicClient()
      .from('blog_posts')
      .select('id, titel, slug, ingress, kategori, tags, publiceret_at')
      .eq('publiceret', true)
      .eq('sprog', locale)
      .order('publiceret_at', { ascending: false })
    return data ?? []
  },
  ['blog-list'],
  { revalidate: 60 }
)

export const getPublishedPost = unstable_cache(
  async (locale: Locale, slug: string): Promise<BlogPost | null> => {
    const { data } = await publicClient()
      .from('blog_posts')
      .select('*')
      .eq('publiceret', true)
      .eq('sprog', locale)
      .eq('slug', slug)
      .maybeSingle()
    return data
  },
  ['blog-post'],
  { revalidate: 60 }
)

export async function hasPublishedPosts(locale: Locale): Promise<boolean> {
  return (await getPublishedPosts(locale)).length > 0
}

export function formatPostDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === 'da' ? 'da-DK' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
