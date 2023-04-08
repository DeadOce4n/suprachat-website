import { z } from 'zod'

import { api } from './utils/api'
import { userSchema } from '@schemas/userSchema'
import type { countries } from '@utils/const'

export const getUser = (id: string) =>
  api({ method: 'GET', endpoint: `/users/${id}` }, userSchema)

export type FindParams = {
  offset: number
  limit: number
  filter: string
}

export const findUsers = (params?: FindParams) =>
  api({ method: 'GET', endpoint: '/users', params }, z.array(userSchema))

export type UpdateParams = {
  id: string
  token: string
  country?: (typeof countries)[number]
  about?: string
}

export const updateUser = ({ id, token, ...payload }: UpdateParams) =>
  api(
    { method: 'PATCH', endpoint: `/users/${id}`, payload, auth: { token } },
    userSchema
  )

export default {
  getUser,
  findUsers,
  updateUser
}
