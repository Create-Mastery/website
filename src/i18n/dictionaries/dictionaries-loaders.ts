import { type Locale } from '../config'

export const dictionariesLoaders: Locale = {
  en: () => import('./en.json').then((module) => module.default),
  it: () => import('./it.json').then((module) => module.default),
}
