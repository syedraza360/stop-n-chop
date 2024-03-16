import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const UIStyledLoaderBox = styled(Box)(({ theme, isSelected, ind }) => ({
  width: '100%',
  height: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
