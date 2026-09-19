import type { Metadata } from 'next'
import { getCopy } from '@/content'
import ServicesPage from '@/components/pages/ServicesPage'

const t = getCopy('en').services.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/services', languages: { en: '/services', da: '/da/ydelser' } },
}

export default function Page() {
  return <ServicesPage locale="en" />
}
