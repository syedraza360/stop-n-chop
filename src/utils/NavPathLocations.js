import { ReactComponent as HomeIcon } from '../assets/icons/home.svg'
import { ReactComponent as PackagesIcon } from '../assets/icons/calendar.svg'
import { ReactComponent as ChatIcon } from '../assets/icons/chat.svg'
import { ReactComponent as NotifictionIcon } from '../assets/icons/notifiction.svg'
import { ReactComponent as PackageIcon } from '../assets/icons/packageIcon.svg'
import { ReactComponent as ServicesIcon } from '../assets/images/servicesIcon.svg'
import { ReactComponent as AppointmentIcon } from '../assets/icons/appointmentIcon.svg'

export const routes = [
  { path: '/home', text: 'Home', Icon: HomeIcon },
  { path: '/services', text: 'Services', Icon: ServicesIcon },
  { path: '/packages', text: 'Subscription', Icon: PackageIcon },
  { path: '/appointments', text: 'Appointments', Icon: AppointmentIcon },
  { path: '/notification', text: 'Notification', Icon: NotifictionIcon },
]

export const headerRoutes = [
  { path: '/home', text: 'Home' },
  { path: '/services', text: 'Services' },
  { path: '/packages', text: 'Subscriptions' },
  { path: '/appointments', text: 'Appointments' },
]
