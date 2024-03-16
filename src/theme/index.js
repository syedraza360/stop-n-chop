import { createTheme } from '@mui/material'

export const appTheme = (mode = true) => ({
  palette: {
    primary: {
      main: mode == 'dark' ? '#ffff' : '#0D0D0D',
      shade1: '#595959',
      shade2: '#C8C8C8',
      white: mode == 'dark' ? '#1A1A1A' : '#ffffff',
      dividerColor: mode == 'dark' ? 'white' : '#A4A4A4',
      tabDivider: mode == 'dark' ? 'white' : '#C8C8C8',
      black: '#0D0D0D',
      profileSidebar: mode === 'dark' ? '#0D0D0D' : 'white',
      inputBorder:
        mode === 'dark' ? '0px solid transparent' : '1px solid #C8C8C8',
      inputBg: mode == 'dark' && '#1A1A1A',
      cutBorder: mode !== 'dark' && '#C8C8C8',
      timeBg: mode === 'dark' ? '#1A1A1A' : '#C8C8C8',
      outlineBoxSelect: mode === 'dark' ? '#FFBE59' : '#0D0D0D',
      inputBg2: mode === 'dark' ? '#1A1A1A' : 'transparent',
      simpleBtn: mode === 'dark' ? 'white ' : '#0D0D0D',
      blackBtn: '#1A1A1A',
    },
    secondary: {
      main: '#FFBE59',
      shade1: '#6F6F6F',
      shade2: '#939393',
      shade3: '#B7B7B7',
      shade4: '#F2F5F7',
      shade5: mode == 'dark' ? '#1A1A1A' : '#F8F8F8',
      white: '#ffff',
    },
    indicators: {
      main: '#F14336',
      primary: '#7ED957',
      secondary: '#FFBD59',
    },
    bg: {
      main: '#F3F5F7',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "'Urbanist', 'sans-serif'",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { backgroundColor: '#F3F5F7' } },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': { borderColor: '#C8C8C8' },
          },
        },
      },
    },
    MuiIconButton: { defaultProps: { disableRipple: true } },
  },
})
