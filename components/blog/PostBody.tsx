import ReactMarkdown, { defaultUrlTransform, type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FIGURE_SCHEME, figures } from './figures'
import Figure from './Figure'

// Renders a post's Markdown on the public page and in the admin preview, so both look the same.
// A line like `![one-line summary](figure:key)` draws the figure registered under that key.
const urlTransform = (url: string) => (url.startsWith(FIGURE_SCHEME) ? url : defaultUrlTransform(url))

function BlogFigure({ id, alt, preview }: { id: string; alt?: string; preview?: boolean }) {
  const def = figures[id]
  if (!def) {
    if (!preview) return alt ? <p>{alt}</p> : null
    return (
      <p className="rounded-lg border border-dashed border-red-400 bg-red-50 p-4 text-sm text-red-800">
        Unknown figure &quot;{id}&quot;. Known keys: {Object.keys(figures).join(', ')}
      </p>
    )
  }
  return (
    <Figure title={def.title} caption={def.caption} basis={def.basis}>
      <def.Draw />
    </Figure>
  )
}

function makeComponents(preview?: boolean): Components {
  return {
    p({ node, children }) {
      const only = node && node.children.length === 1 ? node.children[0] : null
      const isFigure =
        only?.type === 'element' && only.tagName === 'img' && String(only.properties?.src ?? '').startsWith(FIGURE_SCHEME)
      return isFigure ? <>{children}</> : <p>{children}</p>
    },
    img({ src, alt }) {
      if (src?.startsWith(FIGURE_SCHEME)) return <BlogFigure id={src.slice(FIGURE_SCHEME.length)} alt={alt} preview={preview} />
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt ?? ''} />
    },
  }
}

export const postBodyClass =
  'prose max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight ' +
  'prose-h2:mt-14 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-xl prose-p:max-w-3xl prose-p:leading-relaxed prose-li:max-w-3xl ' +
  'prose-a:text-accent prose-a:underline-offset-4 prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:not-italic ' +
  'prose-code:rounded prose-code:bg-paper-card prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:before:content-none prose-code:after:content-none ' +
  'prose-pre:rounded-2xl prose-pre:bg-ink prose-hr:border-paper-line'

export default function PostBody({ markdown, preview }: { markdown: string; preview?: boolean }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform} components={makeComponents(preview)}>
      {markdown}
    </ReactMarkdown>
  )
}
