import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  console.log('Loading dictionary for', locale)
  const dict = dictionaries[locale]?.() ?? dictionaries.en()
  return dict
}
