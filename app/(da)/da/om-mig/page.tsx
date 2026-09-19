import type { Metadata } from 'next'
import { getCopy } from '@/content'
import AboutPage from '@/components/pages/AboutPage'

const t = getCopy('da').about.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/da/om-mig', languages: { en: '/about', da: '/da/om-mig' } },
}

export default function Page() {
  return <AboutPage locale="da" />
}
