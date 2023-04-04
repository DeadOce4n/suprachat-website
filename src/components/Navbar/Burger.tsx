import React, { useState } from 'react'
import { FaTimesCircle, FaBars } from 'react-icons/fa'

type Props = {
  onClick: () => void
}

export const Burger = ({ onClick }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <button
      onClick={() => {
        setIsChecked((prev) => !prev)
        onClick()
      }}
      defaultChecked={false}
      className='swap btn-ghost swap-rotate btn-circle btn md:hidden'
    >
      <input type='checkbox' checked={isChecked} readOnly />
      <FaBars size={24} className='swap-off fill-current' />
      <FaTimesCircle size={24} className='swap-on fill-current' />
    </button>
  )
}
