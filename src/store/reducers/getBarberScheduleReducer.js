import { GetAllBarberConstants, GetBarberScheduleConstant } from '../constants'

const initialState = {
  barbers: [],
}

export const GetBarberScheduleReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetBarberScheduleConstant.GET_BARBER_SCHEDULE_LOADING:
      return { ...state, type: 'loading' }
    case GetBarberScheduleConstant.GET_BARBER_SCHEDULE_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case GetBarberScheduleConstant.GET_BARBER_SCHEDULE_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
