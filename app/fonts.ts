import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google'

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`
