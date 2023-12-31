import type { ReactNode } from 'react'

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
      md:mr-4
      md:w-max
      md:p-0
    '
  >
    {children}
  </div>
)
