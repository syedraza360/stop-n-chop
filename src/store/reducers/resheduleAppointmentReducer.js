import { RescheduleAppointmentConstant, UserDataConstants } from '../constants'

const initialState = {
  appointment: [],
}

export const RescheduleAppointmentReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case RescheduleAppointmentConstant.RESHEDULE_APPOINTMENT_LOADING:
      return { ...state, type: 'loading' }
    case RescheduleAppointmentConstant.RESHEDULE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        type: true,
        appointment: payload,
      }
    case RescheduleAppointmentConstant.RESHEDULE_APPOINTMENT_ERROR:
      return { ...state, type: false, data: 'data is not retreived yet' }
    default:
      return state
  }
}
