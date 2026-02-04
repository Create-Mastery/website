import type { Dictionary } from './dictionaries/template'
import type { Locales } from './types/locales'

export type Locale = Record<Locales, () => Promise<Dictionary>>
