import { zodResolver } from '@hookform/resolvers/zod'
import { cx } from 'classix'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { t } from 'i18next'

import Heading from '@components/Heading'

const formSchema = z
  .object({
    nick: z.string().min(3).max(20),
    password: z.string().min(8),
    email: z.string().email(),
    passwordRepeat: z.string().min(8)
  })
  .refine((values) => values.passwordRepeat === values.password, {
    message: t('pages.signup.passwordsNotMatch') ?? '',
    path: ['passwordRepeat']
  })

type FormData = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormData) => void
  isLoading: boolean
}

const SignupForm = ({ onSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })
  const { t } = useTranslation()

  return (
    <div className='flex min-h-[75vh] max-w-lg flex-col items-center justify-center'>
      <Heading className='self-start'>{t('pages.signup.title')}</Heading>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col gap-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.signup.nick')}
                {':'}
              </span>
            </label>
            <input
              type='text'
              className={cx(
                'input-bordered input w-full',
                errors.nick?.message && 'input-error'
              )}
              disabled={isLoading}
              {...register('nick')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.signup.email')}
                {':'}
              </span>
            </label>
            <input
              type='email'
              className={cx(
                'input-bordered input w-full',
                errors.email?.message && 'input-error'
              )}
              disabled={isLoading}
              {...register('email')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.signup.password')}
                {':'}
              </span>
            </label>
            <input
              type='password'
              className={cx(
                'input-bordered input w-full',
                errors.password?.message && 'input-error'
              )}
              disabled={isLoading}
              {...register('password')}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.signup.passwordRepeat')}
                {':'}
              </span>
            </label>
            <input
              type='password'
              className={cx(
                'input-bordered input w-full',
                errors.passwordRepeat?.message && 'input-error'
              )}
              disabled={isLoading}
              {...register('passwordRepeat')}
            />
          </div>
          <button
            type='submit'
            className={cx(
              'btn-primary btn w-full font-accent normal-case',
              isLoading && 'loading'
            )}
            disabled={isLoading}
          >
            {t('actions.signup')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
