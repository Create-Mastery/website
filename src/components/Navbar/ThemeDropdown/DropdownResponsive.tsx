import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { DropdownMenu } from 'radix-ui'
import { getDictionary } from '@/i18n/get-dictionaries'
import { locales } from '@/i18n/locales'

const DropdownResponsive = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['navbar']
  lang: locales
}) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='outline-none'>
        <span
          className='
          flex flex-row items-center justify-center rounded-xl p-1 text-xl
          font-semibold transition outline-none hover:cursor-pointer hover:bg-stone-100
          hover:text-blue-400 focus:bg-stone-100 focus:text-blue-400
          dark:hover:bg-stone-900
          dark:hover:text-blue-300 dark:focus:bg-stone-900 dark:focus:text-blue-300
        '
        >
          <Icon
            icon='lucide:menu'
            width='28'
            height='28'
          />
        </span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className='rounded-bl-xl bg-blue-400 p-2 dark:bg-blue-300'
        loop
      >
        <nav>
          <ul>
            <li>
              <DropdownMenu.Item
                className='
                flex flex-row rounded-sm p-1 px-2 text-xl font-semibold
                transition duration-75 outline-none hover:cursor-pointer
                hover:bg-stone-100 hover:text-blue-400 focus:cursor-pointer
                focus:bg-stone-100 focus:text-blue-400
                dark:hover:bg-stone-900 dark:hover:text-blue-300
                dark:focus:bg-stone-900 dark:focus:text-blue-300
              '
              >
                <Link href={`/${lang}/guide`}>{dictionary.guide}</Link>
              </DropdownMenu.Item>
            </li>
            <li className='w-35'>
              <DropdownMenu.Item
                className='
                flex flex-row rounded-sm p-1 px-2 text-xl font-semibold
                text-wrap transition duration-75 outline-none hover:cursor-pointer
                hover:bg-stone-100 hover:text-blue-400 focus:cursor-pointer focus:bg-stone-100
                focus:text-blue-400 dark:hover:bg-stone-900
                dark:hover:text-blue-300 dark:focus:bg-stone-900
                dark:focus:text-blue-300
              '
              >
                <a
                  href='https://www.curseforge.com/minecraft/mc-mods/create'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {dictionary.downlad}
                </a>
              </DropdownMenu.Item>
            </li>
            <li>
              <DropdownMenu.Item
                className='
                flex flex-row rounded-sm p-1 px-2 text-xl font-semibold transition
                duration-75 outline-none hover:cursor-pointer hover:bg-stone-100
                hover:text-blue-400 focus:cursor-pointer focus:bg-stone-100
                focus:text-blue-400 dark:hover:bg-stone-900
                dark:hover:text-blue-300 dark:focus:bg-stone-900
                dark:focus:text-blue-300
              '
              >
                <a
                  href='https://github.com/SCSDC-co'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  SCSDC
                </a>
              </DropdownMenu.Item>
            </li>

            <DropdownMenu.Separator className='my-2 h-0.5 rounded-sm bg-stone-100 dark:bg-stone-900' />

            <li>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger
                  className='
                  flex flex-row rounded-xl p-1 pl-3
                  text-xl font-semibold transition outline-none hover:cursor-pointer
                  hover:bg-stone-100 hover:text-blue-400 focus:bg-stone-100
                  focus:text-blue-400 dark:hover:bg-stone-900
                  dark:hover:text-blue-300 dark:focus:bg-stone-900 dark:focus:text-blue-300
                '
                >
                  <Icon
                    icon='lucide:chevron-left'
                    width='28'
                    height='28'
                  />

                  {dictionary.theme.title}
                </DropdownMenu.SubTrigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent
                    className='flex flex-col gap-1 rounded-xl bg-blue-400 p-2 dark:bg-blue-300'
                    sideOffset={20}
                    loop
                  >
                    <DropdownMenu.Item
                      className='
                      flex flex-row justify-between gap-3 rounded-lg p-1 px-2 font-semibold text-stone-100 transition
                      outline-none hover:cursor-pointer hover:bg-stone-100
                      hover:text-blue-400 focus:cursor-pointer focus:bg-stone-100
                      focus:text-blue-400 dark:text-stone-900
                      dark:hover:bg-stone-900 dark:hover:text-blue-300
                      dark:focus:bg-stone-900 dark:focus:text-blue-300
                    '
                      onClick={() => setTheme('dark')}
                    >
                      {dictionary.theme.dark}
                      <Icon
                        icon='lucide:moon'
                        width='24'
                        height='24'
                      />
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      className='
                      flex flex-row justify-between gap-3 rounded-lg p-1 px-2 font-semibold text-stone-100 transition
                      outline-none hover:cursor-pointer hover:bg-stone-100 hover:text-blue-400
                      focus:cursor-pointer focus:bg-stone-100 focus:text-blue-400
                      dark:text-stone-900 dark:hover:bg-stone-900
                      dark:hover:text-blue-300 dark:focus:bg-stone-900
                      dark:focus:text-blue-300
                    '
                      onClick={() => setTheme('light')}
                    >
                      {dictionary.theme.light}
                      <Icon
                        icon='lucide:sun-medium'
                        width='24'
                        height='24'
                      />
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      className='
                      flex flex-row justify-between gap-3 rounded-lg p-1 px-2 font-semibold text-stone-100 transition
                      outline-none hover:cursor-pointer hover:bg-stone-100
                      hover:text-blue-400 focus:cursor-pointer focus:bg-stone-100
                      focus:text-blue-400 dark:text-stone-900
                      dark:hover:bg-stone-900 dark:hover:text-blue-300
                      dark:focus:bg-stone-900 dark:focus:text-blue-300
                    '
                      onClick={() => setTheme('system')}
                    >
                      {dictionary.theme.system}
                      <Icon
                        icon='lucide:monitor'
                        width='24'
                        height='24'
                      />
                    </DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>
            </li>
          </ul>
        </nav>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default DropdownResponsive
