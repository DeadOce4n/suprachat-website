import { countries } from '@utils/const'
import { z } from 'zod'

export const userConstants = {
  nickMinLength: 3,
  nickMaxLength: 20,
  passwordMinLength: 8
}

export const userSchema = z.object({
  _id: z.string(),
  nick: z
    .string()
    .min(userConstants.nickMinLength)
    .max(userConstants.nickMaxLength),
  email: z.optional(z.string().email()),
  country: z.optional(z.enum(countries)),
  about: z.optional(z.string()),
  verified: z.boolean(),
  active: z.boolean(),
  registered_date: z.string().datetime(),
  password_from: z.enum(['ergo', 'supra']),
  picture: z.optional(z.string().url()),
  role: z.enum(['admin', 'normal'])
})

export type User = z.infer<typeof userSchema>
