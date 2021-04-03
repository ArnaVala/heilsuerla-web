import React from 'react'
import {useForm} from 'react-hook-form'

export default function App () {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Fullt nafn' {...register('Fullt nafn', {required: true, maxLength: 80})} />
      <input type='text' placeholder='Vinnustaður / Hópur' {...register} />
      <input type='email' placeholder='Netfang' {...register('Netfang', {required: true, pattern: /^\S+@\S+$/i})} />
      <input type='tel' placeholder='Mobile number' {...register('Mobile number', {max: 0, maxLength: 7})} />
      <textarea {...register('Skilaboð', {required: true})} />

      <input type='submit' />
    </form>
  )
}
