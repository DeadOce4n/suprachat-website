import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchEnvVar } from '@services/misc.service'
import { CHAT_URL } from '@utils/const'

type UseExternalEnvParams = {
  field: string
}

export const useExternalEnv = ({ field }: UseExternalEnvParams) => {
  const queryClient = useQueryClient()

  const { data: envData, isLoading: isEnvLoading } = useQuery({
    queryKey: ['env', field],
    queryFn: () => fetchEnvVar({ field }),
    staleTime: Infinity,
    onError: () => {
      queryClient.setQueryData(['env', field], CHAT_URL)
    },
    retry: false
  })

  return {
    envData,
    isEnvLoading
  }
}
