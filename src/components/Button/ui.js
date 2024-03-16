import { Avatar, Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { LoadingButton } from '@mui/lab'

const getBackgroundColor = (variant, stylecolor, theme) => {
  if (variant === 'contained') return theme.palette.secondary.main
  if (stylecolor == 'black') return theme.palette.primary.blackBtn
  if (variant === 'outlined') return 'transparent'
  return 'transparent'
}

const getTextColor = (variant, stylecolor, theme) => {
  if (variant === 'contained') return theme.palette.primary.black
  if (stylecolor == 'black') return 'white'
  if (variant == 'outlined') return theme.palette.secondary.main
  return theme.palette.primary.black
}

const getHoverBackgroundColor = (variant, stylecolor, theme) => {
  if (variant == 'contained') return theme.palette.primary.main
  if (stylecolor == 'black') return theme.palette.primary.black
  if (variant == 'outlined') return 'transparent'
  return 'transparent'
}

const getHoverTextColor = (variant, theme, stylecolor) => {
  if (variant == 'outlined') return theme.palette.primary.main
  if (variant === 'contained') return theme.palette.primary.white
  if (stylecolor === 'black') return theme.palette.secondary.white
  return theme.palette.primary.simpleBtn
}

export const UIStyledButton = styled(Button)(
  ({ theme, stylecolor, variant, isHover = true }) => {
    return {
      outline: 'none',
      boxShadow: 'none',
      fontSize: '16px',
      minWidth: 'fit-content',
      textTransform: 'capitalize',
      height: '56px',
      padding: '16px',
      fontWeight: 700,
      backgroundColor: getBackgroundColor(variant, stylecolor, theme),
      color: getTextColor(variant, stylecolor, theme),
      border:
        variant == 'outlined'
          ? `1px solid ${theme.palette.secondary.main}`
          : 'none',
      borderRadius: '16px',
      '&:hover': isHover
        ? {
            boxShadow: 'none',
            backgroundColor: getHoverBackgroundColor(
              variant,
              stylecolor,
              theme,
            ),
            color: getHoverTextColor(variant, theme, stylecolor),
            border:
              variant == 'outlined'
                ? `1px solid ${theme.palette.primary.main}`
                : 'none',
          }
        : {
            backgroundColor:
              variant == 'contained'
                ? theme.palette.secondary.main
                : 'transparent !important',
            color:
              variant == 'contained'
                ? theme.palette.primary.white
                : theme.palette.secondary.main,
            border:
              variant == 'outlined'
                ? `1px solid ${theme.palette.secondary.main}`
                : 'none',
          },
    }
  },
)

// White Button
export const UIStyledWhiteButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#fff',
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  padding: '0.6em 2em',
  fontWeight: 700,
  '&:hover': {
    backgroundColor: '#fff',
  },
}))

// Tab Button
export const UIStyledTabButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.8rem',
  marginRight: '1em',
  textTransform: 'capitalize',
}))

export const UIStyledTabIcon = styled('img')({
  width: 22,
  height: 26,
  objectFit: 'contain',
  marginRight: '0.7em',
})

export const UIStyledLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}))

export const UIStyledActiveLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export const StyleIconButtonWrapper = styled(Button)(() => ({
  boxShadow: 'none !important',
  backgroundColor: 'transparent',
  width: 'fit-content',
  padding: 0,
  minWidth: 0,
  '&:hover': {
    boxShadow: 'none !important',
    backgroundColor: 'transparent',
  },
}))

export const Input = styled('input')({
  display: 'none',
})

export const UIStyledInputButton = styled(Button)(({ theme, data }) => ({
  width: '100%',
  border: '0px solid grey',
  borderRadius: '50%',
  '& :hover::after': {
    opacity: 0.75,
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    opacity: 1,
    // backgroundImage: `url('${data}')`,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },

  '&:hover::after': {
    opacity: '0.65 !important',
  },
  '&:hover': {
    background: 'transparent',
    opacity: '1 !important',
    '& > :first-child': {
      zIndex: 1,
    },
  },
  '& > span:focus-visible': {
    outline: 'transparent',
  },
}))

export const UILoadingBox = styled(Box)(({ theme, data }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 100,
}))
export const UIFileImg = styled('img')(({ theme, data }) => ({
  objectFit: 'cover',
  borderRadius: '50%',
  height: 100,
  width: 100,
}))
export const FileAvatar = styled(Avatar)(({ theme, data }) => ({
  height: 100,
  width: 100,
}))
export const UIBoxInput = styled(Box)(({ theme, data }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  right: 10,
}))
export const UIFileMainBox = styled(Box)(({ theme, data }) => ({
  position: 'relative',
  height: 100,
  width: 100,
}))
