import type { Metadata } from 'next'
import { getCopy } from '@/content'
import HomePage from '@/components/pages/HomePage'

const t = getCopy('da').home.meta

export const metadata: Metadata = {
  description: t.description,
  alternates: { canonical: '/', languages: { da: '/', en: '/en' } },
}

export default function Page() {
  return <HomePage locale="da" />
}
