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
      rounded-xl border-2 p-3 px-4 w-fit border-blue-400 text-stone-100
      lg:text-2xl font-bold transition outline-none bg-blue-400
      hover:bg-stone-100 hover:text-blue-400
      focus:bg-stone-100 focus:text-blue-400
      hover:cursor-pointer dark:hover:bg-stone-900 dark:hover:text-blue-300
      dark:focus:bg-stone-900 dark:focus:text-blue-300 focus:underline
      dark:border-blue-300 dark:bg-blue-300 dark:text-stone-900
    `
    : `
      ${roboto.className}
      rounded-xl border-2 p-3 px-4 w-fit border-blue-400 text-blue-400
      lg:text-2xl font-bold transition outline-none bg-stone-100
      hover:cursor-pointer focus:underline
      hover:bg-blue-400 hover:text-stone-100
      focus:bg-blue-400 focus:text-stone-100
      dark:focus:bg-blue-300 dark:focus:text-stone-900
      dark:text-blue-300 dark:border-blue-300 dark:bg-stone-900
      dark:hover:bg-blue-300 dark:hover:text-stone-900
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
