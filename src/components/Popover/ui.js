import { styled } from '@mui/system'
import { Box, Popover, Switch, Tabs, TextField } from '@mui/material'

export const UIStyledPopover = styled(Popover)(({ theme }) => ({
  left: '10px',
  right: '30px',
  width: '95%',
  borderRadius: '20px',
  '> .MuiPaper-root': {
    background: 'transparent',
  },
}))
