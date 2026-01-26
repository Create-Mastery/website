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
    <div className='rounded-xl border-2 border-blue-300 bg-stone-950 p-2'>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className='rounded-md'
      />
      <hr className='mt-2 h-px border-none bg-blue-300' />
      <span className='text-blue-300'>{props.children}</span>
    </div>
  )
}

export default ImageCard
