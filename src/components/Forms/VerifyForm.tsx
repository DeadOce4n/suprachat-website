import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@components/Form/Form'
import Button from '@components/Button/Button'
import useAuth from '@hooks/useAuth'

const formSchema = z.object({
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/),
  code: z.string().min(26).max(26)
})

type FormData = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormData) => void
}

const LoginForm = ({ onSubmit }: Props) => {
  const { userState } = useAuth()
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: userState?._id as string
    }
  })

  return (
    <Form.Container>
      <h1>Verifica tu cuenta</h1>
      <p>
        Para continuar, ingresa el código de verificación que llegó a tu correo.
      </p>
      <Form.Form onSubmit={handleSubmit(onSubmit)}>
        <Form.InputFields>
          <label htmlFor='username'>Código de verificación:</label>
          <input type='text' {...register('code')} />
          <input type='hidden' {...register('userId')} />
          <Button type='submit' primary>
            Verificar
          </Button>
        </Form.InputFields>
      </Form.Form>
    </Form.Container>
  )
}

export default LoginForm
