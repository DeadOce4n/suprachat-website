import useTheme from '@hooks/useTheme'
import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  font-size: 1.5rem;
  padding: 5rem;
  text-align: center;
  border-top: 1px solid
    rgba(
      ${(props) =>
        props.theme.variant === 'light' ? '0, 0, 0' : '255, 255, 255'},
      0.1
    );
`

type Props = {
  name: string
  author: string
}

const Footer = ({ name, author }: Props) => {
  const { variant } = useTheme()

  return (
    <StyledFooter>
      <span>
        <strong>&copy; {name}</strong>
      </span>
      <p>
        Esta página fue creada con {variant === 'dark' ? '💛' : '🖤'} por{' '}
        {author}
      </p>
    </StyledFooter>
  )
}

export default Footer
