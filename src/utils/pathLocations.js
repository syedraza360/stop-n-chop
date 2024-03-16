import AccountVerfied from '../pages/AccountVerfied'
import Appointment from '../pages/Appointment'
import Chat from '../pages/Chat'
import EmailVerfication from '../pages/EmailVerfication'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewPassword from '../pages/NewPassword'
import Notification from '../pages/Notification'
import Packages from '../pages/Packages'
import AddProfile from '../pages/AddProfile'
import Profile from '../pages/Profile'
import ResetPassword from '../pages/ResetPassword'
import SignUp from '../pages/SignUp'
import SplashScreen from '../pages/SplashScreen'
import EditProfile from '../pages/EditProfile'
import Services from '../pages/Services'
import PaymentMethod from '../pages/PaymentMethod'
import BookService from '../pages/BookService'
import ProtectedRoute from '../pages/ProtectedRoute'
import EditAppointment from '../pages/EditAppointment'
import TermsAndCondition from '../pages/TermsAndCondition'
import PrivacyAndPolicy from '../pages/PrivacyAndPolicy'
import SubscribedPackage from '../pages/SubscribedPackage'

const pathLocations = [
  {
    path: '/',
    component: <SplashScreen />,
  },
  { path: '/login', component: <Login /> },
  { path: '/sign-up', component: <SignUp /> },
  { path: '/new-password', component: <NewPassword /> },
  { path: '/reset-password', component: <ResetPassword /> },
  { path: '/home', component: <ProtectedRoute component={Home} /> },
  {
    path: '/account-verified',
    component: <ProtectedRoute component={AccountVerfied} />,
  },
  { path: '/packages', component: <ProtectedRoute component={Packages} /> },
  {
    path: '/notification',
    component: <ProtectedRoute component={Notification} />,
  },
  {
    path: '/add-profile',
    component: <ProtectedRoute component={AddProfile} />,
  },
  {
    path: '/edit-profile',
    component: <ProtectedRoute component={EditProfile} />,
  },
  { path: '/profile', component: <ProtectedRoute component={Profile} /> },
  {
    path: '/appointments',
    component: <ProtectedRoute component={Appointment} />,
  },
  {
    path: '/email-verification',
    component: <EmailVerfication />,
  },
  { path: '/services', component: <ProtectedRoute component={Services} /> },
  {
    path: '/payment',
    component: <ProtectedRoute component={PaymentMethod} />,
  },
  {
    path: '/book-service',
    component: <ProtectedRoute component={BookService} />,
  },
  {
    path: '/edit-appointment',
    component: <ProtectedRoute component={EditAppointment} />,
  },

  {
    path: '/terms-and-condition',
    component: <ProtectedRoute component={TermsAndCondition} />,
  },
  {
    path: '/privacy-and-policy',
    component: <ProtectedRoute component={PrivacyAndPolicy} />,
  },
  {
    path: '/subscribed-package',
    component: <ProtectedRoute component={SubscribedPackage} />,
  },
]

export default pathLocations
