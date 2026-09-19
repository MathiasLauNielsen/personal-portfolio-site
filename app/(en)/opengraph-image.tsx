import { ImageResponse } from 'next/og'
import { OgCard, ogSize } from '@/components/OgCard'

export const runtime = 'edge'
export const alt = 'Mathias Lau Nielsen: data platform and AI coding expertise'
export const size = ogSize
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <OgCard eyebrow="FREELANCE SENIOR DATA ENGINEER" line1="Data platforms that hold up." line2="AI coding that actually ships." />,
    size
  )
}
