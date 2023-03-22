import { z } from 'zod'

export const errorSchema = z.object({
  success: z.literal(false),
  error: z.object({ name: z.string(), message: z.string() }),
  additionalErrors: z.optional(
    z.array(z.object({ name: z.string(), message: z.string() }))
  )
})

export type ErrorSchema = z.infer<typeof errorSchema>

export const successSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  messageKey: z.string(),
  meta: z.optional(
    z.object({
      count: z.number(),
      offset: z.number(),
      limit: z.number(),
      total: z.number()
    })
  )
})

export type SuccessSchema = z.infer<typeof successSchema>

export const createResponseSchema = <TSchema extends z.Schema>(
  schema: TSchema
) =>
  z.discriminatedUnion('success', [
    errorSchema,
    successSchema.merge(z.object({ data: schema }))
  ])

export type GenericResponse = z.infer<ReturnType<typeof createResponseSchema>>
