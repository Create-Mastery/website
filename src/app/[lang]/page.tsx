import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionaries'

export default async function page(props: {
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)

  const hero = dictionary.hero // I'm too lazy to write dictionary.hero

  return (
    <section className='flex h-full w-full items-center justify-center'>
      <h1 className='text-2xl font-bold text-blue-400 dark:text-blue-300'>
        {hero.title}
      </h1>
    </section>
  )
}
