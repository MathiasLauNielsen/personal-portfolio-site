import type { Metadata } from 'next'
import { getCopy } from '@/content'
import OfferingPage from '@/components/pages/OfferingPage'

const t = getCopy('da').data.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/da/dataplatform', languages: { en: '/data-platform', da: '/da/dataplatform' } },
}

export default function Page() {
  return <OfferingPage locale="da" offer="data" />
}
