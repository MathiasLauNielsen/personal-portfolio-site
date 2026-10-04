import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import BlogListPage from '@/components/pages/BlogListPage'

export const revalidate = 60

export const metadata: Metadata = pageMetadata('da', 'blog')

export default function Page() {
  return <BlogListPage locale="da" />
}
