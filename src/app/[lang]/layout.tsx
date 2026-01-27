import type { Metadata } from 'next'
import '@/styles/globals.css'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'
import CmLogo from '@/components/CreateMasteryLogo'
import Navbar from '@/components/Navbar/Navbar'
import { roboto } from '@/fonts'
import { getDictionary } from '@/i18n/get-dictionaries'
import { i18n } from '@/i18n/i18n'
import { locales } from '@/i18n/types/locales'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
  }))
}

export const metadata: Metadata = {
  title: {
    default: 'Create Mastery',
    template: '%s | Create Mastery',
  },
  description: 'The official Create Mastery website',
}

export default async function Root(props: {
  children: React.ReactNode
  params: Promise<{
    lang: locales
  }>
}) {
  const params = await props.params
  const { children } = props
  const dictionary = await getDictionary(params.lang)

  return (
    <html
      lang={params.lang}
      suppressHydrationWarning
    >
      <body className='flex min-h-screen flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <header className='flex flex-row justify-between bg-blue-400 p-2 text-stone-100 select-none dark:bg-blue-300 dark:text-stone-900'>
            <Link
              href={`/${params.lang}`}
              className='flex flex-row items-center justify-center gap-2 outline-none focus:underline'
            >
              <CmLogo dimension={'70px'} />

              <span
                className={`${roboto.className} hidden text-3xl font-extrabold sm:inline xl:text-5xl`}
              >
                CREATE MASTERY
              </span>
            </Link>

            <Navbar
              lang={params.lang}
              dictionary={dictionary.navbar}
            />
          </header>

          <main className='flex-1 bg-stone-100 dark:bg-stone-900'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
