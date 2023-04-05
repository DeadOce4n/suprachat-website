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
      w-full
      flex-col
      items-center
      justify-center
      px-2
      font-accent
      md:max-h-16
      md:flex-row
      md:items-center
      md:justify-between
      md:p-6
    '
  >
    {children}
  </nav>
)
