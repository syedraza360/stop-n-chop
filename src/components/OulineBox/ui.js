import { styled } from '@mui/system'
import { Box, Switch, Tabs, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const UIOutlineBox = styled(Box)(
  ({ theme, elm, addPackageDetailReducer, item }) => ({
    padding: '16px',
    borderRadius: '16px',
    border: `1px solid ${
      addPackageDetailReducer?.package?.type?._id == elm?._id
        ? theme.palette.primary.outlineBoxSelect
        : theme.palette.primary.shade2
    }`,
    transform:
      addPackageDetailReducer?.package?.type?._id == elm?._id && 'scale(1.1)',
    transition: '0.5s all ease',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.palette.primary.outlineBoxSelect}`,
      backgroundColor: 'rgba(255, 255, 255, 0.1) !important',
    },
  }),
)
