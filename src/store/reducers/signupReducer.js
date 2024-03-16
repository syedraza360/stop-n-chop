import { SignupConstants } from '../constants'

const initialState = {
  signup: [],
}

export const SignupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SignupConstants.SIGN_UP_LOADING:
      return { ...state, type: 'loading' }
    case SignupConstants.SIGN_UP_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case SignupConstants.SIGN_UP_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
