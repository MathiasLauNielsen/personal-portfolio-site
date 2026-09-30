import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/page-metadata'
import ContactPage from '@/components/pages/ContactPage'

export const metadata: Metadata = pageMetadata('en', 'contact')

export default function Page() {
  return <ContactPage locale="en" />
}
