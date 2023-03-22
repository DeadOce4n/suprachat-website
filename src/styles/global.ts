import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    color: var(--color-fg-${(props) => props.theme.variant});
    background-color: var(--color-bg-${(props) => props.theme.variant});
  }
  h1, h2, h3 {
    color: var(--color-fg-accent-${(props) => props.theme.variant});
  }
  a {
    color: var(--color-fg-accent-${(props) => props.theme.variant});
  }
`
