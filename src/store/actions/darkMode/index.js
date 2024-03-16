import { DarkModeConstants } from '../../constants'

export const darkMode = (data) => (dispatch) => {
  dispatch({ type: DarkModeConstants.DARK_MODE_LOADING })
  try {
    dispatch({ type: DarkModeConstants.DARK_MODE_SUCCESS, payload: data.darkMode })
  } catch (error) {
    dispatch({ type: DarkModeConstants.DARK_MODE_ERROR })
  }
}
