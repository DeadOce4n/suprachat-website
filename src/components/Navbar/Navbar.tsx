import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import { shallow } from 'zustand/shallow'
import { FaUserAstronaut } from 'react-icons/fa'

import useTheme from '@hooks/useTheme'
import useAuth from '@hooks/useAuth'
import type { Page } from '@utils/types'
import { NavbarContainer, NavbarStart, NavbarLink, Burger, NavbarEnd } from '.'

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

type Props = {
  pages: Page[]
}

export const Navbar = ({ pages }: Props) => {
  const { toggle } = useTheme(
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
    <NavbarContainer>
      <NavbarStart>
        <Link className='font-logo text-3xl text-primary' to='/'>
          SUPRACHAT
        </Link>
        <Burger onClick={toggleVisible} />
      </NavbarStart>
      <Menu visible={visible}>
        {pages.map((page) => (
          <NavbarLink key={page.name} to={page.route} onClick={toggleVisible}>
            {page.name}
          </NavbarLink>
        ))}
      </Menu>
      <NavbarEnd visible={visible}>
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
            <button
              className='btn-outline btn-primary btn border-2 font-accent normal-case'
              onClick={handleClickButton('logout')}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            {pathname !== '/app/login/' && (
              <button
                className='btn-outline btn-primary btn border-2 font-accent normal-case'
                onClick={handleClickButton('login')}
              >
                Iniciar sesión
              </button>
            )}
            <button
              className='btn-primary btn font-accent normal-case'
              onClick={handleClickButton('register')}
            >
              Registrarse
            </button>
          </>
        )}
      </NavbarEnd>
    </NavbarContainer>
  )
}
