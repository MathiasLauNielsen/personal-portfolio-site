// Server only. The daily visitor key shared by the visit log and the enquiry form, so an enquiry can be
// matched to the pages viewed the same day. The same browser on the same address gets the same key
// within a UTC day and a different one the next day. It cannot be reversed: the salt is secret and the input includes the date.
export async function dailyVisitorKey(request: Request): Promise<string> {
  const ip = (request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? '').split(',')[0].trim()
  const ua = request.headers.get('user-agent') ?? ''
  const salt = process.env.BESOEG_SALT ?? process.env.SUPABASE_SECRET_KEY ?? ''
  const day = new Date().toISOString().slice(0, 10)
  const data = new TextEncoder().encode(`${day}|${salt}|${ip}|${ua}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32)
}
