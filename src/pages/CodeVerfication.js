import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import UIButton from '../components/Button/UIButton'
import EmailVerificationOTP from '../containers/Auth/EmailVerificationOTP'
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'

const CodeVerfication = () => {
  return (
    <>
      <Grid container rowGap={2} px={2}>
        <Grid item xs={12}>
          <UIButton btnType="icon" iconPosition="start" icon={<BackIcon />} />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            type="heading"
            title="Code Verification"
            textAlign="center"
          />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            title="We have send you a code to your email"
            textAlign="center"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <EmailVerificationOTP btnText="Verify Code" />
    </>
  )
}

export default CodeVerfication
