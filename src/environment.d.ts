import 'styled-components'
import type { ThemeVariant } from '@utils/types'

export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      GATSBY_API_URL: string
      GATSBY_JWT_ISSUER: string
      GATSBY_JWT_AUDIENCE: string
      GATSBY_BASE_TITLE: string
      GATSBY_KIWI_URL: string
      GATSBY_CHANNELS: string
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    variant: ThemeVariant
  }
}
