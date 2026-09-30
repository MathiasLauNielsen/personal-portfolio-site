// Sends one visit event to /api/besoeg from the browser. Fire-and-forget: a failure never affects the page.
export type BesoegPayload = {
  haendelse: 'sidevisning' | 'henvendelse_sendt'
  sti: string
  sprog: 'da' | 'en'
  henviser?: string
  utm_kilde?: string
  utm_medium?: string
  utm_kampagne?: string
  emne?: string
}

const ignoredHosts = ['localhost', '127.0.0.1']

// Only production traffic is counted: previews and local runs would distort the numbers.
export function isCounted(): boolean {
  if (typeof window === 'undefined') return false
  const host = window.location.hostname
  if (ignoredHosts.includes(host) || host.endsWith('.vercel.app')) return false
  if (navigator.webdriver) return false
  return true
}

export function registrerBesoeg(payload: BesoegPayload) {
  if (!isCounted()) return
  const body = JSON.stringify(payload)
  try {
    if (navigator.sendBeacon?.('/api/besoeg', new Blob([body], { type: 'application/json' }))) return
  } catch {
    // fall through to fetch
  }
  fetch('/api/besoeg', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
}
