import React from 'react'
import { cx } from 'classix'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

import Heading from '@components/Heading'

const formSchema = z.object({
  username: z
    .string({ required_error: 'formSchema.required' })
    .min(3, { message: 'formSchema.tooSmall' })
    .max(20),
  password: z
    .string({ required_error: 'formSchema.required' })
    .min(8, { message: 'formSchema.tooSmall' }),
  remember_me: z.optional(z.boolean())
})

type FormSchema = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormSchema) => void
}

const LoginForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })
  const { t } = useTranslation()

  return (
    <div className='flex min-h-[75vh] max-w-lg flex-col items-center justify-center'>
      <Heading className='self-start'>{t('actions.login')}</Heading>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col gap-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.login.nick')}
                {':'}
              </span>
            </label>
            <input
              type='text'
              className={cx(
                'input-bordered input w-full',
                errors.username?.message && 'input-error'
              )}
              {...register('username')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.login.password')}
                {':'}
              </span>
            </label>
            <input
              type='password'
              className={cx(
                'input-bordered input w-full',
                errors.password?.message && 'input-error'
              )}
              {...register('password')}
            />
          </div>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <span className='label-text font-accent font-bold'>
                {t('pages.login.rememberMe')}
              </span>
              <input
                type='checkbox'
                className='checkbox checkbox-primary'
                {...register('remember_me')}
              />
            </label>
          </div>
          <button
            type='submit'
            className='btn-primary btn w-full font-accent normal-case'
          >
            {t('actions.login')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
