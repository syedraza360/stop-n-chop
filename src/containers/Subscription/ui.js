import { styled } from '@mui/system'
import { Box, Switch, Tabs, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const UISavingBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.outlineBoxSelect,
  padding: '4px 8px',
  borderRadius: '8px',
  width: '130px',
}))
