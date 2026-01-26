import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionaries'
import '@/styles/index.css'
import ImageCard from '@/components/ImageCard'
import LinkHero from '@/components/LinkHero'
import { roboto, robotoCondensed } from '@/fonts'

export default async function page(props: {
  params: Promise<{
    lang: Locale
  }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)

  const hero = dictionary.hero // I'm too lazy to write dictionary.hero

  return (
    <section className='mb-6 flex h-full w-full flex-col items-center justify-center gap-6'>
      <div className='mx-3 mt-6 flex flex-col items-center justify-center gap-7 text-blue-400 sm:mx-0 dark:text-blue-300'>
        <h1
          className={`${robotoCondensed.className} quote text-center text-3xl font-bold italic md:text-4xl lg:text-5xl xl:text-6xl`}
        >
          {hero.title}
        </h1>

        <span className='text-center text-sm font-bold md:text-base lg:text-xl xl:text-2xl'>
          {hero.subtitle}
        </span>
      </div>

      <div className='mx-2 flex flex-row gap-6 lg:mx-0'>
        <LinkHero
          link={`/${lang}/guide`}
          external={false}
          fill={true}
        >
          {hero.cta.getStarted}
        </LinkHero>
        <LinkHero
          link='https://discord.gg/RVX6RRqkt5'
          external={true}
          fill={false}
        >
          {hero.cta.joinCommunity}
        </LinkHero>
      </div>

      <div className='mx-2 lg:mx-0'>
        <ImageCard
          src='/index/hero.jpg'
          alt='This is Create'
          width={960}
          height={540}
        >
          <a
            href='https://www.youtube.com/watch?v=rR8W-f9YhYA'
            rel='noopener noreferrer'
            className={`${roboto.className} mt-2 flex w-full items-center justify-center outline-none hover:underline focus-visible:underline`}
            target='_blank'
          >
            This is Create
          </a>
        </ImageCard>
      </div>
    </section>
  )
}
