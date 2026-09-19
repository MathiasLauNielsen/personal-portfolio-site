'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff, Save, Trash2, Upload } from 'lucide-react'
import type { BlogPost } from '@/types'

const KATEGORIER = [
  'Data Engineering',
  'Data Science',
  'Analytics & BI',
  'AI & Machine Learning',
  'Karriere & Freelance',
]

function generateSlug(titel: string) {
  return titel
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'oe')
    .replace(/å/g, 'aa')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function BlogForm({ post }: { post?: BlogPost }) {
  const isEdit = !!post?.id
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [titel, setTitel] = useState(post?.titel ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [ingress, setIngress] = useState(post?.ingress ?? '')
  const [indhold, setIndhold] = useState(post?.indhold ?? '')
  const [kategori, setKategori] = useState(post?.kategori ?? '')
  const [tags, setTags] = useState(post?.tags?.join(', ') ?? '')
  const [publiceret, setPubliceret] = useState(post?.publiceret ?? false)
  const [tab, setTab] = useState<'skriv' | 'preview'>('skriv')
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleTitelChange = (value: string) => {
    setTitel(value)
    if (!isEdit || !post?.slug) {
      setSlug(generateSlug(value))
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const content = ev.target?.result as string
      setIndhold(content)
      setTab('skriv')
    }
    reader.readAsText(file)
    // Reset so same file can be re-selected
    e.target.value = ''
  }

  const handleSave = async () => {
    if (!titel.trim() || !slug.trim() || !indhold.trim()) {
      setError('Titel, slug og indhold er påkrævet.')
      return
    }

    setSaving(true)
    setError('')

    const data = {
      titel: titel.trim(),
      slug: slug.trim(),
      ingress: ingress.trim() || null,
      indhold: indhold.trim(),
      kategori: kategori || null,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      publiceret,
      publiceret_at: publiceret ? (post?.publiceret_at ?? new Date().toISOString()) : null,
    }

    let err
    if (isEdit) {
      const result = await supabase
        .from('blog_posts')
        .update(data)
        .eq('id', post!.id!)
      err = result.error
    } else {
      const result = await supabase.from('blog_posts').insert(data)
      err = result.error
    }

    setSaving(false)

    if (err) {
      setError(err.message)
      return
    }

    router.push('/admin/blog')
    router.refresh()
  }

  const handleDelete = async () => {
    if (!confirm('Er du sikker på, at du vil slette dette indlæg? Dette kan ikke fortrydes.')) return
    setDeleting(true)
    await supabase.from('blog_posts').delete().eq('id', post!.id!)
    router.push('/admin/blog')
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-6">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Titel */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Titel <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={titel}
              onChange={(e) => handleTitelChange(e.target.value)}
              placeholder="Skriv en fængende overskrift…"
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <div className="mt-2 flex items-center gap-2">
              <span className="text-xs text-slate-400">Slug:</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="flex-1 rounded border border-slate-200 px-2 py-1 text-xs text-slate-600 font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Ingress */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Ingress <span className="text-slate-400 font-normal">(kort beskrivelse)</span>
            </label>
            <textarea
              value={ingress}
              onChange={(e) => setIngress(e.target.value)}
              rows={3}
              placeholder="Skriv et kort resumé der vises i listen…"
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-y"
            />
          </div>

          {/* Indhold */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-slate-700">
                Indhold <span className="text-red-500">*</span>
                <span className="ml-1 text-slate-400 font-normal">(Markdown understøttet)</span>
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                  title="Upload en .md fil"
                >
                  <Upload size={12} />
                  Upload .md
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".md,.markdown,text/markdown,text/plain"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="flex rounded-lg overflow-hidden border border-slate-200 text-xs">
                <button
                  onClick={() => setTab('skriv')}
                  className={`px-3 py-1.5 font-medium transition-colors ${
                    tab === 'skriv'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Skriv
                </button>
                <button
                  onClick={() => setTab('preview')}
                  className={`px-3 py-1.5 font-medium transition-colors ${
                    tab === 'preview'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Preview
                </button>
              </div>
              </div>
            </div>
            {tab === 'skriv' ? (
              <textarea
                value={indhold}
                onChange={(e) => setIndhold(e.target.value)}
                rows={20}
                placeholder="# Overskrift&#10;&#10;Skriv dit blogindlæg her i Markdown…"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-3 text-sm text-slate-900 placeholder-slate-400 font-mono leading-relaxed focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-y"
              />
            ) : (
              <div className="min-h-[400px] rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 prose prose-slate prose-sm max-w-none">
                {indhold ? (
                  <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 leading-relaxed">
                    {indhold}
                  </pre>
                ) : (
                  <p className="text-slate-400 italic">Ingen indhold endnu…</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">
          {/* Publicer */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Publicering</h3>
            <label className="flex items-center gap-3 cursor-pointer mb-5">
              <div
                onClick={() => setPubliceret(!publiceret)}
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  publiceret ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                    publiceret ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="text-sm text-slate-700 flex items-center gap-1.5">
                {publiceret ? (
                  <>
                    <Eye size={14} className="text-emerald-500" />
                    Publiceret
                  </>
                ) : (
                  <>
                    <EyeOff size={14} className="text-slate-400" />
                    Kladde
                  </>
                )}
              </span>
            </label>
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              <Save size={15} />
              {saving ? 'Gemmer…' : isEdit ? 'Gem ændringer' : 'Opret indlæg'}
            </button>
          </div>

          {/* Metadata */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Metadata</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  Kategori
                </label>
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white"
                >
                  <option value="">Vælg kategori…</option>
                  {KATEGORIER.map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  Tags{' '}
                  <span className="text-slate-400 font-normal">(kommasepareret)</span>
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="python, dbt, snowflake"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>

          {/* Delete (edit only) */}
          {isEdit && (
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors disabled:opacity-60"
            >
              <Trash2 size={14} />
              {deleting ? 'Sletter…' : 'Slet indlæg'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
