import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import pathLocations from './utils/pathLocations'
import { Provider, useSelector } from 'react-redux'
import store from '../src/store'
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer, Zoom } from 'react-toastify'

import { IconButton, ThemeProvider, createTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { appTheme } from './theme'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import EmailVerfication from './pages/EmailVerfication'
import ResetPassword from './pages/ResetPassword'
import NewPassword from './pages/NewPassword'
import SplashScreen from './pages/SplashScreen'
import ProtectedRoute from './pages/ProtectedRoute'

import 'mapbox-gl/dist/mapbox-gl.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { loadScript } from '@paypal/paypal-js'


loadScript({
  'client-id':
    'AeLkSq_XVVyPb9yr7TNUloKe_zOVd_ygk12_J3t230t_EHaVTkiY3H52Zda986QwDkyL9gU3WZG1qCX4',
})
  .then((paypal) => {
    // start to use the PayPal JS SDK script
  })
  .catch((err) => {
    console.error('failed to load the PayPal JS SDK script', err)
  })

function App() {
  const path = pathLocations

  const [mode, setMode] = useState('dark')
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'dark'))
      },
    }),
    [],
  )

  const { dark } = useSelector((state) => state?.DarkModeReducer)
  useEffect(() => {
    if (dark) {
      setMode('dark')
    } else {
      setMode('dark')
    }
  }, [dark])

  const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

  const theme = React.useMemo(() => createTheme(appTheme(mode)), [mode])

  const routesComponent = path.map((item, i) => (
    <Route path={item.path} exact element={item.component} key={i} />
  ))

  const signinData = useSelector((state) => state?.SignInReducer?.res?.res)
  useEffect(() => {
    if (signinData?.success) {
      localStorage.setItem('userId', signinData?.data?._id)
    }
  }, [signinData?.success])

  useEffect(() => {
    localStorage.setItem('dark', true)
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = '#0D0D0D'
  }, [dark])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        transition={Zoom}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode === 'light' ? 'light' : 'dark'}
      />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <PayPalScriptProvider
            options={{
              clientId:
                'AeLkSq_XVVyPb9yr7TNUloKe_zOVd_ygk12_J3t230t_EHaVTkiY3H52Zda986QwDkyL9gU3WZG1qCX4',
              currency: 'USD',
            }}
          >
            <Router>
              <Routes>{routesComponent}</Routes>
            </Router>
          </PayPalScriptProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
