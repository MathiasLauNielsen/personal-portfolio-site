import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import { hasPublishedPosts } from '@/lib/blog'
import BlogListPage from '@/components/pages/BlogListPage'

export const revalidate = 60

// An empty list has nothing to find, so it stays out of search until the first post in this language.
export async function generateMetadata(): Promise<Metadata> {
  const metadata = pageMetadata('da', 'blog')
  return (await hasPublishedPosts('da')) ? metadata : { ...metadata, robots: { index: false, follow: true } }
}

export default function Page() {
  return <BlogListPage locale="da" />
}
