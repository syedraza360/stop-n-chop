import * as yup from 'yup'

export const editProfileSchema = yup.object({
  name: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  number: yup.number().required('Phone Number is required').min(6),
})