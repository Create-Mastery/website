'use client'

import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'
import './styles.module.css'

const Dropdown = () => {
  const [rotate, setOpen] = useState(false)
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className='
            flex flex-row items-center justify-center text-xl font-semibold
            rounded-xl p-1 pl-3 transition hover:cursor-pointer hover:bg-stone-100
            hover:text-blue-400 focus:bg-stone-100 focus:text-blue-400
            dark:hover:bg-stone-900 dark:hover:text-blue-300
            dark:focus:bg-stone-900 dark:focus:text-blue-300 outline-none
          '
          aria-label='Theme Dropdown'
          type='button'
        >
          THEME
          <Icon
            icon='lucide:chevron-right'
            width='28'
            height='28'
            id={rotate ? 'themeDropdown__button__icon__rotate' : ''}
            className='transition-all'
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className='rounded-b-md bg-blue-400 p-2 dark:bg-blue-300'
        loop
      >
        <DropdownMenu.Item
          className='
            flex flex-row justify-between gap-3 rounded-sm p-1 px-2 font-semibold transition
            hover:cursor-pointer hover:bg-stone-100 hover:text-blue-400
            focus:cursor-pointer focus:bg-stone-100 focus:text-blue-400
            dark:hover:bg-stone-900 dark:hover:text-blue-300
            dark:focus:bg-stone-900 dark:focus:text-blue-300
            outline-none
          '
          onClick={() => setTheme('dark')}
        >
          DARK
          <Icon
            icon='lucide:moon'
            width='24'
            height='24'
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='
            flex flex-row justify-between gap-3 rounded-sm p-1 px-2 font-semibold transition
            hover:cursor-pointer hover:bg-stone-100 hover:text-blue-400
            focus:cursor-pointer focus:bg-stone-100 focus:text-blue-400
            dark:hover:bg-stone-900 dark:hover:text-blue-300
            dark:focus:bg-stone-900 dark:focus:text-blue-300
            outline-none
          '
          onClick={() => setTheme('light')}
        >
          LIGHT
          <Icon
            icon='lucide:sun-medium'
            width='24'
            height='24'
          />
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='
            flex flex-row justify-between gap-3 rounded-sm p-1 px-2 font-semibold transition
            hover:cursor-pointer hover:bg-stone-100 hover:text-blue-400
            focus:cursor-pointer focus:bg-stone-100 focus:text-blue-400
            dark:hover:bg-stone-900 dark:hover:text-blue-300
            dark:focus:bg-stone-900 dark:focus:text-blue-300
            outline-none
          '
          onClick={() => setTheme('system')}
        >
          SYSTEM
          <Icon
            icon='lucide:monitor'
            width='24'
            height='24'
          />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Dropdown
