type Props = {
  src: string
  title: string
}

const ChatFrame = ({ src, title }: Props) => (
  <iframe
    className='min-h-[96vh] w-full rounded-xl'
    src={src}
    title={title}
    id='chat'
  />
)

export default ChatFrame
