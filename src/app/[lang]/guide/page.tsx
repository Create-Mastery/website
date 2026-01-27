import { getDictionary } from '@/i18n/get-dictionaries'
import type { locales } from '@/i18n/types/locales'

export default async function page(props: {
  params: Promise<{
    lang: locales
  }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)

  return <div></div>
}
