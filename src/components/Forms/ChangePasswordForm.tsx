import { zodResolver } from '@hookform/resolvers/zod'
import { cx } from 'classix'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'

import Heading from '@components/Heading'
import { userConstants } from '@schemas/userSchema'
import useAuth from '@hooks/useAuth'
import { FaSave } from 'react-icons/fa'

const formSchema = z
  .object({
    password: z
      .string({ required_error: 'formSchema.required' })
      .min(userConstants.passwordMinLength, { message: 'formSchema.tooSmall' }),
    passwordRepeat: z
      .string({ required_error: 'formSchema.required' })
      .min(userConstants.passwordMinLength, { message: 'formSchema.tooSmall' })
  })
  .refine((values) => values.passwordRepeat === values.password, {
    message: 'pages.signup.passwordsNotMatch',
    path: ['passwordRepeat']
  })

type FormData = z.infer<typeof formSchema>

type Props = {
  onSubmit: (params: FormData & { id: string; token: string }) => void
  isVisible: boolean
  isLoading: boolean
}

export const ChangePasswordForm = ({
  onSubmit,
  isVisible,
  isLoading
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })
  const { t } = useTranslation()
  const { token, userState } = useAuth()

  const submitHandler: SubmitHandler<FormData> = (params) => {
    onSubmit({
      ...params,
      token: token as string,
      id: userState?._id as string
    })
    reset()
  }

  useEffect(() => reset(), [isVisible])

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
          <label className='label'>
            <span className='label-text font-accent font-bold'>
              {t('pages.signup.passwordRepeat')}
              {':'}
            </span>
            {errors.passwordRepeat && errors.passwordRepeat.message && (
              <span className='label-text-alt text-error'>
                {t(errors.passwordRepeat.message, {
                  count: userConstants.passwordMinLength
                })}
              </span>
            )}
          </label>
          <input
            type='password'
            className={cx(
              'input-bordered input-primary input w-full',
              errors.passwordRepeat?.message && 'input-error'
            )}
            disabled={isLoading}
            {...register('passwordRepeat')}
          />
        </div>
        <div className='modal-action'>
          <button
            disabled={isLoading}
            className={cx('btn-primary btn font-accent normal-case')}
          >
            {isLoading ? (
              <span className='loading loading-spinner loading-sm' />
            ) : (
              <FaSave />
            )}
            {t('actions.save')}
          </button>
        </div>
      </form>
    </>
  )
}
