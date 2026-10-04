import type { ComponentType } from 'react'
import type { FigureBasis } from '../Figure'

// A blog figure: the takeaway as its title, a caption a non-technical reader can follow,
// where it comes from, and the drawing. Registered by key in ./index.ts.
export interface FigureDef {
  title: string
  caption: string
  basis: FigureBasis
  Draw: ComponentType
}
