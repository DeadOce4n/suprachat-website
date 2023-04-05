import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NavbarStart = ({ children }: Props) => (
  <div
    className='
      flex
      h-full
      w-full
      flex-row
      items-center
      justify-between
      p-4
      md:p-0
    '
  >
    {children}
  </div>
)
