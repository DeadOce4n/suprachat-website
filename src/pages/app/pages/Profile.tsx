import React from 'react'
import { Title } from 'react-head'
import { useTranslation } from 'react-i18next'
import { SyncLoader } from 'react-spinners'

import Container from '@components/Container'
import UserDataForm from '@components/Forms/UserSettingsForm'
import Heading from '@components/Heading'
import useAuth from '@hooks/useAuth'
import { useUsers, useUser } from '@hooks/useUsers'
import type { UpdateParams } from '@services/user.service'
import { BASE_TITLE } from '@utils/const'
import type { User } from '@schemas/userSchema'

const ProfilePage = () => {
  const { userState } = useAuth()
  const { t } = useTranslation()
  const { updateUser } = useUsers()
  const { userData } = useUser(userState as User)

  const handleSubmit = (params: UpdateParams) => updateUser(params)

  return (
    <>
      <Title>{`${userData?.nick} | ${BASE_TITLE}`}</Title>
      <Container variant='thin'>
        <div className='flex min-h-[75vh] w-full flex-col items-center gap-4'>
          <Heading className='self-start'>
            {t('pages.profile.editProfile')}
          </Heading>
          <div className='avatar self-start'>
            <div className='w-48 rounded-full'>
              <img src={userData?.picture} />
            </div>
          </div>
          {userData ? (
            <UserDataForm data={userData} onSubmit={handleSubmit} />
          ) : (
            <div className='flex h-[80vh] w-full items-center justify-center'>
              <SyncLoader className='text-primary' color='#FFFFFF' />
            </div>
          )}
        </div>
      </Container>
    </>
  )
}

export default ProfilePage
