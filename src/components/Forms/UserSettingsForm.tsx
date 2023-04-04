import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Form from '@components/Form'
import Button from '@components/Button'
import type { User } from '@schemas/userSchema'
import { countries } from '@utils/const'

const formSchema = z.object({
  country: z.optional(z.enum(countries)),
  about: z.optional(z.string())
})

type FormSchema = z.infer<typeof formSchema>

type Props = {
  data: User
}

const UserDataForm = ({ data }: Props) => {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: data.about,
      country: data.country
    }
  })

  return <h1 className='text-5xl underline'>asdasdas</h1>
}

export default UserDataForm
