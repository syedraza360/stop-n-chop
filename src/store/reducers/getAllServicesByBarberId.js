import { GetAllServicesByBarberIdConstants } from '../constants'

const initialState = {}

export const getAllServicesByBarberIdReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllServicesByBarberIdConstants.GET_ALL_SERVICES_ID_LOADING:
      return { ...state, type: 'loading' }
    case GetAllServicesByBarberIdConstants.GET_ALL_SERVICES_ID_SUCCESS:
      return { ...state, type: true, res: payload }
    case GetAllServicesByBarberIdConstants.GET_ALL_SERVICES_ID_ERROR:
      return { ...state, type: false }
    default:
      return state
  }
}
