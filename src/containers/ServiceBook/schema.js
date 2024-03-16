import * as yup from 'yup'

export const bookServiceSchema = yup.object({
  date: yup.string(),
})
