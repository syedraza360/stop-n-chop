import { Button, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { LoadingButton } from '@mui/lab'

export const UIHeadingTypography = styled(Typography)(
  ({ theme, stylecolor, variant }) => ({
    fontWeight: 700,
    color: theme.palette.primary.main,
  }),
)

export const UISubHeadingTypography = styled(Typography)(
  ({ theme, stylecolor, variant }) => ({
    fontWeight: 700,
    color: theme.palette.primary.main,
    fontSize: '22px',
  }),
)
export const UIDescriptionTypography = styled(Typography)(
  ({ theme, stylecolor, variant, isGrey }) => ({
    fontSize: '16px',
    fontWeight: 500,
    color: isGrey ? theme.palette.primary.shade1 : theme.palette.primary.main,
  }),
)
export const UISubDescriptionTypography = styled(Typography)(
  ({ theme, stylecolor, variant }) => ({
    fontSize: '12px',
    fontWeight: 500,
    color: theme.palette.primary.main,
  }),
)
export const UIPolicyTypography = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.primary.main,
}))
