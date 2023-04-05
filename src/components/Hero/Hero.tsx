import React, { type ReactNode } from 'react'

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
        <div className='p-4 md:p-16 lg:w-4/12'>
          <h1 className='text-fg-alt font-accent text-5xl font-bold md:text-6xl'>
            {title}
          </h1>
          <p className='py-6 text-lg md:text-xl'>{content}</p>
          {children}
        </div>
        {image}
      </div>
    </div>
  )
}

export default Hero
