import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import HomePage from '@/components/pages/HomePage'

export const metadata: Metadata = pageMetadata('da', 'home')

export default function Page() {
  return <HomePage locale="da" />
}
