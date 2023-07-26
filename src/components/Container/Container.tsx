import type { ReactNode } from 'react'
import { cx } from 'classix'

type Props = {
  children: ReactNode
  variant?: 'normal' | 'narrow' | 'thin' | 'medium'
  className?: string
}

const Container = ({ children, variant = 'normal', className }: Props) => (
  <div
    className={cx(
      'mx-auto flex w-11/12 flex-col justify-center',
      variant === 'narrow' && 'sm:w-6/12',
      variant === 'thin' && 'sm:w-4/12',
      variant === 'medium' && 'sm:w-10/12',
      !!className && className
    )}
  >
    {children}
  </div>
)

export default Container
