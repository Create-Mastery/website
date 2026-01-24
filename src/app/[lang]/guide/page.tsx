import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionaries'

export default async function page(props: {
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)

  return <div></div>
}
