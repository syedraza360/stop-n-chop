export const ApiEndpoints = {
  root: '/api',
  signup: '/register',
  login: '/login',
  verify: '/verify',
  forgetPassword: '/send-email',
  resetPassword: '/reset-password',
  getAllBarbers: '/barbers',
  getABarber: '/barbers/get/',
  getAllSchedules: '/schedules/get',
  uploadImage: '/users/add-profile-photo/',
  getUserProfile: '/users/get/',
  updateUserProfile: '/users/update/',
  getBarberSchedule: '/schedules/get/',
  getAllServices: '/services',
  getServiceById: '/services/get',
  getAllServicesByBarberID: '/services?barberId=',
  createBooking: '/bookings/create',
  getAllPackages: '/packages/',
  getUserAppointments: '/bookings/get-booking',
  addPackage: '/users/add-package',
  cancelAppointment: '/bookings/delete-user-booking/',
  getAService: '/services/get/',
  payBooking: '/order',
  specificPackage: '/packages/get/',
}
