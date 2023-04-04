import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  visible: boolean
}

export const NavbarEnd = ({ children }: Props) => (
  <div
    className='
      flex
      h-3
      w-full
      flex-row
      items-center
      justify-center
      gap-2
    '
  >
    {children}
  </div>
)
