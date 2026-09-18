import type { Metadata } from 'next'
import { getCopy } from '@/content'
import CasesPage from '@/components/pages/CasesPage'

const t = getCopy('en').cases.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/en/cases', languages: { da: '/cases', en: '/en/cases' } },
}

export default function Page() {
  return <CasesPage locale="en" />
}
