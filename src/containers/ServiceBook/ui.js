import { styled } from '@mui/system'
import { Box } from '@mui/material'
import BookingImg from '../../assets/images/bookImg.svg'
import BookingImgMob from '../../assets/images/bookImgMobile.svg'
import BarberImg from '../../assets/images/barberImg.svg'

export const ImageWrapper = styled(Box)(({ theme, index, path }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${BookingImgMob})`,
  },
  backgroundImage: `url(${BookingImg})`,
  height: '300px',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.down('md')]: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  position: 'relative',
}))

export const ImageBox = styled(Box)(({ theme, index, path }) => ({
  backgroundImage: `url(${BarberImg})`,
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: '70%',
  [theme.breakpoints.up('md')]: {
    left: '1%',
  },
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}))

export const UITimeBox = styled(Box)(
  ({ theme, index, path, isTimeSelected, ind }) => ({
    backgroundColor: theme.palette.primary.timeBg,
    padding: '14px 17px',
    borderRadius: '10px',
    transition: 'all 0.5s ease',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  }),
)

export const BoxWrapper = styled(Box)(({ theme, index, path }) => ({
  backgroundColor: theme.palette.primary.white,
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  border: `1px solid ${theme.palette.primary.cutBorder}`,
  borderRadius: '10px',
}))
