import { toast } from 'react-toastify'
import { apiDelete } from '../../../apis/ApiRequest'
import { ApiEndpoints } from '../../../apis/apiEndpoints'
import {
  CancelAppointmentConstant,
  RescheduleAppointmentConstant,
} from '../../constants'

export const resheduleAppointment = (data) => (dispatch) => {
  dispatch({
    type: RescheduleAppointmentConstant.RESHEDULE_APPOINTMENT_LOADING,
  })
  try {
    dispatch({
      type: RescheduleAppointmentConstant.RESHEDULE_APPOINTMENT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: RescheduleAppointmentConstant.RESHEDULE_APPOINTMENT_ERROR,
    })
  }
}
