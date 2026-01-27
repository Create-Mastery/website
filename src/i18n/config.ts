import { locales } from './locales'

export const i18n = {
  defaultLocale: 'en',
  locales: [
    'en',
    'it',
  ],
}

export type Locale = Record<locales, () => Promise<unknown>>
