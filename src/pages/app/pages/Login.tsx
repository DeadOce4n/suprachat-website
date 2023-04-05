import React from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Title, Meta } from 'react-head'

import LoginForm from '@components/Forms/LoginForm'
import useAuth from '@hooks/useAuth'
import type { LoginParams } from '@services/auth.service'
import Container from '@components/Container'
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
      <Container variant='thin' className='w-full'>
        <LoginForm onSubmit={handleLogin} />
      </Container>
    </>
  )
}

export default LoginPage
