type Props = {
  link: string
  children: React.ReactNode
}

const ExternalLink = ({ link, children }: Props) => {
  return (
    <a
      href={link}
      className='
        flex h-full flex-row items-center justify-center rounded-xl
        p-1 px-2 pr-3 text-xl font-semibold
        transition outline-none
        hover:cursor-pointer hover:bg-stone-100
        hover:text-blue-400 focus:bg-stone-100
        focus:text-blue-400 dark:hover:bg-stone-900
        dark:hover:text-blue-300 dark:focus:bg-stone-900
        dark:focus:text-blue-300
      '
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  )
}
export default ExternalLink
