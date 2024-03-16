import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const BarberImage = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  height: '60px',
  width: '60px',
  borderRadius: '18px',
}))
export const UIStyledStatusBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  backgroundColor: theme.palette.secondary.main,
  paddingTop: '16px',
  paddingBottom: '16px',
}))
