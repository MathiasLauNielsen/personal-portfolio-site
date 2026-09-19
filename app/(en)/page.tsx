import type { Metadata } from 'next'
import { getCopy } from '@/content'
import HomePage from '@/components/pages/HomePage'

const t = getCopy('en').home.meta

export const metadata: Metadata = {
  description: t.description,
  alternates: { canonical: '/', languages: { en: '/', da: '/da' } },
}

export default function Page() {
  return <HomePage locale="en" />
}
