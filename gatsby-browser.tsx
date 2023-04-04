import React from 'react'
import { HeadProvider } from 'react-head'
import { themeChange } from 'theme-change'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/manrope'

import Layout, { QueryClientProvider } from './src/components/Layout/Layout'
import './src/styles/global.css'

const headTags = []

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
export const wrapRootElement = ({ element }) => {
  themeChange(false)
  return (
    <HeadProvider headTags={headTags}>
      <QueryClientProvider>{element}</QueryClientProvider>
    </HeadProvider>
  )
}
