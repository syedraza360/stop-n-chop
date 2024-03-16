import { GetAllServiceByIdConstatnts } from '../constants'

const initialState = {}

export const GetAllServiceByIdReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllServiceByIdConstatnts.GET_ALL_SERVICE_BY_ID_LOADING:
      return { ...state, type: 'loading' }
    case GetAllServiceByIdConstatnts.GET_ALL_SERVICE_BY_ID_SUCCESS:
      return { ...state, type: true, res: payload }
    case GetAllServiceByIdConstatnts.GET_ALL_SERVICE_BY_ID_ERROR:
      return { ...state, type: false, res: payload }
    default:
      return state
  }
}
