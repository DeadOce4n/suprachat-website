import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@components/Form/Form'
import Slider from '@components/Slider/Slider'
import Button from '@components/Button/Button'

const formSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
  remember_me: z.optional(z.boolean())
})

type FormSchema = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormSchema) => void
}

const LoginForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })

  return (
    <Form.Container>
      <h1>Iniciar sesión</h1>
      <Form.Form onSubmit={handleSubmit(onSubmit)}>
        <Form.InputFields>
          <label htmlFor='username'>Nick:</label>
          <input type='text' {...register('username')} />
          <label htmlFor='password'>Contraseña:</label>
          <input type='password' {...register('password')} />
          <Slider label='Recordarme por 30 días' {...register('remember_me')} />
          <Button type='submit' primary>
            Iniciar sesión
          </Button>
        </Form.InputFields>
      </Form.Form>
    </Form.Container>
  )
}

export default LoginForm
