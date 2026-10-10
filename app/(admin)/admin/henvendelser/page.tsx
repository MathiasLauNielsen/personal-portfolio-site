import { createSupabaseServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import AdminNav from '../components/AdminNav'
import HenvendelserClient from './HenvendelserClient'
import type { KontaktHenvendelse } from '@/types'
import { besoegColumns, groupVisits, type Besoeg, type BesoegRow } from '@/lib/besoeg-admin'

export const revalidate = 0

export default async function AdminHenvendelser() {
  const supabase = createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/admin/login')

  const { data: henvendelser } = await supabase
    .from('kontakt_henvendelser')
    .select('*')
    .order('oprettet_at', { ascending: false })

  const ulæste = henvendelser?.filter((h) => !h.laest).length ?? 0

  // The visit behind each enquiry: same daily visitor key, same day (enquiries from 2026-10-11 on).
  const keys = Array.from(new Set((henvendelser ?? []).map((h) => h.besoegende).filter((k): k is string => !!k)))
  const { data: rows } = keys.length
    ? await supabase.from('site_besoeg').select(besoegColumns).in('besoegende', keys).order('tidspunkt', { ascending: true })
    : { data: [] }
  const visits = groupVisits((rows ?? []) as unknown as BesoegRow[])
  const besoeg: Record<string, Besoeg> = {}
  for (const h of henvendelser ?? []) {
    const visit = h.besoegende && h.oprettet_at ? visits.find((v) => v.besoegende === h.besoegende && v.dag === h.oprettet_at.slice(0, 10)) : undefined
    if (visit && h.id) besoeg[h.id] = visit
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Henvendelser</h1>
            <p className="mt-1 text-sm text-slate-500">
              {ulæste > 0 ? (
                <span className="font-medium text-blue-700">{ulæste} ulæste</span>
              ) : (
                'Ingen ulæste'
              )}{' '}
              · {henvendelser?.length ?? 0} i alt
            </p>
          </div>

          <HenvendelserClient henvendelser={(henvendelser as KontaktHenvendelse[]) ?? []} besoeg={besoeg} />
        </div>
      </div>
    </div>
  )
}
