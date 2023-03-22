import React from 'react'
import { HeadProvider } from 'react-head'
import './src/styles/global.css'

import Layout, { QueryClientProvider } from './src/components/Layout/Layout'

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
export const wrapRootElement = ({ element }) => (
  <HeadProvider>
    <QueryClientProvider>{element}</QueryClientProvider>
  </HeadProvider>
)

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents
}) => {
  const headComponents = getHeadComponents()
  replaceHeadComponents([
    ...headComponents,
    <link
      key='css-reset'
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/'
    />
  ])
}
