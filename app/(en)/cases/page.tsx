import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import CasesPage from '@/components/pages/CasesPage'

export const metadata: Metadata = pageMetadata('en', 'cases')

export default function Page() {
  return <CasesPage locale="en" />
}
