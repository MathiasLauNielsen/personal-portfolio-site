import { createSupabaseServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import AdminNav from '../components/AdminNav'
import HenvendelserClient from './HenvendelserClient'
import type { KontaktHenvendelse } from '@/types'

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

          <HenvendelserClient henvendelser={(henvendelser as KontaktHenvendelse[]) ?? []} />
        </div>
      </div>
    </div>
  )
}
