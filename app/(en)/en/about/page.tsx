import type { Metadata } from 'next'
import { getCopy } from '@/content'
import AboutPage from '@/components/pages/AboutPage'

const t = getCopy('en').about.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/en/about', languages: { da: '/om-mig', en: '/en/about' } },
}

export default function Page() {
  return <AboutPage locale="en" />
}
