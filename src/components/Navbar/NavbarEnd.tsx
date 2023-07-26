import type { ReactNode } from 'react'
import { cx } from 'classix'

type Props = {
  children: ReactNode
  visible: boolean
}

export const NavbarEnd = ({ children, visible }: Props) => {
  return (
    <div
      className={cx(
        'mt-2 flex h-3 w-full flex-col items-start justify-center gap-4 px-8 md:visible md:flex md:flex-row md:items-center md:justify-end md:p-0',
        !visible && 'invisible hidden',
        visible && 'h-max'
      )}
    >
      {children}
    </div>
  )
}
