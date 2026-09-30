import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import OfferingPage from '@/components/pages/OfferingPage'

export const metadata: Metadata = pageMetadata('da', 'ai')

export default function Page() {
  return <OfferingPage locale="da" offer="ai" />
}
