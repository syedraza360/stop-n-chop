import { SignupConstants, UpdateUserProfileContants } from '../constants'

const initialState = {}

export const UpdateUserProfileReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case UpdateUserProfileContants.UPDATE_USER_PROFILE_LOADING:
      return { ...state, type: 'loading' }
    case UpdateUserProfileContants.UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case UpdateUserProfileContants.UPDATE_USER_PROFILE_ERROR:
      return { ...state, type: 'error' }
    default:
      return state
  }
}
