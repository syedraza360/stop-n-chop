import { ServiceSelectedConstants } from '../constants'

const initialState = {}

export const ServiceSelectReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case ServiceSelectedConstants.SERVICE_SELECTED_LOADING:
      return { ...state, type: 'loading' }
    case ServiceSelectedConstants.SERVICE_SELECTED_SUCCESS:
      return {
        ...state,
        type: true,
        data: payload,
      }
    case ServiceSelectedConstants.SERVICE_SELECTED_ERROR:
      return { ...state, type: false }
    default:
      return state
  }
}
