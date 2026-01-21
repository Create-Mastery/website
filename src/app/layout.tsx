import type { Metadata } from 'next'
import '@/styles/globals.css'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'
import CmLogo from '@/components/CreateMasteryLogo'
import Dropdown from '@/components/ThemeDropdown/Dropdown'
import styles from '@/styles/layout.module.css'

export const metadata: Metadata = {
  title: {
    default: 'Create Mastery',
    template: '%s | Create Mastery',
  },
  description: 'The official Create Mastery website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
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
              href='/'
              className='flex flex-row items-center justify-center gap-2'
            >
              <CmLogo dimension={'70px'} />

              <span className='hidden text-5xl font-bold sm:inline'>
                CREATE MASTERY
              </span>
            </Link>

            <nav className='-mr-1.5 flex items-center justify-center sm:mr-4'>
              <ul className='flex flex-row items-center justify-center gap-2'>
                <li>
                  <Link
                    href='/guide'
                    className={styles.navbar__link}
                  >
                    <span className='pl-0.5'>GUIDE</span>
                  </Link>
                </li>
                <li>
                  <a
                    href='https://github.com/SCSDC-co'
                    className={styles.navbar__link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    SCSDC
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.curseforge.com/minecraft/mc-mods/create'
                    className={styles.navbar__link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    DOWNLOAD
                  </a>
                </li>
                <li>
                  <Dropdown />
                </li>
              </ul>
            </nav>
          </header>

          <main className='flex-1 bg-stone-100 dark:bg-stone-900'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
