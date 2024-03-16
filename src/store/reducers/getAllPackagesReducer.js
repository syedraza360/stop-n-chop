import { GetAllPackagesConstatnts } from '../constants'

const initialState = {}

export const GetAllPackagesReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllPackagesConstatnts.GET_ALL_PACKAGES_LOADING:
      return { ...state, type: 'loading' }
    case GetAllPackagesConstatnts.GET_ALL_PACKAGES_SUCCESS:
      return { ...state, type: true, res: payload }
    case GetAllPackagesConstatnts.GET_ALL_PACKAGES_ERROR:
      return { ...state, type: false }
    default:
      return state
  }
}
