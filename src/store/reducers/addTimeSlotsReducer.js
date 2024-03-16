import {
  AddPackageDetailConstant,
  AddTimeSlotsConstant,
  UserDataConstants,
} from '../constants'

const initialState = {
  time: "",
  day: "",
  date: ""
}

export const AddTimeSlotsReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case AddTimeSlotsConstant.ADD_TIME_SLOTS_LOADING:
      return { ...state, type: 'loading' }
    case AddTimeSlotsConstant.ADD_TIME_SLOTS_SUCCESS:
      return {
        ...state,
        type: true,
        time: payload.time,
        day: payload.day,
        date: payload.date
      }
    case AddTimeSlotsConstant.ADD_TIME_SLOTS_ERROR:
      return { ...state, type: false, data: 'data is not retreived yet' }
    default:
      return state
  }
}
