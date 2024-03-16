import { styled } from '@mui/system'
import { Box, Switch, Tabs, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const TabBoxWrapper = styled(Box)(({ theme }) => ({
  borderColor: 'divider',
}))
export const UIStyledTabs = styled(Box)(({ theme }) => ({
  justifyContent: { xs: 'center', md: 'flex-start' },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '#C8C8C8',
}))
