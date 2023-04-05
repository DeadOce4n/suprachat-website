import Portal from '@rc-component/portal'
import { cx } from 'classix'
import type { HeadFC } from 'gatsby'
import React, { useState } from 'react'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import ChatFrame from '@components/ChatFrame'
import Container from '@components/Container'
import Heading from '@components/Heading'
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
      <Portal open={isModalOpen}>
        <div className={cx('modal', isModalOpen && 'modal-open')}>
          <div
            className='
              modal-box
              relative
              m-4
              h-full
              w-full
              p-0
              md:max-h-[80vh]
              md:max-w-screen-2xl'
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className='btn-primary btn-sm btn-circle btn absolute right-2 top-2'
            >
              <FaTimes />
            </button>
            {chatFrame}
          </div>
        </div>
      </Portal>
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
