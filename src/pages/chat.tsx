import type { HeadFC } from 'gatsby'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

import ChatFrame from '@components/ChatFrame'
import Container from '@components/Container'
import Heading from '@components/Heading'
import { Modal } from '@components/Modal'
import useAuth from '@hooks/useAuth'
import { BASE_TITLE, CHANNELS, CHAT_URL } from '@utils/const'
import { useExternalEnv } from '@hooks/useExternalEnv'

const ChatPage = () => {
  const { userState } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation()
  const { envData } = useExternalEnv({ field: 'GATSBY_KIWI_URL' })

  const chatUrl = envData?.success
    ? envData.data.env['GATSBY_KIWI_URL'] ?? CHAT_URL
    : CHAT_URL

  const handlePopupClick = () => {
    setIsModalOpen(true)
    toast(t('pages.chat.openPopupClick'), {
      icon: <FaInfoCircle size={24} />
    })
  }

  const chatFrame = (
    <ChatFrame
      src={
        userState
          ? `${chatUrl}/?nick=${userState.nick}&channel=${CHANNELS}`
          : `${chatUrl}/?channel=${CHANNELS}`
      }
      title='Ventana del chat.'
    />
  )

  return (
    <>
      <section className='mb-8'>
        <Container variant='medium'>
          <Heading variant='h3'>{t('pages.chat.title')}</Heading>
          {isModalOpen ? (
            <div className='min-h-[80vh]' />
          ) : (
            <div className='relative min-h-[80vh] w-full'>
              <button
                className='btn-primary btn-sm btn-circle btn absolute -right-3 -top-3'
                onClick={handlePopupClick}
              >
                <FaExternalLinkAlt />
              </button>
              {chatFrame}
            </div>
          )}
        </Container>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className='p-0 md:max-w-screen-2xl'
        hideCloseButton
      >
        {chatFrame}
      </Modal>
    </>
  )
}

export default ChatPage

export const Head: HeadFC = () => (
  <>
    <title>¡Chatea ya! | {BASE_TITLE}</title>
    <meta
      name='description'
      content='Chatea con personas de todo el mundo gratis y sin registro. Chat de amistad en español para conocer personas. Nuestro vicio es chatear.'
    />
  </>
)
