import { cx } from 'classix'
import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

type Props = {
  visible: boolean
  onClick: () => void
}

export const Burger = ({ onClick, visible }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        'swap btn-primary swap-rotate btn-circle btn md:hidden',
        visible && 'swap-active'
      )}
    >
      <FaBars size={24} className='swap-off fill-current' />
      <FaTimes size={24} className='swap-on fill-current' />
    </button>
  )
}
