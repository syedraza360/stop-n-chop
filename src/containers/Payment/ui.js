import { Box } from '@mui/material'
import { styled } from '@mui/system'

export const PaymentBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 10,
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: '75px',
    paddingRight: '60px',
    marginTop: 30,
  },
}))
