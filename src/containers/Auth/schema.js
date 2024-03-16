import * as yup from 'yup'

export const forgetPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
})

export const signupSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must Contain 8 characters long')
    .matches(/\d+/, 'Password must Contain one number')
    .matches(/[a-z]+/, 'Password must Contain one lowercase')
    .matches(/[A-Z]+/, 'Password must Contain one uppercase')
    .matches(/[!@#$%^&*()-+]+/, 'Password must Contain one special character'),
  number: yup.number().required('Phone Number is required').min(6),
})

export const resetEmailSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
})
export const resetPhoneSchema = yup.object({
  number: yup.string().required('Phone number is required'),
})
export const newPasswordSchema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must Contain 8 characters long')
    .matches(/\d+/, 'Password must Contain one number')
    .matches(/[a-z]+/, 'Password must Contain one lowercase')
    .matches(/[A-Z]+/, 'Password must Contain one uppercase')
    .matches(/[!@#$%^&*()-+]+/, 'Password must Contain one special character'),
  newPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('New Password is required'),
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must Contain 8 characters long')
    .matches(/\d+/, 'Password must Contain one number')
    .matches(/[a-z]+/, 'Password must Contain one lowercase')
    .matches(/[A-Z]+/, 'Password must Contain one uppercase')
    .matches(/[!@#$%^&*()-+]+/, 'Password must Contain one special character'),
})
