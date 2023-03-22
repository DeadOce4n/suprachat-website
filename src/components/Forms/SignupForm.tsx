import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@components/Form/Form'
import Button from '@components/Button/Button'

const formSchema = z
  .object({
    nick: z.string().min(3).max(20),
    password: z.string().min(8),
    email: z.string().email(),
    passwordRepeat: z.string().min(8)
  })
  .refine((values) => values.passwordRepeat === values.password, {
    message: 'Las contraseñas no coinciden'
  })

type FormData = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormData) => void
}

const SignupForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  return (
    <Form.Container>
      <h1>Regístrate en SupraChat!</h1>
      <Form.Form onSubmit={handleSubmit(onSubmit)}>
        <Form.InputFields>
          <label htmlFor='nick'>Nick:</label>
          <input type='text' {...register('nick')} />
          {errors.nick && (
            <span className='error'>
              {errors.nick.message ?? 'Este campo es obligatorio.'}
            </span>
          )}
          <label htmlFor='email'>Email:</label>
          <input type='email' {...register('email')} />
          {errors.email && (
            <span className='error'>Este campo es obligatorio.</span>
          )}
          <label htmlFor='password'>Contraseña:</label>
          <input type='password' {...register('password')} />
          {errors.password && (
            <span className='error'>
              {errors.password.message ?? 'Este campo es obligatorio.'}
            </span>
          )}
          <label htmlFor='passwordRepeat'>Confirmar contraseña:</label>
          <input type='password' {...register('passwordRepeat')} />
          {errors.passwordRepeat && (
            <span className='error'>
              {errors.passwordRepeat.message ?? 'Este campo es obligatorio.'}
            </span>
          )}
          <Button type='submit' primary>
            Iniciar sesión
          </Button>
        </Form.InputFields>
      </Form.Form>
    </Form.Container>
  )
}

export default SignupForm
