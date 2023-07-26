import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  image: ReactNode
  title: string
  content: string
}

const Hero = ({ children, title, content, image }: Props) => {
  return (
    <div className='hero'>
      <div className='hero-content max-w-full flex-col items-center lg:flex-row lg:justify-evenly'>
        <div className='p-4 sm:p-8 lg:w-4/12 lg:p-16'>
          <h1 className='font-accent text-5xl font-bold text-fg-alt md:text-6xl'>
            {title}
          </h1>
          <p className='py-6 text-lg md:text-xl'>{content}</p>
          {children}
        </div>
        <div className='basis-1/2'>{image}</div>
      </div>
    </div>
  )
}

export default Hero
