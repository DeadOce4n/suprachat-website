import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

import type { User } from '@schemas/userSchema'
import { countries } from '@utils/const'
import useAuth from '@hooks/useAuth'

const formSchema = z.object({
  country: z.optional(z.enum(countries)),
  about: z.optional(z.string())
})

type FormSchema = z.infer<typeof formSchema>

type Props = {
  data: User
  onSubmit: (params: FormSchema & { id: string; token: string }) => void
}

const UserDataForm = ({ data, onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: data.about,
      country: data.country
    }
  })
  const { t } = useTranslation()
  const { token } = useAuth()

  return (
    <form
      className='flex w-full flex-col gap-4'
      onSubmit={handleSubmit((values) =>
        onSubmit({ ...values, id: data._id, token: token as string })
      )}
    >
      <div className='form-control w-full'>
        <label className='label font-accent font-bold text-primary'>
          <span className='label-text'>{t('pages.profile.whichCountry')}</span>
        </label>
        <select className='select-bordered select' {...register('country')}>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className='form-control w-full'>
        <label className='label font-accent font-bold text-primary'>
          <span className='label-text'>
            {t('pages.profile.tellUsAboutYou')}
          </span>
        </label>
        <textarea
          className='textarea-bordered textarea'
          {...register('about')}
        />
      </div>
      <div className='flex flex-row justify-end'>
        <button
          className='btn-primary btn font-accent normal-case'
          type='submit'
        >
          {t('actions.save')}
        </button>
      </div>
    </form>
  )
}

export default UserDataForm
