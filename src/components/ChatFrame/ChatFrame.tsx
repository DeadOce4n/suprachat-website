import React from 'react'

type Props = {
  src: string
  title: string
}

const ChatFrame = ({ src, title }: Props) => (
  <iframe
    className='h-full min-h-[90vh] w-full rounded-xl'
    src={src}
    title={title}
    id='chat'
  />
)

export default ChatFrame
