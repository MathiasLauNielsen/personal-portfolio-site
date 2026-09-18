import type { Metadata } from 'next'
import { getCopy } from '@/content'
import AboutPage from '@/components/pages/AboutPage'

const t = getCopy('da').about.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/om-mig', languages: { da: '/om-mig', en: '/en/about' } },
}

export default function Page() {
  return <AboutPage locale="da" />
}
