import type { HeadFC } from 'gatsby'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaExternalLinkAlt } from 'react-icons/fa'

import ChatFrame from '@components/ChatFrame'
import Container from '@components/Container'
import Heading from '@components/Heading'
import { Modal } from '@components/Modal'
import useAuth from '@hooks/useAuth'
import { BASE_TITLE, CHANNELS, CHAT_URL } from '@utils/const'

const ChatPage = () => {
  const { userState } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { t } = useTranslation()

  const chatFrame = (
    <ChatFrame
      src={
        userState
          ? `${CHAT_URL}/?nick=${userState.nick}&channel=${CHANNELS}`
          : `${CHAT_URL}/?channel=${CHANNELS}`
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
                className='btn-primary btn-sm btn-circle btn absolute top-2 right-2'
                onClick={() => setIsModalOpen(true)}
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
