import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { site } from '@/content'

// Cookie-free visit logging. The browser sends the path, language, referrer and UTM parameters;
// the server adds country, device type and a daily visitor key, and stores the row with the secret key
// (the table has no insert policy for the public key). Nothing here ever fails the page: bad or
// unwanted requests get 204 and are dropped.

const botPattern = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|linkedinbot|twitterbot|whatsapp|telegram|discord|slack|python-requests|curl\/|wget|go-http-client|java\/|okhttp|axios|node-fetch|vercel-screenshot|monitor|uptime/i

const text = (value: unknown, max: number) => (typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null)

export async function POST(request: Request) {
  const ok = new NextResponse(null, { status: 204 })
  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SECRET_KEY
    if (!url || !key) return ok

    const ua = request.headers.get('user-agent') ?? ''
    if (!ua || botPattern.test(ua)) return ok

    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null
    if (!body) return ok

    const haendelse = body.haendelse === 'henvendelse_sendt' ? 'henvendelse_sendt' : body.haendelse === 'sidevisning' ? 'sidevisning' : null
    const sti = text(body.sti, 200)
    if (!haendelse || !sti || !sti.startsWith('/') || sti.startsWith('/admin') || sti.startsWith('/api')) return ok
    const sprog = body.sprog === 'da' || body.sprog === 'en' ? body.sprog : null

    const ip = (request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? '').split(',')[0].trim()
    const besoegende = await dailyVisitorKey(ip, ua)

    const supabase = createClient(url, key, { auth: { persistSession: false } })
    const { error } = await supabase.from('site_besoeg').insert({
      haendelse,
      sti,
      sprog,
      besoegende,
      henviser: externalReferrerHost(text(body.henviser, 2000)),
      utm_kilde: text(body.utm_kilde, 100),
      utm_medium: text(body.utm_medium, 100),
      utm_kampagne: text(body.utm_kampagne, 100),
      land: text(request.headers.get('x-vercel-ip-country'), 2)?.toUpperCase() ?? null,
      enhed: deviceType(ua),
      emne: haendelse === 'henvendelse_sendt' ? text(body.emne, 50) : null,
    })
    if (error) console.error('site_besoeg insert error:', error.message)
  } catch (err) {
    console.error('Unexpected error in /api/besoeg:', err)
  }
  return ok
}

// The same visitor gets the same key within a UTC day and a different one the next day.
// The key cannot be reversed to an address: the salt is secret and the input includes the date.
async function dailyVisitorKey(ip: string, ua: string): Promise<string> {
  const salt = process.env.BESOEG_SALT ?? process.env.SUPABASE_SECRET_KEY ?? ''
  const day = new Date().toISOString().slice(0, 10)
  const data = new TextEncoder().encode(`${day}|${salt}|${ip}|${ua}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32)
}

function externalReferrerHost(referrer: string | null): string | null {
  if (!referrer) return null
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '').toLowerCase()
    const own = new URL(site.url).hostname.replace(/^www\./, '').toLowerCase()
    if (!host || host === own || host.endsWith('.vercel.app') || host === 'localhost') return null
    return host.slice(0, 200)
  } catch {
    return null
  }
}

function deviceType(ua: string): 'mobil' | 'tablet' | 'desktop' {
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return 'tablet'
  if (/mobi|iphone|android/i.test(ua)) return 'mobil'
  return 'desktop'
}
