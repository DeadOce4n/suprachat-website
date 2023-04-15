import React from 'react'
import type { RouteComponentProps } from '@reach/router'
import { omit } from 'remeda'
import type { HeadFC } from 'gatsby'

import SignupForm from '@components/Forms/SignupForm'
import useAuth from '@hooks/useAuth'
import Container from '@components/Container'
import { BASE_TITLE } from '@utils/const'

const LoginPage = (_props: RouteComponentProps) => {
  const { signup, signupIsLoading } = useAuth()

  return (
    <Container variant='thin'>
      <SignupForm
        onSubmit={(params) => signup(omit(params, ['passwordRepeat']))}
        isLoading={signupIsLoading}
      />
    </Container>
  )
}

export default LoginPage

export const Head: HeadFC = () => (
  <>
    <title>{`Regístrate en SupraChat! | ${BASE_TITLE}`}</title>
    <meta
      name='description'
      content='Página de registro de usuario para suprachat.net'
    />
  </>
)
