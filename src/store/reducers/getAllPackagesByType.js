import { GetAllPackagesByTypeConstants } from '../constants'

const initialState = {}

export const GetAllPackagesByTypeReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllPackagesByTypeConstants.GET_ALL_PACKAGES_BY_TYPE_LOADING:
      return { ...state, type: 'loading' }
    case GetAllPackagesByTypeConstants.GET_ALL_PACKAGES_BY_TYPE_SUCCESS:
      return { ...state, type: true, res: payload }
    case GetAllPackagesByTypeConstants.GET_ALL_PACKAGES_BY_TYPE_ERROR:
      return { ...state, type: false }
    default:
      return state
  }
}
