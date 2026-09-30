import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import AboutPage from '@/components/pages/AboutPage'

export const metadata: Metadata = pageMetadata('da', 'about')

export default function Page() {
  return <AboutPage locale="da" />
}
