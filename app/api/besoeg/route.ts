import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { site } from '@/content'
import { dailyVisitorKey } from '@/lib/besoeg-noegle'

// Cookie-free visit logging. The browser sends the path, language, referrer, UTM parameters, a `via` label
// from a link Mathias shared, a random id per page view and whether this is his own device; the server adds
// country, city, device type and a daily visitor key, and stores the row with the secret key (the table has no
// insert policy for the public key). A later `aktiv_tid` event writes how long that page view was visible.
// Nothing here ever fails the page: bad or unwanted requests get 204 and are dropped.

const botPattern = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|linkedinbot|twitterbot|whatsapp|telegram|discord|slack|python-requests|curl\/|wget|go-http-client|java\/|okhttp|axios|node-fetch|vercel-screenshot|monitor|uptime/i

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

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

    const haendelse = ['sidevisning', 'henvendelse_sendt', 'aktiv_tid'].find((h) => h === body.haendelse)
    const sti = text(body.sti, 200)
    if (!haendelse || !sti || !sti.startsWith('/') || sti.startsWith('/admin') || sti.startsWith('/api')) return ok
    const visningId = typeof body.visning_id === 'string' && uuidPattern.test(body.visning_id) ? body.visning_id : null

    const besoegende = await dailyVisitorKey(request)
    const supabase = createClient(url, key, { auth: { persistSession: false } })

    // Visible time for an earlier page view. Only the same visitor can update it, and only upwards.
    if (haendelse === 'aktiv_tid') {
      const sekunder = typeof body.sekunder === 'number' ? Math.min(3600, Math.max(0, Math.round(body.sekunder))) : null
      if (!visningId || sekunder === null) return ok
      const { error } = await supabase
        .from('site_besoeg')
        .update({ sekunder })
        .eq('visning_id', visningId)
        .eq('besoegende', besoegende)
        .or(`sekunder.is.null,sekunder.lt.${sekunder}`)
      if (error) console.error('site_besoeg update error:', error.message)
      return ok
    }

    const { error } = await supabase.from('site_besoeg').insert({
      haendelse,
      sti,
      sprog: body.sprog === 'da' || body.sprog === 'en' ? body.sprog : null,
      besoegende,
      eget: body.eget === true,
      visning_id: haendelse === 'sidevisning' ? visningId : null,
      henviser: externalReferrerHost(text(body.henviser, 2000)),
      utm_kilde: text(body.utm_kilde, 100),
      utm_medium: text(body.utm_medium, 100),
      utm_kampagne: text(body.utm_kampagne, 100),
      via: viaLabel(body.via),
      land: text(request.headers.get('x-vercel-ip-country'), 2)?.toUpperCase() ?? null,
      bynavn: city(request.headers.get('x-vercel-ip-city')),
      enhed: deviceType(ua),
      emne: haendelse === 'henvendelse_sendt' ? text(body.emne, 50) : null,
    })
    if (error) console.error('site_besoeg insert error:', error.message)
  } catch (err) {
    console.error('Unexpected error in /api/besoeg:', err)
  }
  return ok
}

// Labels are short slugs Mathias picks himself (e.g. ?via=7n or ?via=linkedin-okt).
function viaLabel(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const label = value.trim().toLowerCase().replace(/[^a-z0-9æøå_-]/g, '').slice(0, 60)
  return label || null
}

// Vercel sends the city URL-encoded.
function city(value: string | null): string | null {
  if (!value) return null
  try {
    return decodeURIComponent(value).slice(0, 100) || null
  } catch {
    return null
  }
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
