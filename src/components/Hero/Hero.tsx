import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  image: JSX.Element
  title: string
  content: string
}

const Hero = ({ children, title, content, image }: Props) => {
  return (
    <div className='hero'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        {image}
        <div className='lg:w-1/2'>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6'>{content}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Hero
