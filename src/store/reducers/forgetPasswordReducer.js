import { ForgetPasswordConstants } from '../constants'

const initialState = {
  email: [],
}

export const ForgetPasswordReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ForgetPasswordConstants.FORGET_PASSWORD_LOADING:
      return { ...state, type: 'loading' }
    case ForgetPasswordConstants.FORGET_PASSWORD_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case ForgetPasswordConstants.FORGET_PASSWORD_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
