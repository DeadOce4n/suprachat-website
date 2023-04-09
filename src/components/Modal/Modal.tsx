import cx from 'classix'
import React, { type ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
}

export const Modal = ({ children, isOpen, onClose, className }: Props) => (
  <div className={cx('modal', isOpen && 'modal-open')}>
    <div
      className={cx('modal-box relative m-4 h-max', !!className && className)}
    >
      <button
        onClick={onClose}
        className='btn-primary btn-sm btn-circle btn absolute right-2 top-2'
      >
        <FaTimes />
      </button>
      {children}
    </div>
  </div>
)
