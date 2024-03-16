import { combineReducers } from 'redux'
import { SignupReducer } from './signupReducer'
import { EmailVerifyReducer } from './emailVerifyReducer'
import { UserDataReducer } from './addUserData'
import { SignInReducer } from './signinReducer'
import { DarkModeReducer } from './darkModeReducer'
import { ForgetPasswordReducer } from './forgetPasswordReducer'
import { ResetPasswordReducer } from './resetPasswordReducer'
import { GetAllBabersReducer } from './getBabersReducer'
import { GetABabersReducer } from './getABarber'
import { GetAllScheduleReducer } from './getAllSchedules'
import { UploadImageReducer } from './uploadImageReducer'
import { GetUserProfileReducer } from './getUserProfileReducer'
import { UpdateUserProfileReducer } from './updateUserProfile'
import { GetBarberScheduleReducer } from './getBarberScheduleReducer'
import { AddPackageDetailReducer } from './addPackageDetailReducer'
import { ServiceSelectReducer } from './serviceSelectReducer'
import { getAllServicesByBarberIdReducer } from './getAllServicesByBarberId'
import { getAllServicesReducer } from './getAllServices'
import { CreateBookingReducer } from './createBookingReducer'
import { GetAllPackagesReducer } from './getAllPackagesReducer'
import { GetAllPackagesByTypeReducer } from './getAllPackagesByType'
import { GetAllServiceByIdReducer } from './getAllServiceById'
import { RescheduleAppointmentReducer } from './resheduleAppointmentReducer'
import { AddTimeSlotsReducer } from './addTimeSlotsReducer'

export default combineReducers({
  SignupReducer,
  EmailVerifyReducer,
  UserDataReducer,
  SignInReducer,
  DarkModeReducer,
  ForgetPasswordReducer,
  ResetPasswordReducer,
  GetAllBabersReducer,
  GetABabersReducer,
  GetAllScheduleReducer,
  UploadImageReducer,
  GetUserProfileReducer,
  UpdateUserProfileReducer,
  GetBarberScheduleReducer,
  AddPackageDetailReducer,
  ServiceSelectReducer,
  getAllServicesByBarberIdReducer,
  getAllServicesReducer,
  CreateBookingReducer,
  GetAllPackagesReducer,
  GetAllPackagesByTypeReducer,
  GetAllServiceByIdReducer,
  RescheduleAppointmentReducer,
  AddTimeSlotsReducer
})
