import React, { useState } from 'react'
import { Title } from 'react-head'
import { useTranslation } from 'react-i18next'
import { FaImages, FaLock } from 'react-icons/fa'
import { SyncLoader } from 'react-spinners'

import Container from '@components/Container'
import { ChangePasswordForm } from '@components/Forms/ChangePasswordForm'
import UserDataForm from '@components/Forms/UserSettingsForm'
import Heading from '@components/Heading'
import { Modal } from '@components/Modal'
import useAuth from '@hooks/useAuth'
import { useUser, useUsers } from '@hooks/useUsers'
import type { UpdateParams } from '@services/user.service'
import { BASE_TITLE } from '@utils/const'

const ProfilePage = () => {
  const { userState, token } = useAuth()
  const { t } = useTranslation()
  const { updateUser, uploadPicture } = useUsers()
  const { userData } = useUser(userState ? userState._id : '')
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false)

  const handleSubmit = (params: UpdateParams) => updateUser(params)
  const handlePictureUpload = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    uploadPicture({
      id: userData?._id as string,
      token: token as string,
      payload: formData
    })
  }

  return (
    <>
      <Title>{`${userData?.nick} | ${BASE_TITLE}`}</Title>
      <Container variant='thin'>
        <div className='flex min-h-[75vh] w-full flex-col items-center gap-4'>
          <Heading className='self-start'>
            {t('pages.profile.editProfile')}
          </Heading>
          <div className='flex w-full flex-col gap-4 md:flex-row md:justify-between'>
            <div className='avatar'>
              <div className='w-48 rounded-full'>
                <img src={userData?.picture} />
              </div>
            </div>
            <div className='flex h-max w-max flex-row flex-wrap justify-end gap-2 self-end'>
              <button
                className='btn-info btn-xs btn gap-1 font-accent normal-case'
                onClick={() => setPasswordModalOpen(true)}
              >
                <FaLock />
                {t('pages.profile.changePassword')}
              </button>
              <label
                htmlFor='file-input'
                className='btn-success btn-xs btn gap-1 font-accent normal-case'
              >
                <FaImages />
                {t('pages.profile.changeProfilePic')}
              </label>
              <input
                id='file-input'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={(e) =>
                  handlePictureUpload(e.target.files?.[0] as File)
                }
              />
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
      <Modal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
      >
        <ChangePasswordForm onSubmit={(params) => console.log(params)} />
      </Modal>
    </>
  )
}

export default ProfilePage