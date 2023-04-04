import React from 'react'

import useTheme from '@hooks/useTheme'

type Props = {
  name: string
  author: string
}

const Footer = ({ name, author }: Props) => {
  const { variant } = useTheme()

  return (
    <footer className='border-t border-gray-800 py-16 text-center'>
      <span>
        <strong>&copy; {name}</strong>
      </span>
      <p>
        Esta página fue creada con {variant === 'dark' ? '💛' : '🖤'} por{' '}
        {author}
      </p>
    </footer>
  )
}

export default Footer
