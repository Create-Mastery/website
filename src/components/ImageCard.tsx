import Image from 'next/image'

type Props = {
  children: React.ReactNode
  src: string
  alt: string
  height: number
  width: number
}

const ImageCard = (props: Props) => {
  return (
    <div className='rounded-xl border-2 border-blue-400 bg-stone-200 p-2 dark:border-blue-300 dark:bg-stone-950'>
      <div className='flex justify-center'>
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          className='rounded-md'
        />
      </div>
      <hr className='mt-2 h-px border-none bg-blue-400 dark:bg-blue-300' />
      <span className='text-blue-400 dark:text-blue-300'>{props.children}</span>
    </div>
  )
}

export default ImageCard
