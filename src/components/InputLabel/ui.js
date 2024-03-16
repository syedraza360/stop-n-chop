import { styled } from '@mui/system'
import {
  Box,
  InputLabel,
  Switch,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'

export const UIStyledInputLabel = styled(Typography)(({theme}) => ({
  fontSize: '16px',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: '8px',
}))
