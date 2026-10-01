import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseKeyOfSlug, caseKeys, caseSlugs } from '@/content'
import { caseMetadata } from '@/lib/page-metadata'
import CaseStudyPage from '@/components/pages/CaseStudyPage'

type Props = { params: { slug: string } }

// Only the written cases exist; any other slug is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return caseKeys.map((key) => ({ slug: caseSlugs[key].da }))
}

export function generateMetadata({ params }: Props): Metadata {
  const key = caseKeyOfSlug('da', params.slug)
  return key ? caseMetadata('da', key) : {}
}

export default function Page({ params }: Props) {
  const key = caseKeyOfSlug('da', params.slug)
  if (!key) notFound()
  return <CaseStudyPage locale="da" study={key} />
}
