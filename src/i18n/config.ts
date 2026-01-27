import { type dictionary } from './dictionaries/template'
import { locales } from './types/locales'

export type Locale = Record<locales, () => Promise<dictionary>>
