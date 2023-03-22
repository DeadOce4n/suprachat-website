import React from 'react'
import { Title } from 'react-head'

import UserDataForm from '@components/Forms/UserSettingsForm'
import Container from '@components/Container/Container'
import useAuth from '@hooks/useAuth'
import type { User } from '@schemas/userSchema'
import { BASE_TITLE } from '@utils/const'

const ProfilePage = () => {
  const { userState } = useAuth()

  return (
    <>
      <Title>{`Editar perfil: ${userState?.nick} | ${BASE_TITLE}`}</Title>
      <Container className='thin'>
        <UserDataForm data={userState as User} />
      </Container>
    </>
  )
}

export default ProfilePage
