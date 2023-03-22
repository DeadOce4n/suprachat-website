import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Container from '@components/Container/Container'
import useAuth from '@hooks/useAuth'
import ChatFrame from '@components/ChatFrame/ChatFrame'
import { CHAT_URL, CHANNELS } from '@utils/const'

const GlobalStyle = createGlobalStyle`
  html, body { scroll-snap-type: y mandatory; }
  iframe, nav { scroll-snap-align: start; }
  footer { scroll-snap-align: end; }
`

const ChatPage = () => {
  const { userState } = useAuth()

  return (
    <>
      <GlobalStyle />
      <section>
        <Container>
          <h3>
            Bienvenido a SupraChat! Lee las reglas y el manual de usuario si
            tienes dudas 😉
          </h3>
          <ChatFrame
            src={
              userState
                ? `${CHAT_URL}/?nick=${userState.nick}&channel=${CHANNELS}`
                : `${CHAT_URL}/?channel=${CHANNELS}`
            }
            title='Ventana del chat.'
          />
        </Container>
      </section>
    </>
  )
}

export default ChatPage
