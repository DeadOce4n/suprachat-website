import type { ReactNode } from 'react'
import { cx } from 'classix'

type Props = {
  children: ReactNode
  visible: boolean
}

export const NavbarMenu = ({ children, visible }: Props) => {
  return (
    <div
      className={cx(
        'flex h-3 w-full flex-col items-start justify-evenly gap-2 pl-8 md:visible md:flex md:flex-row md:items-center md:justify-start md:pl-0',
        !visible && 'invisible hidden',
        visible && 'h-max'
      )}
    >
      {children}
    </div>
  )
}
