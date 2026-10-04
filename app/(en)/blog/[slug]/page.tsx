import type { Metadata } from 'next'
import { blogPostMetadata } from '@/lib/page-metadata'
import { getPublishedPost } from '@/lib/blog'
import BlogPostPage from '@/components/pages/BlogPostPage'

export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPublishedPost('en', params.slug)
  return post ? blogPostMetadata('en', post) : {}
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPostPage locale="en" slug={params.slug} />
}
