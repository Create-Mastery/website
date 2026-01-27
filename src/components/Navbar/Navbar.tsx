'use client'

import { roboto } from '@/fonts'
import { type getDictionary } from '@/i18n/get-dictionaries'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import Dropdown from './ThemeDropdown/Dropdown'
import DropdownResponsive from './ThemeDropdown/DropdownResponsive'
import { locales } from '@/i18n/locales'

const Navbar = ({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['navbar']
  lang: locales
}) => {
  return (
    <>
      <nav
        className={`${roboto.className} mr-4 hidden items-center justify-center sm:-mr-1.5 sm:flex`}
      >
        <ul className='flex flex-col items-end justify-center gap-2 xl:flex-row xl:items-center'>
          <div className='flex flex-row gap-2'>
            <li>
              <InternalLink link={`/${lang}/guide`}>
                <span className='pl-0.5'>{dictionary.guide}</span>
              </InternalLink>
            </li>
            <li>
              <ExternalLink link='https://www.curseforge.com/minecraft/mc-mods/create'>
                <span className='pr-px pl-1'>{dictionary.downlad}</span>
              </ExternalLink>
            </li>
          </div>
          <div className='flex flex-row gap-2'>
            <li>
              <ExternalLink link='https://github.com/SCSDC-co'>
                <span className='pr-px pl-1'>SCSDC</span>
              </ExternalLink>
            </li>
            <li>
              <Dropdown dictionary={dictionary.theme} />
            </li>
          </div>
        </ul>
      </nav>

      <div className='mr-5 flex items-center justify-center sm:hidden '>
        <DropdownResponsive
          dictionary={dictionary}
          lang={lang}
        />
      </div>
    </>
  )
}

export default Navbar
