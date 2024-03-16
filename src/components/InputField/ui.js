import { styled } from '@mui/system'
import { Box, Switch, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Link } from 'react-router-dom'
import OTPInput from 'react-otp-input'

export const UIStyledOutlinedField = styled(TextField)(({ theme }) => ({
  border: 'none',
  outline: 'none',
  color: `${theme.palette.primary.main} !important`,
  background: theme.palette.primary.inputBg,
  '& * > fieldset > legend': {
    display: 'none',
  },
  '& fieldset': {
    borderRadius: '16px',
    '&:focus-visible': { border: 'none !important' },
  },

  '& label': {
    fontSize: '1rem',
  },
  '&:hover': {
    '& fieldset': {
      border: `1px solid black !important`,
    },
  },

  '.MuiOutlinedInput-root': {
    fontSize: '1rem',
    fontWeight: 500,
    outline: 'none',
    '> input': {
      padding: '12px',
      color: `${theme.palette.primary.main} !important`,
      WebkitBoxShadow: '0 0 0px 0px white inset',
    },
    '> input::placeholder': {
      color: theme.palette.primary.shade1,
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.primary.inputBorder}`,
    },
    '.MuiButtonBase-root': {
      '& > svg': {
        color: '#595959',
      },
    },
  },
  '.MuiFormHelperText-root': {
    background: 'transparent',
  },

  borderRadius: '16px',
}))

// Country Input
export const CountryListWrapper = styled(Box)(({ theme, error }) => ({
  height: '100%',
  width: '100%',
  '& .form-control': {
    padding: '14.5px 14px 12.5px 58px',
    width: '100%',
    borderRadius: '8px',
    borderColor: error && 'red',
    backgroundColor: theme.palette.primary.inputBg,
    color: theme.palette.primary.main,
    border: theme.palette.primary.inputBorder,

    '&:hover': {
      borderColor: error ? 'red' : theme.palette.primary.main,
    },
    '&:focus': {
      borderColor: error ? 'red' : theme.palette.primary.main,
      boxShadow: 'none',
    },
  },
  '& .special-label': {
    display: 'block',
    left: '10px',
    color: error ? 'red' : theme.palette.secondary.main,
    fontFamily: "'Open Sans', 'sans-serif'",
    fontSize: '0.7rem',
  },
}))

// Date Picker
export const UIStyledDatePicker = styled(DatePicker)(({ theme, error }) => ({
  color: theme.palette.primary.main,
  width: '100%',
  backgroundColor: (theme) => `${theme.palette.primary.white} !important`,
  '& .MuiFormLabel-root': {
    fontSize: '0.9rem',
    color: error ? 'red' : theme.palette.secondary.main,
  },
  '& .MuiInputBase-root': {
    borderRadius: '0.5rem',
    '& > input': {
      padding: '13px',
    },
    '> div > button > svg': {
      fill: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-formControl': {
    backgroundColor: `${theme.palette.primary.white} !important`,
  },
  '& .MuiInputBase-input': {
    color: theme.palette.primary.main,
  },
  borderRadius: '10px',
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'underline',
  color: theme.palette.primary.shade1,
  letterSpacing: '0.3px',
  fontWeight: 500,
  textAlign: 'center',
}))

export const StyledOtp = styled(OTPInput)(({ theme, errorMessage }) => ({
  backgroundColor: 'red',
  border: '1px solid red !important',
  '& * > input': {
    padding: '20px',
    fontSize: '16px',
    borderRadius: '16px',
    borderColor: (theme) =>
      errorMessage.length > 1
        ? theme.palette.indicators.main
        : theme.palette.primary.shade2,
    borderWidth: '1px',
    borderStyle: 'solid',
    '& :focus-visible': {
      outlineColor: (theme) => theme.palette.secondary.main,
      borderColor: (theme) => theme.palette.secondary.main,
    },
  },
}))
