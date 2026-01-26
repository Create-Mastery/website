import Link from 'next/link'
import { roboto } from '@/fonts'

type Props = {
  children: React.ReactNode
  link: string
  external: boolean
  fill: boolean
}

const LinkHero = (props: Props) => {
  const classes = props.fill
    ? `
      ${roboto.className}
      rounded-xl border-2 border-blue-300 bg-blue-300 p-3 px-4
      lg:text-2xl font-bold text-stone-900 transition outline-none
      hover:cursor-pointer hover:bg-stone-900 hover:text-blue-300
      focus:bg-stone-900 focus:text-blue-300 focus:underline
    `
    : `
      ${roboto.className}
      rounded-xl border-2 border-blue-300 bg-stone-900 p-3 px-4
      lg:text-2xl font-bold text-blue-300 transition outline-none
      hover:cursor-pointer hover:bg-blue-300 hover:text-stone-900
      focus:bg-blue-300 focus:text-stone-900 focus:underline
    `

  return props.external ? (
    <a
      href={props.link}
      target='_blank'
      rel='noreferrer noopener'
      className={classes}
    >
      {props.children}
    </a>
  ) : (
    <Link
      href={props.link}
      className={classes}
    >
      {props.children}
    </Link>
  )
}

export default LinkHero
