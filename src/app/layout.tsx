import type { Metadata } from 'next'
import '@/styles/globals.css'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'
import CmLogo from '@/components/CreateMasteryLogo'
import ExternalLink from '@/components/Navbar/ExternalLink'
import InternalLink from '@/components/Navbar/InternalLink'
import Dropdown from '@/components/ThemeDropdown/Dropdown'

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
                  <InternalLink link='/guide'>
                    <span className='pl-0.5'>GUIDE</span>
                  </InternalLink>
                </li>
                <li>
                  <ExternalLink link='https://github.com/SCSDC-co'>
                    SCSDC
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink link='https://www.curseforge.com/minecraft/mc-mods/create'>
                    DOWNLOAD
                  </ExternalLink>
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
