import type { Metadata } from 'next'
import LinkHero from '@/components/LinkHero'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default async function NotFound() {
  return (
    <html
      lang='en'
      className='dark'
    >
      <body className='h-screen w-screen'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-6 bg-stone-900'>
          <div className='flex flex-col'>
            <span className='text-9xl font-bold text-blue-300'>404</span>
            <span className='text-3xl text-stone-100'>Page not Found</span>
          </div>
          <LinkHero
            link='/'
            external={true}
            fill={true}
          >
            Back to Home
          </LinkHero>
        </div>
      </body>
    </html>
  )
}
