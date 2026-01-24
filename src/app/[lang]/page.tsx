import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionaries'
import '@/styles/index.css'

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
      <span className='mx-3 mt-6 flex flex-col items-center justify-center gap-7 text-blue-400 sm:mx-0 dark:text-blue-300'>
        <h1 className='quote text-center text-3xl font-bold italic md:text-4xl lg:text-5xl xl:text-6xl'>
          {hero.title}
        </h1>

        <span className='text-center text-sm font-bold md:text-base lg:text-xl xl:text-2xl'>
          {hero.subtitle}
        </span>
      </span>
    </section>
  )
}
