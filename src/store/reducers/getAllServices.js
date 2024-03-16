import { GetAllServicesConstant } from '../constants'

const initialState = {}

export const getAllServicesReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllServicesConstant.GET_ALL_SERVICES_LOADING:
      return { ...state, type: 'loading' }
    case GetAllServicesConstant.GET_ALL_SERVICES_SUCCESS:
      return { ...state, type: true, res: payload }
    case GetAllServicesConstant.GET_ALL_SERVICES_ERROR:
      return { ...state, type: false }
    default:
      return state
  }
}
