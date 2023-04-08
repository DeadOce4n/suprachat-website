import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

import userService from '@services/user.service'
import { useSessionStore } from '@hooks/useAuth'
import type { User } from '@schemas/userSchema'

export const useUsers = () => {
  const setUser = useSessionStore((state) => state.setUser)
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
    }
  })

  return {
    updateUser,
    updateUserIsLoading
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
