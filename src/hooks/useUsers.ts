import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { shallow } from 'zustand/shallow'

import userService from '@services/user.service'
import { useSessionStore } from '@hooks/useAuth'
import type { User } from '@schemas/userSchema'
import { APIError } from '@utils/error'

export const useUsers = () => {
  const { user, setUser, logout } = useSessionStore(
    (state) => ({
      user: state.user,
      setUser: state.setUser,
      logout: state.logout
    }),
    shallow
  )
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  const { mutate: updateUser, isLoading: updateUserIsLoading } = useMutation({
    mutationFn: userService.updateUser,
    onSuccess: (response) => {
      if (response.success) {
        setUser(response.data)
        toast.success(t(`hooks.users.${response.messageKey}`))
        queryClient.setQueryData(['users', response.data._id], response.data)
      }
    },
    onError: (error: Error) => {
      if (error instanceof APIError) {
        toast.error(t(`hooks.users.${error.message}`))
        if (error.status === 401) {
          logout()
        }
      }
    }
  })

  const { mutate: uploadPicture, isLoading: uploadIsLoading } = useMutation({
    mutationFn: userService.uploadPicture,
    onSuccess: (response) => {
      if (response.success && !!user) {
        const updatedUser = {
          ...user,
          picture: response.data.imageUrl
        }
        setUser(updatedUser)
        queryClient.setQueryData(['users', user._id], updatedUser)
        toast.success(t(`hooks.users.${response.messageKey}`))
      }
    },
    onError: (error: Error) => {
      if (error instanceof APIError) {
        toast.error(t(`hooks.users.${error.message}`))
        if (error.status === 401) {
          logout()
        }
      }
    }
  })

  return {
    updateUser,
    updateUserIsLoading,
    uploadPicture,
    uploadIsLoading
  }
}

export const useUser = (user: string | User) => {
  const userState = useSessionStore((state) => state.user)
  const userId = typeof user === 'string' ? user : user._id
  const { data: userData, isLoading: isUserFetchLoading } = useQuery({
    queryKey: ['users', userId],
    queryFn: async () => {
      const res = await userService.getUser(userId)
      if (!res.success) {
        return null
      }
      return res.data
    },
    initialData: userState?._id === userId ? userState : null
  })

  return {
    userData,
    isUserFetchLoading
  }
}
