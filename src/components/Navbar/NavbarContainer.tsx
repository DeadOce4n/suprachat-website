import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const NavbarContainer = ({ children }: Props) => (
  <nav
    className='
      mt-2
      mb-4
      flex
      h-16
      w-full
      flex-col
      items-center
      justify-center
      font-accent
      md:flex-row
      md:items-center
      md:justify-between
    '
  >
    {children}
  </nav>
)
