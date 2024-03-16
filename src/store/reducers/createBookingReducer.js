import { CreateBookingConstants } from '../constants'

const initialState = {
}

export const CreateBookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CreateBookingConstants.CREATE_BOOKING_LOADING:
      return { ...state, type: 'loading' }
    case CreateBookingConstants.CREATE_BOOKING_SUCCESS:
      return { ...state, type: true, res: payload }
    case CreateBookingConstants.CREATE_BOOKING_ERROR:
      return { ...state, type: false }
    default:
      return state
  }
}
