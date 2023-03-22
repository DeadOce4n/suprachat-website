import React from 'react'
import styled from 'styled-components'

const StyledIframe = styled.iframe`
  width: 100%;
  min-height: 90vh;
  scroll-snap-align: start;
`

type Props = {
  src: string
  title: string
}

const ChatFrame = ({ src, title }: Props) => (
  <StyledIframe src={src} title={title} id='chat' frameBorder='0' />
)

export default ChatFrame
