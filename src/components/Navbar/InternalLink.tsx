type Props = {
  link: string
  children: React.ReactNode
}

const InternalLink = ({ link, children }: Props) => {
  return (
    <a
      href={link}
      className='
        flex flex-row items-center justify-center text-xl font-semibold
        h-full rounded-xl p-1 px-2 pr-3
        transition hover:cursor-pointer
        focus:bg-stone-100 focus:text-blue-400
        hover:bg-stone-100 hover:text-blue-400
        dark:hover:bg-stone-900 dark:hover:text-blue-300
        dark:focus:bg-stone-900 dark:focus:text-blue-300
        outline-none
      '
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  )
}
export default InternalLink
