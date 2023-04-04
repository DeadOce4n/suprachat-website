import React from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Title, Meta } from 'react-head'

import LoginForm from '@components/Forms/LoginForm'
import useAuth from '@hooks/useAuth'
import type { LoginParams } from '@services/auth.service'
import Container3 from '@components/Container/Container'
import { BASE_TITLE } from '@utils/const'

const LoginPage = (_props: RouteComponentProps) => {
  const { login } = useAuth()

  const handleLogin = async (params: LoginParams) => login(params)

  return (
    <>
      <Title>{`Iniciar sesión | ${BASE_TITLE}`}</Title>
      <Meta
        name='description'
        content={`Pantalla de inicio de sesión | ${BASE_TITLE}`}
      />
      <Container3 variant='thin'>
        <LoginForm onSubmit={handleLogin} />
      </Container3>
    </>
  )
}

export default LoginPage
