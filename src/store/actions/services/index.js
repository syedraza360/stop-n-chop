import { toast } from 'react-toastify'
import { apiGet, apiPost } from '../../../apis/ApiRequest'
import { ApiEndpoints } from '../../../apis/apiEndpoints'
import {
  AddPackageDetailConstant,
  AddTimeSlotsConstant,
  CreateBookingConstants,
  GetAllServiceByIdConstatnts,
  GetAllServicesByBarberIdConstants,
  GetAllServicesConstant,
  ServiceSelectedConstants,
} from '../../constants'

export const serviceSelect = (data) => (dispatch) => {
  dispatch({ type: AddPackageDetailConstant.ADD_PACKAGE_DETAIL_LOADING })
  try {
    dispatch({
      type: AddPackageDetailConstant.ADD_PACKAGE_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: AddPackageDetailConstant.ADD_PACKAGE_DETAIL_ERROR })
  }
}

export const getAllServicesByBarberId = (id) => (dispatch) => {
  dispatch({
    type: GetAllServicesByBarberIdConstants.GET_ALL_SERVICES_ID_LOADING,
  })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getAllServicesByBarberID}${id}`,
    (res) => {
      dispatch({
        type: GetAllServicesByBarberIdConstants.GET_ALL_SERVICES_ID_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: GetAllServicesByBarberIdConstants.GET_ALL_SERVICES_ID_ERROR,
        payload: err,
      })
    },
  )
}

export const getAllServices = (type) => (dispatch) => {
  dispatch({
    type: GetAllServicesConstant.GET_ALL_SERVICES_LOADING,
  })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getAllServices}?type=${type}`,
    (res) => {
      dispatch({
        type: GetAllServicesConstant.GET_ALL_SERVICES_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: GetAllServicesConstant.GET_ALL_SERVICES_ERROR,
        payload: err,
      })
    },
  )
}
export const getAllServicesById = (id) => (dispatch) => {
  dispatch({
    type: GetAllServiceByIdConstatnts.GET_ALL_SERVICE_BY_ID_LOADING,
  })
  apiGet(
    `${ApiEndpoints.root}${ApiEndpoints.getServiceById}/${id}`,
    (res) => {
      dispatch({
        type: GetAllServiceByIdConstatnts.GET_ALL_SERVICE_BY_ID_SUCCESS,
        payload: { res },
      })
    },
    (err) => {
      toast.error(err.response.data.message)
      dispatch({
        type: GetAllServiceByIdConstatnts.GET_ALL_SERVICE_BY_ID_ERROR,
        payload: err,
      })
    },
  )
}

export const createBooking = (data) => (dispatch) => {
  dispatch({ type: CreateBookingConstants.CREATE_BOOKING_LOADING })
  apiPost(
    `${ApiEndpoints.root}${ApiEndpoints.createBooking}`,
    data,
    (res) => {
      dispatch({
        type: CreateBookingConstants.CREATE_BOOKING_SUCCESS,
        payload: { res },
      })
      toast.success(res?.message)
    },
    (err) => {
      toast.error(err?.response?.data?.message)
      dispatch({
        type: CreateBookingConstants.CREATE_BOOKING_ERROR,
        payload: err,
      })
    },
  )
}

export const addTimeSlots = (data) => (dispatch) => {
  dispatch({ type: AddTimeSlotsConstant.ADD_TIME_SLOTS_LOADING })
  try {
    dispatch({
      type: AddTimeSlotsConstant.ADD_TIME_SLOTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: AddTimeSlotsConstant.ADD_TIME_SLOTS_ERROR })
  }
}
