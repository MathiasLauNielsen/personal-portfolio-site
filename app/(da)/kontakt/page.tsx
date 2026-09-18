import type { Metadata } from 'next'
import { getCopy } from '@/content'
import ContactPage from '@/components/pages/ContactPage'

const t = getCopy('da').contact.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/kontakt', languages: { da: '/kontakt', en: '/en/contact' } },
}

export default function Page() {
  return <ContactPage locale="da" />
}
