import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import { shallow } from 'zustand/shallow'
import { FaUserAstronaut } from 'react-icons/fa'

import useTheme from '@hooks/useTheme'
import useAuth from '@hooks/useAuth'
import type { Page } from '@utils/types'
import {
  NavbarContainer,
  NavbarStart,
  NavbarLink,
  Burger,
  NavbarEnd,
  NavbarMenu
} from '.'

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
      setVisible(false)
      navigate('/registro')
    },
    login: () => {
      setVisible(false)
      navigate('/app/login')
    },
    logout: () => {
      logout()
      setVisible(false)
      if (pathname !== '/app/login') {
        navigate('/app/login')
      }
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
        <Burger onClick={toggleVisible} visible={visible} />
      </NavbarStart>
      <NavbarMenu visible={visible}>
        {pages.map((page) => (
          <NavbarLink key={page.name} to={page.route} onClick={toggleVisible}>
            {page.name}
          </NavbarLink>
        ))}
      </NavbarMenu>
      <NavbarEnd visible={visible}>
        {userState ? (
          <>
            {pathname !== '/app/perfil/' && (
              <Link to='/app/perfil' onClick={toggleVisible}>
                <span
                  className='
                    btn-primary
                    btn-ghost
                    btn
                    flex
                    items-center
                    justify-between
                    gap-4
                    font-accent
                    font-bold
                    normal-case
                    text-accent
                  '
                >
                  <FaUserAstronaut size={24} />
                  {userState.nick}
                </span>
              </Link>
            )}{' '}
            <button
              className='btn-outline btn-primary btn w-full border-2 font-accent normal-case md:w-max'
              onClick={handleClickButton('logout')}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            {pathname !== '/app/login/' && (
              <button
                className='btn-outline btn-primary btn w-full border-2 font-accent normal-case md:w-max'
                onClick={handleClickButton('login')}
              >
                Iniciar sesión
              </button>
            )}
            <button
              className='btn-primary btn w-full font-accent normal-case md:w-max'
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
