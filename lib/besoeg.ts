// Sends one visit event to /api/besoeg from the browser. Fire-and-forget: a failure never affects the page.
export type BesoegPayload = {
  haendelse: 'sidevisning' | 'henvendelse_sendt' | 'aktiv_tid'
  sti: string
  sprog: 'da' | 'en'
  // Random per page view, kept in memory only, so the visible time can be written to the right row.
  visning_id?: string
  sekunder?: number
  eget?: boolean
  henviser?: string
  utm_kilde?: string
  utm_medium?: string
  utm_kampagne?: string
  via?: string
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

// Mathias's own browsers: set when the admin area is opened there, so his visits are marked and hidden by
// default in the statistics. Only ever set on his devices; visitors get nothing stored.
const ownDeviceKey = 'mln-eget-enhed'

export function isOwnDevice(): boolean {
  try {
    return window.localStorage.getItem(ownDeviceKey) === '1'
  } catch {
    return false
  }
}

// '0' records an explicit "not my device", so opening the admin again does not mark it.
export function setOwnDevice(own: boolean) {
  try {
    window.localStorage.setItem(ownDeviceKey, own ? '1' : '0')
  } catch {
    // Storage blocked: the visits are simply not marked.
  }
}

// Called from the admin area: a browser Mathias signs in on is his, unless he has said otherwise there.
export function markOwnDeviceUnlessDeclined() {
  try {
    if (window.localStorage.getItem(ownDeviceKey) === null) window.localStorage.setItem(ownDeviceKey, '1')
  } catch {
    // Storage blocked: nothing to do.
  }
}

export function newViewId(): string {
  if (typeof crypto.randomUUID === 'function') return crypto.randomUUID()
  const b = crypto.getRandomValues(new Uint8Array(16))
  b[6] = (b[6] & 0x0f) | 0x40
  b[8] = (b[8] & 0x3f) | 0x80
  const h = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('')
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`
}

export function registrerBesoeg(payload: BesoegPayload) {
  if (!isCounted()) return
  const body = JSON.stringify(payload.haendelse === 'aktiv_tid' ? payload : { ...payload, eget: isOwnDevice() })
  try {
    if (navigator.sendBeacon?.('/api/besoeg', new Blob([body], { type: 'application/json' }))) return
  } catch {
    // fall through to fetch
  }
  fetch('/api/besoeg', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
}
