import { roboto } from '@/fonts'
import Link from 'next/link'

type Props = {
  text: string
  link: string
}

const SideBarEntry = ({ text, link }: Props) => {
  return (
    <Link
      href={link}
      className={`${roboto.className} text-2xl font-bold text-blue-400 hover:underline dark:text-blue-300`}
    >
      {text}
    </Link>
  )
}

export default SideBarEntry
