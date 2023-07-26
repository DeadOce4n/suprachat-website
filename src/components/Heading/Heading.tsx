import type { ReactNode, HTMLAttributes } from 'react'
import { cx } from 'classix'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({ children, variant = 'h1', className, ...props }: Props) => {
  const classes = cx(
    'mb-2 font-accent font-bold text-primary',
    variant === 'h1' && 'text-3xl',
    variant === 'h2' && 'text-2xl',
    variant === 'h3' && 'text-xl',
    variant === 'h4' && 'text-lg',
    variant === 'h5' && 'text-md',
    variant === 'h6' && 'text-sm',
    !!className && className
  )

  switch (variant) {
    case 'h1':
      return (
        <h1 className={classes} {...props}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={classes} {...props}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={classes} {...props}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 className={classes} {...props}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 className={classes} {...props}>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 className={classes} {...props}>
          {children}
        </h6>
      )
  }
}

export default Heading
