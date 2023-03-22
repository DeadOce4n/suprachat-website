import React, { type ReactNode, useCallback } from 'react'
import {
  QueryClient,
  QueryClientProvider as Provider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'styled-components'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { Toaster } from 'react-hot-toast'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import useTheme from '@hooks/useTheme'
import type { Page } from '@utils/types'
import GlobalStyle from '@styles/global'
import particlesConfig from '@utils/particlesConfig'
import Navbar from '@components/Navbar/Navbar'
import { esTranslations } from '@common/translations'
import Footer from '@components/Footer/Footer'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: esTranslations
    }
  },
  lng: 'es'
})

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const variant = useTheme((state) => state.variant)

  const pages: Page[] = [
    { name: '¡Chatea ya!', route: '/chat' },
    { name: 'Reglas', route: '/reglas' },
    { name: 'Manual', route: '/manual' },
    { name: 'Acerca', route: '/acerca' }
  ]

  const particlesInit = useCallback((engine: Engine) => loadFull(engine), [])
  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('Particles loaded!', container?.id)
  }, [])

  return (
    <>
      <ThemeProvider theme={{ variant }}>
        <GlobalStyle />
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
          />
          <Navbar pages={pages} />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer name='SupraChat' author='DeadOcean' />
        </div>
      </ThemeProvider>
      <Toaster position='top-right' />
    </>
  )
}

export default Layout

const queryClient = new QueryClient()

export const QueryClientProvider = ({ children }: Props) => {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </Provider>
  )
}
