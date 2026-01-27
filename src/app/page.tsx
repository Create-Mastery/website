// This page is for redirecting the user to the page with the correct lang

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { i18n } from '@/i18n/i18n'

export default async function RootRedirect() {
  const acceptLang = (await headers()).get('accept-language') ?? 'en'
  const lang = acceptLang.split(',')[0].split('-')[0]

  const finalLang = i18n.locales.includes(lang) ? lang : 'en'

  redirect(`/${finalLang}`)
}
