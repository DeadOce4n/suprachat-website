import { z } from 'zod'

import { api } from './utils/api'
import { userSchema } from '@schemas/userSchema'

export type LoginParams = {
  username: string
  password: string
  rememberMe?: boolean
}

export const login = ({ username, password, rememberMe }: LoginParams) =>
  api(
    {
      method: 'POST',
      endpoint: '/auth/login',
      auth: { username, password },
      payload: {
        remember_me: rememberMe ?? false
      }
    },
    z.object({ token: z.string() })
  )

export type SignupParams = {
  nick: string
  email: string
  password: string
}

export const signup = (payload: SignupParams) =>
  api(
    {
      method: 'POST',
      endpoint: '/auth/signup',
      payload
    },
    userSchema
  )

export type VerifyParams = {
  userId: string
  code: string
}

export const verify = (payload: VerifyParams) =>
  api(
    {
      method: 'PUT',
      endpoint: '/auth/verify',
      payload
    },
    userSchema
  )

export default {
  login,
  signup,
  verify
}
