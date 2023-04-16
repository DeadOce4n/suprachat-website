import React, { type ReactNode, useRef } from 'react'
import { useClickAway } from 'react-use'

type Props = {
  children: ReactNode
  visible: boolean
  onClose: () => void
}

export const NavbarContainer = ({ children, visible, onClose }: Props) => {
  const ref = useRef(null)
  useClickAway(ref, () => {
    if (visible) {
      onClose()
    }
  })
  return (
    <nav
      ref={ref}
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
}
