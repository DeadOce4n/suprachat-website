import React from 'react'

type Props = {
  src: string
  title: string
}

const ChatFrame = ({ src, title }: Props) => (
  <iframe
    className='h-full w-full rounded-xl min-h-[80vh]'
    src={src}
    title={title}
    id='chat'
  />
)

export default ChatFrame
