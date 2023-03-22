import { z } from 'zod'

import { api } from './utils/api'
import { userSchema } from '@schemas/userSchema'

export const getUser = (id: string) =>
  api({ method: 'GET', endpoint: `/users/${id}` }, userSchema)

type FindParams = {
  offset: number
  limit: number
  filter: string
}

export const findUsers = (params?: FindParams) =>
  api({ method: 'GET', endpoint: `/users`, params }, z.array(userSchema))

export default {
  getUser,
  findUsers
}
