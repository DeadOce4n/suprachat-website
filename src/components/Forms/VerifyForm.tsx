import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { cx } from 'classix'
import { t } from 'i18next'

import useAuth from '@hooks/useAuth'
import Heading from '@components/Heading'

const formSchema = z.object({
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/),
  code: z
    .string({ required_error: t('formSchema.required') ?? '' })
    .length(26, { message: t('formSchema.exactLength', { count: 26 }) ?? '' })
})

type FormData = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormData) => void
  isLoading: boolean
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const { userState } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: userState?._id as string
    }
  })
  const { t } = useTranslation()

  return (
    <div className='flex min-h-[75vh] max-w-lg flex-col items-center justify-center'>
      <Heading className='self-start'>{t('pages.verify.title')}</Heading>
      <p>{t('pages.verify.subtitle')}</p>
      <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col gap-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-accent font-bold'>
                {t('pages.verify.verificationCode')}
                {':'}
              </span>
            </label>
            <input
              type='text'
              className={cx(
                'input-bordered input w-full',
                errors.code?.message && 'input-error'
              )}
              disabled={isLoading}
              {...register('code')}
            />
          </div>
          <input type='hidden' {...register('userId')} />
          <button
            type='submit'
            className={cx(
              'btn-primary btn w-full font-accent normal-case',
              isLoading && 'loading'
            )}
            disabled={isLoading}
          >
            {t('actions.verify')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
