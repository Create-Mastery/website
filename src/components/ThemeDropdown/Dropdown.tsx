'use client'

import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { DropdownMenu } from 'radix-ui'
import { useState } from 'react'
import styles from './styles.module.css'

const Dropdown = () => {
  const [rotate, setOpen] = useState(false)
  const { setTheme } = useTheme()

  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={styles.themeDropdown__button}
          aria-label='Theme Dropdown'
          type='button'
        >
          THEME
          <Icon
            icon='lucide:chevron-right'
            width='32'
            height='32'
            className={
              rotate
                ? `${styles.themeDropdown__button__icon__rotate} transition-all`
                : 'transition-all'
            }
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className='rounded-md bg-blue-300 p-2'
        loop
      >
        <DropdownMenu.Item
          className={styles.themeDropdown__item}
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
          className={styles.themeDropdown__item}
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
          className={styles.themeDropdown__item}
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
