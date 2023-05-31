import { z } from 'zod'
import qs from 'qs'

import { api } from './utils/api'
import { VERCEL_PROJECT_ID } from '@utils/const'

type FetchEnvVarParams = {
  field: string
}

export const fetchEnvVar = ({ field }: FetchEnvVarParams) => {
  const query = qs.stringify({
    projectId: VERCEL_PROJECT_ID,
    field
  })
  return api(
    {
      method: 'GET',
      endpoint: `/misc/get-env?${query}`
    },
    z.object({ env: z.record(z.string()) })
  )
}

export default {
  fetchEnvVar
}
