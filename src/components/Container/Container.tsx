import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  width: min(90%, 100em);
  margin-top: 2rem;
  margin-bottom: 2rem;

  &.split {
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  &.narrow {
    width: min(90%, 50em);
  }

  &.thin {
    width: min(90%, 20em);
  }

  @media only screen and (min-width: 40em) {
    &.split {
      flex-direction: row;
      gap: 1rem;
    }
    &.split > * {
      flex-basis: 100%;
      align-items: center;
      justify-content: center;
    }
  }
`

export default Container
