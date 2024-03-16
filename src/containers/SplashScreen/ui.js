import { styled } from '@mui/system'
import { Box, Switch, Tabs, TextField } from '@mui/material'
import SplashImage from '../../assets/images/slashScreen.png'
import { Troubleshoot } from '@mui/icons-material'
import WebSplash from '../../assets/images/webSplash.png'
import MobileSplash2 from '../../assets/images/mobileSplash2.png'
import MobileSplash3 from '../../assets/images/mobileSplash3.png'

export const ImageWrapper = styled(Box)(({ theme, isActive }) => ({
  backgroundImage: isActive?.step1
    ? `url(${SplashImage})`
    : isActive?.step2
    ? `url(${MobileSplash2})`
    : `url(${MobileSplash3})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100% !important',
  height: '55vh',
}))
export const StepperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.profileSidebar,
  minHeight: '50vh',
  marginTop: '-50px',
  borderTopRightRadius: '30px',
  borderTopLeftRadius: '30px',
  overflowY: 'hidden',
}))

export const DotBox1 = styled('div')(({ theme, isActive }) => ({
  height: '20px',
  backgroundColor:
    isActive.step1 == true ? theme.palette.primary.main : '#F4F4F4',
  width: isActive.step1 ? '40px' : '20px',
  borderRadius: isActive.step1 ? '30px' : '50%',
}))
export const DotBox2 = styled('div')(({ theme, isActive }) => ({
  height: '20px',
  backgroundColor:
    isActive.step2 == true ? theme.palette.primary.main : '#F4F4F4',
  width: isActive.step2 ? '40px' : '20px',
  borderRadius: isActive.step2 ? '30px' : '50%',
}))
export const DotBox3 = styled('div')(({ theme, isActive }) => ({
  height: '20px',
  backgroundColor:
    isActive.step3 == true ? theme.palette.primary.main : '#F4F4F4',
  width: isActive.step3 ? '40px' : '20px',
  borderRadius: isActive.step3 ? '30px' : '50%',
}))
export const ImageBox = styled(Box)(
  ({ theme, isActive, isWebSplash, isSignup }) => ({
    backgroundImage: isWebSplash ? `url(${WebSplash})` : `url(${SplashImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100% !important',
    height: isSignup ? '100%' : '100vh !important',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: isWebSplash && '-190px',
    backgroundPositionX: 'center',
  }),
)
