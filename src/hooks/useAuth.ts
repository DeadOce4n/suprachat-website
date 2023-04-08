import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { z } from 'zod'
import IdTokenVerifier from 'idtoken-verifier'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

import { type User, userSchema } from '@schemas/userSchema'
import authService from '@services/auth.service'
import { JWT_AUDIENCE, JWT_ISSUER } from '@utils/const'
import { APIError } from '@utils/error'

const decodeToken = <TSchema extends z.Schema>(
  token: string,
  schema: TSchema
): z.infer<TSchema> => {
  const verifier = new IdTokenVerifier({
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE
  })
  return schema.parse(verifier.decode(token).payload)
}

interface SessionState {
  user: User | null
  token: string | null
  setUser: (user: User) => void
  logout: () => void
  setToken: (token: string | null) => void
}

export const useSessionStore = create<SessionState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        setUser: (user) => set({ user }),
        setToken: (token) => {
          const user = get().user
          if (user) {
            set({ user, token })
          }
        },
        logout: () => set({ user: null })
      }),
      { name: 'session' }
    ),
    { name: 'session' }
  )
)

const useAuth = () => {
  const { t } = useTranslation()
  const {
    user: userState,
    token,
    setUser,
    setToken,
    logout
  } = useSessionStore()

  const { mutate: login, isLoading: loginIsLoading } = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      if (response.success) {
        const user = decodeToken(response.data.token, userSchema)
        setUser(user)
        setToken(response.data.token)
        toast.success(t(`hooks.auth.${response.messageKey}`, { nick: user.nick }))
        navigate('/app/perfil')
      }
    },
    onError: (error: Error) => {
      if (error instanceof APIError) {
        toast.error(t(`hooks.auth.${error.message}`))
      }
    }
  })

  const { mutate: signup, isLoading: signupIsLoading } = useMutation({
    mutationFn: authService.signup,
    onSuccess: (response) => {
      if (response.success) {
        setUser(response.data)
        navigate('/verificar')
      }
    },
    onError: (error: Error) => {
      if (error instanceof APIError) {
        toast.error(t(`hooks.auth.${error.message}`))
      }
    }
  })

  const { mutate: verify, isLoading: verifyIsLoading } = useMutation({
    mutationFn: authService.verify,
    onSuccess: (response) => {
      if (response.success) {
        setUser(response.data)
        navigate('/')
      }
    },
    onError: (error: Error) => {
      if (error instanceof APIError) {
        toast.error(t(`hooks.auth.${error.message}`))
      }
    }
  })

  return {
    userState,
    token,
    login,
    loginIsLoading,
    signup,
    signupIsLoading,
    verify,
    verifyIsLoading,
    logout
  }
}

export default useAuth
