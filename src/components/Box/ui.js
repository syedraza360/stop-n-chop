import { styled } from '@mui/system'
import { Box } from '@mui/material'

export const UIStyledBox = styled(Box)(({ theme, isSelected, ind }) => ({
  backgroundColor: `${theme.palette.secondary.shade5}`,
  borderRadius: '16px',
  transform: isSelected == ind && 'scale(1.1)',
  transition: '0.5s all ease',
}))

export const UIStyledPackageBox = styled(Box)(
  ({ theme, addPackageDetailReducer, item }) => ({
    backgroundColor: `${theme.palette.secondary.shade5}`,
    borderRadius: '16px',

    minHeight: '500px',
  }),
)

export const UIStyledServiceBox = styled(Box)(({ theme, isSelected, ind }) => ({
  backgroundColor: `${theme.palette.secondary.shade5}`,
  borderRadius: '16px',
  transform: isSelected == ind && 'scale(1.05)',
  transition: 'all 0.5s ease',
  border: isSelected === ind && `1px solid ${theme.palette.secondary.main}`,
  width: '95%',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
  },
}))
