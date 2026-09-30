import { ImageResponse } from 'next/og'
import { OgCard, ogSize } from '@/components/OgCard'

export const runtime = 'edge'
export const alt = 'Mathias Lau Nielsen: ekspertise i dataplatforme og AI-kodning'
export const size = ogSize
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <OgCard eyebrow="FREELANCE SENIOR DATAINGENIØR" line1="Dataplatforme, der holder." line2="AI-kodning, der leverer." />,
    size
  )
}
