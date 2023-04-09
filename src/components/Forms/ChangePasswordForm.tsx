import { zodResolver } from '@hookform/resolvers/zod'
import { cx } from 'classix'
import { t } from 'i18next'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import Heading from '@components/Heading'

const formSchema = z
  .object({
    password: z.string().min(8),
    passwordRepeat: z.string().min(8)
  })
  .refine((values) => values.passwordRepeat === values.password, {
    message: t('pages.signup.passwordsNotMatch') ?? '',
    path: ['passwordRepeat']
  })

type FormData = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormData) => void
}

export const ChangePasswordForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })
  const { t } = useTranslation()

  const submitHandler: SubmitHandler<FormData> = (params) => {
    onSubmit(params)
    reset()
  }

  return (
    <>
      <Heading variant='h2'>{t('pages.profile.changePassword')}</Heading>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-accent font-bold'>
              {t('pages.signup.password')}
              {':'}
            </span>
          </label>
          <input
            type='text'
            className={cx(
              'input-bordered input w-full',
              errors.password?.message && 'input-error'
            )}
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
            {...register('passwordRepeat')}
          />
        </div>
        <div className='modal-action'>
          <button className='btn-primary btn font-accent normal-case'>
            {t('actions.save')}
          </button>
        </div>
      </form>
    </>
  )
}
