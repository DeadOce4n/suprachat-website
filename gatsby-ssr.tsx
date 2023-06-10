import React from 'react'
import { HeadProvider } from 'react-head'
import './src/styles/global.css'

import Layout, { QueryClientProvider } from './src/components/Layout/Layout'

const headTags = []

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
export const wrapRootElement = ({ element }) => (
  <HeadProvider headTags={headTags}>
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
    />,
    <meta
      key='viewport'
      name='viewport'
      content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
    />
  ])
}
