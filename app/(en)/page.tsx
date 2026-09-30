import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import HomePage from '@/components/pages/HomePage'

export const metadata: Metadata = pageMetadata('en', 'home')

export default function Page() {
  return <HomePage locale="en" />
}
