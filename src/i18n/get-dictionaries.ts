import 'server-only'
import { dictionariesLoaders } from './dictionaries/dictionaries-loaders'
import type { locales } from './types/locales'

export const getDictionary = async (locale: locales) => {
  console.log('Loading dictionary for: ', locale)
  const dict = dictionariesLoaders[locale]?.() ?? dictionariesLoaders.en()
  return dict
}
