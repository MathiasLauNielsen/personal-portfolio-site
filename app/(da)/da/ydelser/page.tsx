import type { Metadata } from 'next'
import { getCopy } from '@/content'
import ServicesPage from '@/components/pages/ServicesPage'

const t = getCopy('da').services.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/da/ydelser', languages: { en: '/services', da: '/da/ydelser' } },
}

export default function Page() {
  return <ServicesPage locale="da" />
}
