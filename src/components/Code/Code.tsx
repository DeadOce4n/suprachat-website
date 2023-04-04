import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Code = ({ children }: Props) => {
  return (
    <span
      className='
        mx-1
        rounded-md
        bg-neutral-300
        px-1.5
        py-0.5
        font-mono
        text-neutral-800
      '
    >
      {children}
    </span>
  )
}

export default Code
