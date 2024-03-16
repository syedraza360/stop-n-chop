import { UserDataConstants } from '../constants'

const initialState = {
  userData: [],
}

export const UserDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserDataConstants.USER_DATA_LOADING:
      return { ...state, type: 'loading' }
    case UserDataConstants.USER_DATA_SUCCESS:
      return { ...state, type: 'success', data: payload }
    case UserDataConstants.USER_DATA_ERROR:
      return { ...state, type: 'error', data: 'data is not retreived yet' }
    default:
      return state
  }
}
