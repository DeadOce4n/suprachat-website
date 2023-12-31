import {
  QueryClient,
  QueryClientProvider as Provider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import i18n from 'i18next'
import { useCallback, type ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import { initReactI18next } from 'react-i18next'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

import { esTranslations } from '@common/translations'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { Player } from '@components/Player'
import particlesConfig from '@utils/particlesConfig'
import type { Page } from '@utils/types'

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
        <Player />
        <Footer name='SupraChat' author='DeadOcean' />
      </div>
      <Toaster position='top-center' />
    </>
  )
}

export default Layout

const queryClient = new QueryClient()

export const QueryClientProvider = ({ children }: Props) => {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools position='top-left' />
      {children}
    </Provider>
  )
}
