import React, { type ComponentProps } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: var(--color-fg-accent-${(props) => props.theme.variant});
  background-color: transparent;
  font: 700 1em var(--font-secondary);
  padding: 1.25rem;
  border: 3px solid var(--color-fg-accent-${(props) => props.theme.variant});
  border-radius: 10px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`

const PrimaryButton = styled(StyledButton)`
  color: var(--color-bg-${(props) => props.theme.variant});
  background-color: var(--color-fg-accent-${(props) => props.theme.variant});
`

type Props = ComponentProps<typeof StyledButton> & { primary?: boolean }

const Button = (props: Props) => {
  if (props.primary) {
    return <PrimaryButton {...props} />
  } else {
    return <StyledButton {...props} />
  }
}

export default Button
