import type { FigureDef } from './types'
import { nightlyFigures } from './nightly'
import { forecastFigures } from './forecast'
import { banditFigures } from './bandits'
import { explorationFigures } from './exploration'

// Markdown refers to a figure as `![one-line summary](figure:key)`. Keys are prefixed with the post they belong to.
export const FIGURE_SCHEME = 'figure:'

export const figures: Record<string, FigureDef> = {
  ...nightlyFigures,
  ...forecastFigures,
  ...banditFigures,
  ...explorationFigures,
}

export type { FigureDef }
