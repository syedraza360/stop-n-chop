import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const SliderBanner = styled(Box)(({ theme, img }) => ({
  backgroundImage: `url('${img}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '80vh',
//   position: 'relative',
}))
