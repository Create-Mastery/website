import Dropdown from '@/components/ThemeDropdown/Dropdown'
import { type getDictionary } from '@/i18n/get-dictionaries'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'

const Navbar = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['navbar']
}) => {
  return (
    <nav className='-mr-1.5 flex items-center justify-center sm:mr-4'>
      <ul className='flex flex-row items-center justify-center gap-2'>
        <li>
          <InternalLink link='/guide'>
            <span className='pl-0.5'>{dictionary.guide}</span>
          </InternalLink>
        </li>
        <li>
          <ExternalLink link='https://github.com/SCSDC-co'>SCSDC</ExternalLink>
        </li>
        <li>
          <ExternalLink link='https://www.curseforge.com/minecraft/mc-mods/create'>
            {dictionary.downlad}
          </ExternalLink>
        </li>
        <li>
          <Dropdown dictionary={dictionary.theme} />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
