import { toast } from 'react-toastify'
import { apiPost } from '../../../apis/ApiRequest'
import { setToken } from '../../../apis/Auth'
import { ApiEndpoints } from '../../../apis/apiEndpoints'
import {
  EmailVerifyConstants,
  ForgetPasswordConstants,
  ResetPasswordConstants,
  SignInConstants,
  SignupConstants,
} from '../../constants'

export const signup = (data) => (dispatch) => {
  dispatch({ type: SignupConstants.SIGN_UP_LOADING })
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.signup}`,
    data,
    (res) => {
      dispatch({
        type: SignupConstants.SIGN_UP_SUCCESS,
        payload: { res, data },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({ type: SignupConstants.SIGN_UP_ERROR, payload: err })
    },
  )
}

export const emailVerification = (data) => (dispatch) => {
  dispatch({ type: EmailVerifyConstants.EMAIL_VERIFY_LOADING })
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.verify}`,
    data,
    (res) => {
      dispatch({
        type: EmailVerifyConstants.EMAIL_VERIFY_SUCCESS,
        payload: { res, data },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({ type: EmailVerifyConstants.EMAIL_VERIFY_ERROR, payload: err })
    },
  )
}

export const signin = (data) => (dispatch) => {
  dispatch({ type: SignInConstants.SIGN_IN_LOADING })
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.login}`,
    data,
    (res) => {
      setToken(res?.data.token)
      dispatch({
        type: SignInConstants.SIGN_IN_SUCCESS,
        payload: { res },
      })
      toast.success(res?.message)
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({ type: SignInConstants.SIGN_IN_ERROR, payload: err })
    },
  )
}

export const forgetPassword = (data) => (dispatch) => {
  dispatch({ type: ForgetPasswordConstants.FORGET_PASSWORD_LOADING })
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.forgetPassword}`,
    data,
    (res) => {
      dispatch({
        type: ForgetPasswordConstants.FORGET_PASSWORD_SUCCESS,
        payload: { res, data },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: ForgetPasswordConstants.FORGET_PASSWORD_ERROR,
        payload: err,
      })
    },
  )
}
export const resetPassword = (data) => (dispatch) => {
  dispatch({ type: ResetPasswordConstants.RESET_PASSWORD_LOADING })
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.resetPassword}`,
    data,
    (res) => {
      dispatch({
        type: ResetPasswordConstants.RESET_PASSWORD_SUCCESS,
        payload: { res, data },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: ResetPasswordConstants.RESET_PASSWORD_ERROR,
        payload: err,
      })
    },
  )
}
