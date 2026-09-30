import type { Metadata } from 'next'
import { getCopy } from '@/content'
import OfferingPage from '@/components/pages/OfferingPage'

const t = getCopy('en').data.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/data-platform', languages: { en: '/data-platform', da: '/da/dataplatform' } },
}

export default function Page() {
  return <OfferingPage locale="en" offer="data" />
}
