import { cx } from 'classix'
import { useState } from 'react'
import { Title } from 'react-head'
import { useTranslation } from 'react-i18next'
import { FaImages, FaLock } from 'react-icons/fa'
import { omit } from 'remeda'

import { ChangePasswordForm } from '@components/Forms/ChangePasswordForm'
import UserDataForm from '@components/Forms/UserSettingsForm'
import Heading from '@components/Heading'
import { Modal } from '@components/Modal'
import useAuth from '@hooks/useAuth'
import { useUser, useUsers } from '@hooks/useUsers'
import type { UpdateParams } from '@services/user.service'
import { BASE_TITLE, DEFAULT_IMG_URL } from '@utils/const'

const ProfilePage = () => {
  const { userState, token } = useAuth()
  const { t } = useTranslation()
  const { updateUser, uploadPicture, updateUserIsLoading, uploadIsLoading } =
    useUsers()
  const { userData } = useUser(userState ? userState._id : '')
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false)

  const handleSubmit = (params: UpdateParams) =>
    updateUser(params, { onSuccess: () => setPasswordModalOpen(false) })
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
      <div className='mx-auto flex w-11/12 justify-center'>
        <div className='flex min-h-[75vh] w-full flex-col items-center gap-4 sm:w-max'>
          <Heading className='self-start'>
            {t('pages.profile.editProfile')}
          </Heading>
          <div className='flex w-full flex-col gap-8 sm:flex-row md:justify-between'>
            <div>
              <div className='avatar'>
                <div className='w-48 rounded-full md:w-60'>
                  <img
                    src={userData?.picture ?? DEFAULT_IMG_URL}
                    alt={
                      t('pages.profile.userProfilePic', {
                        nick: userData?.nick
                      }) as string
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <div className='mb-4 flex h-max w-max flex-row flex-wrap justify-end gap-2 self-start'>
                <button
                  className='btn-info btn-xs btn gap-1 font-accent normal-case'
                  onClick={() => setPasswordModalOpen(true)}
                >
                  <FaLock />
                  {t('pages.profile.changePassword')}
                </button>
                <label
                  htmlFor='file-input'
                  className={cx(
                    'btn-success btn-xs btn gap-1 font-accent normal-case',
                    uploadIsLoading && 'btn-disabled'
                  )}
                >
                  {uploadIsLoading ? (
                    <span className='loading loading-spinner loading-xs' />
                  ) : (
                    <FaImages />
                  )}
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
              {userData ? (
                <UserDataForm
                  data={userData}
                  onSubmit={handleSubmit}
                  isLoading={updateUserIsLoading || uploadIsLoading}
                />
              ) : (
                <div className='flex h-48 w-full items-center justify-center'>
                  <span className='loading loading-spinner loading-lg text-primary' />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isPasswordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
      >
        <ChangePasswordForm
          isLoading={updateUserIsLoading}
          isVisible={isPasswordModalOpen}
          onSubmit={(params) => handleSubmit(omit(params, ['passwordRepeat']))}
        />
      </Modal>
    </>
  )
}

export default ProfilePage
