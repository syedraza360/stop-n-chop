import { UploadImageConstants } from '../constants'

const initialState = {}

export const UploadImageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UploadImageConstants.UPLOAD_IMAGE_LOADING:
      return { ...state, type: 'loading' }
    case UploadImageConstants.UPLOAD_IMAGE_SUCCESS:
      return { ...state, type: 'success', profilePicture: payload }
    case UploadImageConstants.UPLOAD_IMAGE_ERROR:
      return { ...state, type: 'error' }
    default:
      return state
  }
}
