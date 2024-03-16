import * as yup from 'yup'

export const paymentSchema = yup.object({
  name: yup.string(),
  cardNumber: yup.string(),
  expiryDate: yup.string(),
  cvc: yup.string(),
})
