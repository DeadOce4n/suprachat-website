import React from 'react'
import type { RouteComponentProps } from '@reach/router'
import { Title, Meta } from 'react-head'

import VerifyForm from '@components/Forms/VerifyForm'
import useAuth from '@hooks/useAuth'
import type { VerifyParams } from '@services/auth.service'
import Container from '@components/Container/Container'
import { BASE_TITLE } from '@utils/const'

const VerifyPage = (_props: RouteComponentProps) => {
  const { verify } = useAuth()

  const handleVerify = async (params: VerifyParams) => verify(params)

  return (
    <>
      <Title>{`Verifica tu cuenta | ${BASE_TITLE}`}</Title>
      <Meta
        name='description'
        content='Para continuar, debes introducir el código que llegó a tu correo.'
      />
      <Container className='thin'>
        <VerifyForm onSubmit={handleVerify} />
      </Container>
    </>
  )
}

export default VerifyPage
