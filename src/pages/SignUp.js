import { Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import UIButton from '../components/Button/UIButton'
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg'
import SignUpForm from '../containers/Auth/SignUpForm'
import Header from '../containers/Header'
import { ImageBox } from '../containers/SplashScreen/ui'

const SignUp = () => {
  return (
    <Grid container rowGap={2} px={{ xs: 2, md: 0 }}>
      <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Header heading={'Sign Up'} description={'Welcome'} />
      </Grid>
      <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <ImageBox isWebSplash={false} isSignup={true} />
      </Grid>
      <Grid item xs={12} md={6} mt={{ xs: 5 }}>
        <SignUpForm />
      </Grid>
    </Grid>
  )
}

export default SignUp
