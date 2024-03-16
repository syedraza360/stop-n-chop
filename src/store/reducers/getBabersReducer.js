import { GetAllBarberConstants } from '../constants'

const initialState = {
  barbers: [],
}

export const GetAllBabersReducer = (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case GetAllBarberConstants.BARBER_LOADING:
      return { ...state, type: 'loading' }
    case GetAllBarberConstants.BARBER_SUCCESS:
      return { ...state, type: 'success', res: payload }
    case GetAllBarberConstants.BARBER_ERROR:
      return { ...state, type: 'error', res: payload }
    default:
      return state
  }
}
