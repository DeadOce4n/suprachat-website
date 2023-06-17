import React from 'react'
import { cx } from 'classix'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

import Heading from '@components/Heading'
import { userConstants } from '@schemas/userSchema'

const formSchema = z.object({
  username: z
    .string({ required_error: 'formSchema.required' })
    .min(userConstants.nickMinLength, { message: 'formSchema.tooSmall' })
    .max(userConstants.nickMaxLength, { message: 'formSchema.tooBig' }),
  password: z
    .string({ required_error: 'formSchema.required' })
    .min(userConstants.passwordMinLength, { message: 'formSchema.tooSmall' }),
  remember_me: z.optional(z.boolean())
})

type FormSchema = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormSchema) => void
  isLoading: boolean
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
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
              {errors.username && errors.username.message && (
                <span className='label-text-alt text-error'>
                  {t(errors.username.message, {
                    count:
                      errors.username.message === 'formSchema.tooSmall'
                        ? userConstants.nickMinLength
                        : userConstants.nickMaxLength
                  })}
                </span>
              )}
            </label>
            <input
              type='text'
              className={cx(
                'input-bordered input-primary input w-full',
                errors.username?.message && 'input-error'
              )}
              disabled={isLoading}
              {...register('username')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.login.password')}
                {':'}
              </span>
              {errors.password && errors.password.message && (
                <span className='label-text-alt text-error'>
                  {t(errors.password.message, {
                    count: userConstants.passwordMinLength
                  })}
                </span>
              )}
            </label>
            <input
              type='password'
              className={cx(
                'input-bordered input-primary input w-full',
                errors.password?.message && 'input-error'
              )}
              disabled={isLoading}
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
                className='checkbox-primary checkbox'
                disabled={isLoading}
                {...register('remember_me')}
              />
            </label>
          </div>
          <button
            type='submit'
            className={cx('btn-primary btn w-full font-accent normal-case')}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className='loading loading-spinner' />
            ) : (
              t('actions.login')
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
