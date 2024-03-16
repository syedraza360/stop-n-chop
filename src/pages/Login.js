import { Grid } from '@mui/material'
import React from 'react'
import LoginForm from '../containers/Auth/LoginForm'
import Header from '../containers/Header'
import { useNavigate } from 'react-router-dom'
import { ImageBox } from '../containers/SplashScreen/ui'
import { AuthBox } from '../containers/Auth/ui'
const Login = () => {
  const navigate = useNavigate()
  return (
    <Grid container rowGap={2} px={{ xs: 2, md: 0 }}>
      <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Header heading={'Sign In'} description={'Welcome Back!'} />
      </Grid>
      <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <ImageBox isWebSplash={true} />
      </Grid>
      <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
        <LoginForm />
      </Grid>
    </Grid>
  )
}

export default Login
