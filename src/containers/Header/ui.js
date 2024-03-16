import { styled } from '@mui/system'
import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'

export const UIWebHeaderHeadingTypography = styled(Typography)(
  ({ theme, }) => ({
    fontWeight: 700,
    color: theme.palette.primary.main,
  }),
)