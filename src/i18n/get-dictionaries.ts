import 'server-only'
import type { Locale } from './config'
import type { locales } from './locales.ts'

const dictionaries: Locale = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: locales) => {
  console.log('Loading dictionary for: ', locale)
  const dict = dictionaries[locale]?.() ?? dictionaries.en()
  return dict
}
