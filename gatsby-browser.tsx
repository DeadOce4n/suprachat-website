import '@fontsource/manrope'
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import type { GatsbyBrowser } from 'gatsby'
import type { ReactElement } from 'react'
import { HeadProvider } from 'react-head'
import { themeChange } from 'theme-change'

import Layout, { QueryClientProvider } from './src/components/Layout/Layout'
import './src/styles/global.css'

const headTags: ReactElement[] = []

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element
}) => <Layout>{element}</Layout>
export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element
}) => {
  themeChange(false)
  return (
    <HeadProvider headTags={headTags}>
      <QueryClientProvider>{element}</QueryClientProvider>
    </HeadProvider>
  )
}
