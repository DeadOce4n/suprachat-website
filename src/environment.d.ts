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
      GATSBY_RADIO_URL: string
      GATSBY_RADIO_WS: string
      GATSBY_DEFAULT_IMG_URL: string
      GATSBY_VERCEL_PROJECT_ID: string
    }
  }
}
