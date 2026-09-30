import type { Metadata } from 'next'
import '../globals.css'
import { fontVariables } from '../fonts'

export const metadata: Metadata = { title: 'Admin', robots: { index: false, follow: false } }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={fontVariables}>
      <body className="flex min-h-screen flex-col font-sans">{children}</body>
    </html>
  )
}
