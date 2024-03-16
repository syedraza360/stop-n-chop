import { toast } from 'react-toastify'
import { apiGet } from '../../../apis/ApiRequest'
import { ApiEndpoints } from '../../../apis/apiEndpoints'
import {
  GetABarberConstants,
  GetAllBarberConstants,
  GetAllSchedules,
  GetBarberScheduleConstant,
  UserDataConstants,
} from '../../constants'

export const addUserData = (data) => (dispatch) => {
  dispatch({ type: UserDataConstants.USER_DATA_LOADING })
  try {
    dispatch({ type: UserDataConstants.USER_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: UserDataConstants.USER_DATA_ERROR })
  }
}
export const getAllBarbers = () => (dispatch) => {
  dispatch({ type: GetAllBarberConstants.BARBER_LOADING })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getAllBarbers}`,
    (res) => {
      dispatch({
        type: GetAllBarberConstants.BARBER_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({ type: GetAllBarberConstants.BARBER_ERROR, payload: err })
    },
  )
}
export const getABarber = (id) => (dispatch) => {
  dispatch({ type: GetABarberConstants.BARBER_LOADING })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getABarber}${id}`,
    (res) => {
      dispatch({
        type: GetABarberConstants.BARBER_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({ type: GetABarberConstants.BARBER_ERROR, payload: err })
    },
  )
}
export const getAllSchedule = (day) => (dispatch) => {
  dispatch({ type: GetAllSchedules.GET_ALL_SCHEDULE_LOADING })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getAllSchedules}?day=${day}`,
    (res) => {
      dispatch({
        type: GetAllSchedules.GET_ALL_SCHEDULE_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: GetAllSchedules.GET_ALL_SCHEDULE_ERROR,
        payload: err,
      })
    },
  )
}
export const getBarberSchedule = (id) => (dispatch) => {
  dispatch({ type: GetBarberScheduleConstant.GET_BARBER_SCHEDULE_LOADING })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getBarberSchedule}${id}`,
    (res) => {
      dispatch({
        type: GetBarberScheduleConstant.GET_BARBER_SCHEDULE_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: GetBarberScheduleConstant.GET_BARBER_SCHEDULE_ERROR,
        payload: err,
      })
    },
  )
}
