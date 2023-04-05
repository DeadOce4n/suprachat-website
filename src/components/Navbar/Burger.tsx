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
      defaultChecked={false}
      className='swap btn-primary swap-rotate btn-circle btn md:hidden'
    >
      <input type='checkbox' checked={visible} readOnly />
      <FaBars size={24} className='swap-off fill-current' />
      <FaTimes size={24} className='swap-on fill-current' />
    </button>
  )
}
