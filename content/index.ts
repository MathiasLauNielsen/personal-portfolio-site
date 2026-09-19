import { da } from './da'
import { en } from './en'
import type { Locale } from './site'

export function getCopy(locale: Locale) {
  return locale === 'da' ? da : en
}

export * from './site'
export type { Copy } from './en'
