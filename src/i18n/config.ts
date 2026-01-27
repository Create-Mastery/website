import { locales } from './locales'
import { type dictionary } from './template'

export type Locale = Record<locales, () => Promise<dictionary>>
