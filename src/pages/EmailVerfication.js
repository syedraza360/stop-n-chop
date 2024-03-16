import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import UIButton from '../components/Button/UIButton'
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg'
import EmailVerificationOTP from '../containers/Auth/EmailVerificationOTP'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import { ImageBox } from '../containers/SplashScreen/ui'
import Header from '../containers/Header'

const EmailVerfication = () => {
  return (
    <>
      <Grid container rowGap={2} px={{ xs: 2, md: 0 }}>
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Header
            heading={'Email Verification'}
            description={'We have sent your verification code to email'}
          />
        </Grid>
        <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ImageBox isWebSplash={true} />
        </Grid>
        <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
          <EmailVerificationOTP btnText="Verify" />
        </Grid>
      </Grid>
    </>
  )
}
export default EmailVerfication
