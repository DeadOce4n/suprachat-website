import { pickBy } from 'remeda'
import type { z } from 'zod'
import qs from 'qs'
import { encode } from 'js-base64'

import { API_URL } from '@utils/const'
import { APIError } from '@utils/error'
import { createResponseSchema } from '@common/schemas'
import type { GenericResponse } from '@common/schemas'

type GenericRequest<
  TReq extends FormData | Record<string, unknown> | undefined = undefined
> = {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  payload?: TReq
  params?: Record<string, unknown> | undefined
  auth?: { token: string } | { username: string; password: string }
}

export const api = async <
  TRes extends z.Schema,
  TReq extends FormData | Record<string, unknown>
>(
  request: GenericRequest<TReq>,
  schema: TRes,
  baseUrl = API_URL
) => {
  const { method, params, payload, endpoint, auth } = request
  const headers: HeadersInit = {}

  if (auth) {
    if ('token' in auth) {
      headers['Authorization'] = `Bearer ${auth.token}`
    } else {
      const creds = encode(`${auth.username}:${auth.password}`)
      headers['Authorization'] = `Basic ${creds}`
    }
  }

  const options: RequestInit = {
    method,
    headers
  }

  if (payload) {
    if (payload instanceof FormData) {
      options.body = payload
    } else {
      options.body = JSON.stringify(
        pickBy(payload, (value) => value !== undefined && value !== '')
      )
      headers['Content-Type'] = 'application/json'
    }
  }

  const queryString = params ? `?${qs.stringify(params)}` : ''

  const res = await fetch(`${baseUrl}${endpoint}${queryString}`, options)
  const data = createResponseSchema(schema).parse(
    await res.json()
  ) satisfies GenericResponse

  if (!res.ok) {
    if ('error' in data) {
      return Promise.reject(
        new APIError(data.error.name, res.status, data.additionalErrors)
      )
    }
    return Promise.reject(new APIError('unknownError', res.status))
  }

  return data
}
