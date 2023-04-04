import React, { type ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const CodeBlock = ({ children }: Props) => {
  return (
    <div
      className='
        mb-4
        rounded-lg
        bg-neutral-300
        px-4
        py-2
        font-mono
        text-neutral-800
      '
    >
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
