import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const UIImageBox = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  height: '100px',
  width: '100px',
  objectFit: 'cover',
}))
export const UIImageBoxWeb = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  height: '60px',
  width: '60px',
  objectFit: 'cover',
}))
