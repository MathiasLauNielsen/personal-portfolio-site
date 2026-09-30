import type { Metadata } from 'next'
import { getCopy } from '@/content'
import OfferingPage from '@/components/pages/OfferingPage'

const t = getCopy('en').ai.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/ai-coding', languages: { en: '/ai-coding', da: '/da/ai-kodning' } },
}

export default function Page() {
  return <OfferingPage locale="en" offer="ai" />
}
