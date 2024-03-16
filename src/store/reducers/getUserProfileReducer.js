import { GetAllBarberConstants, GetUserProfileConstants } from '../constants'

const initialState = {}

export const GetUserProfileReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetUserProfileConstants.GET_USER_PROFILE_LOADING:
      return { ...state, type: 'loading' }
    case GetUserProfileConstants.GET_USER_PROFILE_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case GetUserProfileConstants.GET_USER_PROFILE_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
