import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { shallow } from 'zustand/shallow'
import { FaMoon, FaSun, FaUserAstronaut } from 'react-icons/fa'

import useTheme from '@hooks/useTheme'
import useAuth from '@hooks/useAuth'
import type { Page } from '@utils/types'
import Button from '@components/Button/Button'

const NavbarLink = styled(Link)`
  font: 700 0.875em var(--font-secondary);
  text-decoration: none;
  color: var(--color-fg-accent-${(props) => props.theme.variant});
  padding: 1rem;

  &:nth-child(1) {
    margin-top: 1rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 40em) {
    padding: 1rem;
    &:nth-child(1) {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  width: 100%;

  @media only screen and (min-width: 60em) {
    flex-direction: row;
  }
`

const Start = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 6rem;
  width: 100%;

  @media only screen and (min-width: 60em) {
    width: auto;
    height: 5rem;
  }
`

const Logo = styled.div`
  font: 700 3rem var(--font-logo);
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
  a {
    text-decoration: none;
    color: var(--color-fg-accent-${(props) => props.theme.variant});
  }
`

const BurgerButton = styled.button<{ visible: boolean }>`
  background-color: transparent;
  border: 0 none transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 5rem;
  padding: 1.2rem 1.5rem;
  margin-left: auto;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s, max-height 0.2s;
  cursor: pointer;
  @media only screen and (min-width: 60em) {
    opacity: 0;
    visibility: hidden;
    width: 0;
    padding: 0;
  }
  span {
    width: 2.5rem;
    height: 2px;
    margin: 2px;
    background-color: var(--color-fg-accent-${(props) => props.theme.variant});
  }
  span:first-child {
    ${(props) =>
      props.visible
        ? 'transform: translateY(0.8125rem) rotate(45deg);'
        : undefined}
    transition: all 0.1s ease-out;
  }
  span:nth-child(2) {
    opacity: ${(props) => (props.visible ? 0 : 1)};
  }
  span:last-child {
    ${(props) =>
      props.visible
        ? 'transform: translateY(-0.8125rem) rotate(-45deg);'
        : undefined}
    transition: all 0.1s ease-out;
  }
`

const Menu = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  max-height: ${(props) => (props.visible ? '30rem' : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  width: 100%;
  padding-left: 2rem;
  transition: opacity 0.5s, max-height 0.2s;

  @media only screen and (min-width: 60em) {
    opacity: 1;
    height: 5rem;
    max-height: 30rem;
    visibility: visible;
    flex-direction: row;
    align-items: center;
  }
`

const End = styled.div<{ visible: boolean }>`
  font: 700 1em var(--font-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  max-height: ${(props) => (props.visible ? '30rem' : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  transition: opacity 0.5s, max-height 0.2s;
  white-space: nowrap;
  
  button, a {
    padding: 1rem;
    margin: 0 1rem 1rem;
    width: 100%;
  }
  i {
    color: var(--color-fg-accent-${(props) => props.theme.variant});
    margin-right: 1rem;
  }

  @media only screen and (min-width: 60em) {
    font-size: 0.75em;
    width: unset;
    opacity: 1;
    height: 5rem;
    max-height: 30rem;
    visibility: visible;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button, a {
      padding: 1rem 2rem;
      margin: 0;
    }
`

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-fg-accent-${(props) => props.theme.variant});
  background-color: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 3rem;
  @media only screen and (min-width: 40em) {
    span {
      visibility: hidden;
      width: 0;
    }
    font-size: 2.25rem;
    margin-bottom: 0;
  }
`

type Props = {
  pages: Page[]
}

const Navbar = ({ pages }: Props) => {
  const { variant, toggle } = useTheme(
    (state) => ({
      variant: state.variant,
      toggle: state.toggle
    }),
    shallow
  )
  const { userState, logout } = useAuth()
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  const toggleVisible = () => setVisible((prev) => !prev)

  const actions = {
    register: () => {
      navigate('/registro')
      setVisible((prev) => !prev)
    },
    login: () => {
      navigate('/app/login')
      setVisible((prev) => !prev)
    },
    logout: () => {
      logout()
      if (pathname !== '/app/login') {
        navigate('/app/login')
      }
      setVisible((prev) => !prev)
    },
    toggleTheme: () => toggle()
  }

  const handleClickButton = <TAction extends keyof typeof actions>(
    action: TAction
  ) => actions[action]

  return (
    <Container>
      <Start>
        <Logo>
          <Link to='/'>SUPRACHAT</Link>
        </Logo>
        <BurgerButton visible={visible}>
          <span />
          <span />
          <span />
        </BurgerButton>
      </Start>
      <Menu visible={visible}>
        {pages.map((page) => (
          <NavbarLink key={page.name} to={page.route} onClick={toggleVisible}>
            {page.name}
          </NavbarLink>
        ))}
        <ThemeButton onClick={handleClickButton('toggleTheme')}>
          {variant === 'dark' ? <FaMoon /> : <FaSun />}
        </ThemeButton>
      </Menu>
      <End visible={visible}>
        {userState ? (
          <>
            <Link to='/app/perfil' onClick={toggleVisible}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8
                }}
              >
                <FaUserAstronaut size={24} />
                {userState.nick}
              </span>
            </Link>
            <Button onClick={handleClickButton('logout')}>Cerrar sesión</Button>
          </>
        ) : (
          <>
            {pathname !== '/app/login/' && (
              <Button onClick={handleClickButton('login')}>
                Iniciar sesión
              </Button>
            )}
            <Button primary onClick={handleClickButton('register')}>
              Registrarse
            </Button>
          </>
        )}
      </End>
    </Container>
  )
}

export default Navbar
