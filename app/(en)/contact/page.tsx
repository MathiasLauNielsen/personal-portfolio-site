import type { Metadata } from 'next'
import { getCopy } from '@/content'
import ContactPage from '@/components/pages/ContactPage'

const t = getCopy('en').contact.meta

export const metadata: Metadata = {
  title: t.title, description: t.description,
  alternates: { canonical: '/contact', languages: { en: '/contact', da: '/da/kontakt' } },
}

export default function Page() {
  return <ContactPage locale="en" />
}
