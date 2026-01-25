import Link from 'next/link'
import { roboto } from '@/fonts'

type LinkHeroProps = {
  children: React.ReactNode
  link: string
  external: boolean
  fill: boolean
}

export default function LinkHero(props: LinkHeroProps) {
  const classes = props.fill
    ? `
      ${roboto.className}
      rounded-xl border-2 border-blue-300 bg-blue-300 p-3 px-4
      text-2xl font-bold text-stone-900 transition
      hover:cursor-pointer hover:bg-stone-900 hover:text-blue-300
    `
    : `
      ${roboto.className}
      rounded-xl border-2 border-blue-300 bg-stone-900 p-3 px-4
      text-2xl font-bold text-blue-300 transition
      hover:cursor-pointer hover:bg-blue-300 hover:text-stone-900
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
