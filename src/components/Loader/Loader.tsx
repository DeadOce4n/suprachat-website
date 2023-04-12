import React from 'react'
import { SyncLoader } from 'react-spinners'

const Loader = () => (
  <div className='flex h-[80vh] w-full items-center justify-center'>
    <SyncLoader className='text-primary' color='#FFFFFF' />
  </div>
)

export default Loader