import { styled } from '@mui/system'
import { Box, Drawer, Switch, Tabs, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import MuiAppBar from '@mui/material/AppBar'

export const UIListItemButton = styled(Box)(({ theme, index, path }) => ({
  color:
    window.location.pathname === path
      ? theme.palette.primary.main
      : theme.palette.primary.shade1,
  padding: '0px 40px',

  '&:hover': {
    cursor: 'pointer',
  },
  '& > div > span': {
    fontWeight: window.location.pathname === path ? 700 : 500,
  },
}))

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  paddingBottom: '0px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}))

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  display: 'flex',
  justifyContent: 'flex-end',
  background: theme.palette.primary.profileSidebar,
}))
export const MainDrawer = styled(Drawer)(({ theme, drawerWidth, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
  visibility: !open && 'hidden',
  '& .css-17obtpd': {
    backgroundColor: theme.palette.primary.profileSidebar,
  },
}))
export const UIProfileBox = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.profileSidebar,
  height: '100%',
}))
