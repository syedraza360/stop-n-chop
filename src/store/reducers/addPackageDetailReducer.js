import { AddPackageDetailConstant, UserDataConstants } from '../constants'

const initialState = {
  package: {},
}

export const AddPackageDetailReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case AddPackageDetailConstant.ADD_PACKAGE_DETAIL_LOADING:
      return { ...state, type: 'loading' }
    case AddPackageDetailConstant.ADD_PACKAGE_DETAIL_SUCCESS:
      return {
        ...state,
        type: true,
        package: payload,
      }
    case AddPackageDetailConstant.ADD_PACKAGE_DETAIL_ERROR:
      return { ...state, type: false, data: 'data is not retreived yet' }
    default:
      return state
  }
}
