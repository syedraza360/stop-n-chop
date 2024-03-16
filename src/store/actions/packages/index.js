import { toast } from 'react-toastify'
import {
  AddPackageDetailConstant,
  GetAllPackagesByTypeConstants,
  GetAllPackagesConstatnts,
} from '../../constants'
import { ApiEndpoints } from '../../../apis/apiEndpoints'
import { apiGet } from '../../../apis/ApiRequest'

export const addPackageDetails = (data) => (dispatch) => {
  dispatch({ type: AddPackageDetailConstant.ADD_PACKAGE_DETAIL_LOADING })
  try {
    dispatch({
      type: AddPackageDetailConstant.ADD_PACKAGE_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: AddPackageDetailConstant.ADD_PACKAGE_DETAIL_SUCCESS })
  }
}

export const getAllPackages = () => (dispatch) => {
  dispatch({
    type: GetAllPackagesConstatnts.GET_ALL_PACKAGES_LOADING,
  })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getAllPackages}`,
    (res) => {
      dispatch({
        type: GetAllPackagesConstatnts.GET_ALL_PACKAGES_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err.response.data.message)
      dispatch({
        type: GetAllPackagesConstatnts.GET_ALL_PACKAGES_ERROR,
        payload: err,
      })
    },
  )
}
export const getAllPackagesByType = (type = '', category = '') => (
  dispatch,
) => {
  dispatch({
    type: GetAllPackagesByTypeConstants.GET_ALL_PACKAGES_BY_TYPE_LOADING,
  })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getAllPackages}?type=${type}&category=${category}`,
    (res) => {
      dispatch({
        type: GetAllPackagesByTypeConstants.GET_ALL_PACKAGES_BY_TYPE_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err.response.data.message)
      dispatch({
        type: GetAllPackagesByTypeConstants.GET_ALL_PACKAGES_BY_TYPE_ERROR,
        payload: err,
      })
    },
  )
}
