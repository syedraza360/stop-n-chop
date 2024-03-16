import { GetAllSchedules } from '../constants'

const initialState = {}

export const GetAllScheduleReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllSchedules.GET_ALL_SCHEDULE_LOADING:
      return { ...state, type: 'loading' }
    case GetAllSchedules.GET_ALL_SCHEDULE_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case GetAllSchedules.GET_ALL_SCHEDULE_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
