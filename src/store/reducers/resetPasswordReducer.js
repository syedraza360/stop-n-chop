import { ResetPasswordConstants } from '../constants'

const initialState = {
  email: [],
}

export const ResetPasswordReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ResetPasswordConstants.RESET_PASSWORD_LOADING:
      return { ...state, type: 'loading' }
    case ResetPasswordConstants.RESET_PASSWORD_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case ResetPasswordConstants.RESET_PASSWORD_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
