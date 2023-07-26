import type { ReactNode } from 'react'
import { Link } from 'gatsby'
import { cx } from 'classix'

type Props =
  | {
      to: string
      children: ReactNode
      className?: string
      onClick: () => void
    }
  | {
      href: string
      children: ReactNode
      className?: string
      onClick: () => void
    }

export const NavbarLink = (props: Props) => {
  const { children, onClick, className } = props
  if ('to' in props) {
    return (
      <Link
        className={cx(
          'btn-ghost btn mx-1 text-lg font-bold normal-case text-primary',
          !!className && className
        )}
        to={props.to}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }
  return (
    <a
      className={cx(
        'link-hover link px-2 text-lg font-bold text-primary',
        !!className && className
      )}
      href={props.href}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
