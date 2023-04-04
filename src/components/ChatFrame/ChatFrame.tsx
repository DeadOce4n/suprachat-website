import React from 'react'

type Props = {
  src: string
  title: string
}

const ChatFrame = ({ src, title }: Props) => (
  <iframe
    className='w-full min-h-[80vh] rounded-2xl'
    src={src}
    title={title}
    id='chat'
  />
)

export default ChatFrame
