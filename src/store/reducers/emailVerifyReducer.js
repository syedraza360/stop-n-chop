import { EmailVerifyConstants } from '../constants'

const initialState = {
  email: [],
}

export const EmailVerifyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EmailVerifyConstants.EMAIL_VERIFY_LOADING:
      return { ...state, type: 'loading' }
    case EmailVerifyConstants.EMAIL_VERIFY_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case EmailVerifyConstants.EMAIL_VERIFY_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
