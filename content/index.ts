import { da } from './da'
import { en } from './en'
import type { Locale } from './site'

export function getCopy(locale: Locale) {
  return locale === 'en' ? en : da
}

export * from './site'
export type { Copy, ProofStatus } from './da'
