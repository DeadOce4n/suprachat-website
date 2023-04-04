import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NavbarStart = ({ children }: Props) => (
  <div
    className='
      flex
      h-3
      w-full
      flex-row
      items-center
      justify-center
    '
  >
    {children}
  </div>
)
