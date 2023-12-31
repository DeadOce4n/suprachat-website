import type { RouteComponentProps } from '@reach/router'
import { Title, Meta } from 'react-head'

import VerifyForm from '@components/Forms/VerifyForm'
import useAuth from '@hooks/useAuth'
import type { VerifyParams } from '@services/auth.service'
import Container from '@components/Container/Container'
import { BASE_TITLE } from '@utils/const'

const VerifyPage = (_props: RouteComponentProps) => {
  const { verify, verifyIsLoading } = useAuth()

  const handleVerify = async (params: VerifyParams) => verify(params)

  return (
    <>
      <Title>{`Verifica tu cuenta | ${BASE_TITLE}`}</Title>
      <Meta
        name='description'
        content='Para continuar, debes introducir el código que llegó a tu correo.'
      />
      <Container variant='thin'>
        <VerifyForm onSubmit={handleVerify} isLoading={verifyIsLoading} />
      </Container>
    </>
  )
}

export default VerifyPage
