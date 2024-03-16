import { DarkModeConstants } from '../constants'

const initialState = {
  dark: /true/.test(localStorage.getItem('dark')),
}

export const DarkModeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DarkModeConstants.DARK_MODE_LOADING:
      return { ...state, type: 'loading' }
    case DarkModeConstants.DARK_MODE_SUCCESS:
      return {
        ...state,
        type: 'success',
        dark: payload,
      }
    case DarkModeConstants.DARK_MODE_ERROR:
      return { ...state, type: 'error', data: payload }
    default:
      return state
  }
}
