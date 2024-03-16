import { toast } from 'react-toastify'
import { apiGet, apiPost, apiPut } from '../../../apis/ApiRequest'
import { ApiEndpoints } from '../../../apis/apiEndpoints'
import {
  GetUserProfileConstants,
  UpdateUserProfileContants,
  UploadImageConstants,
} from '../../constants'

export const uploadProfileImage = (data, id) => (dispatch) => {
  dispatch({ type: UploadImageConstants.UPLOAD_IMAGE_LOADING })
  try {
    dispatch({ type: UploadImageConstants.UPLOAD_IMAGE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: UploadImageConstants.UPLOAD_IMAGE_ERROR })
  }
}

export const updateUserProfile = (data, id) => (dispatch) => {
  dispatch({ type: UpdateUserProfileContants.UPDATE_USER_PROFILE_LOADING })
  apiPut(
    `${ApiEndpoints.root}${ApiEndpoints.updateUserProfile}${id}`,
    data,
    (res) => {
      if (res.success) {
        toast.success(res.message)
      }
      dispatch({
        type: UpdateUserProfileContants.UPDATE_USER_PROFILE_SUCCESS,
        payload: { res, data },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: UpdateUserProfileContants.UPDATE_USER_PROFILE_ERROR,
        payload: err,
      })
    },
  )
}

export const getUserProfile = (id) => (dispatch) => {
  dispatch({ type: GetUserProfileConstants.GET_USER_PROFILE_LOADING })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getUserProfile}${id}`,
    (res) => {
      dispatch({
        type: GetUserProfileConstants.GET_USER_PROFILE_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: GetUserProfileConstants.GET_USER_PROFILE_ERROR,
        payload: err,
      })
    },
  )
}
