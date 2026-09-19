import type { Metadata } from 'next'
import { getCopy } from '@/content'
import CasesPage from '@/components/pages/CasesPage'

const t = getCopy('en').cases.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/cases', languages: { en: '/cases', da: '/da/cases' } },
}

export default function Page() {
  return <CasesPage locale="en" />
}
