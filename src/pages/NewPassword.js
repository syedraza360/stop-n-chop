import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import UIButton from '../components/Button/UIButton'
import NewPasswordForm from '../containers/Auth/NewPassword/NewPasswordForm'
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg'
import Header from '../containers/Header'
import { ImageBox } from '../containers/SplashScreen/ui'

const NewPassword = () => {
  return (
    <Grid container rowGap={2} px={{ xs: 2, md: 0 }}>
      <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Header
          heading={'New Password'}
          description={'Your new password must be different from old'}
        />
      </Grid>
      <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <ImageBox isWebSplash={true}  />
      </Grid>
      <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
        <NewPasswordForm />
      </Grid>
    </Grid>
  )
}

export default NewPassword
