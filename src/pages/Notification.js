import React from 'react'
import NavigationLayout from '../containers/NavigationLayout/index'
import { Divider, Grid, Typography } from '@mui/material'
import UIButton from '../components/Button/UIButton'
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg'
import notiImage from '../assets/images/profileImage.jpg'
import NotificationContainer from '../containers/NotificationContainer'
import Header from '../containers/Header'
import MainHeader from '../containers/Header/MainHeader'
import WebHeader from '../containers/Header/WebHeader'

const Notification = () => {
  return (
    <NavigationLayout>
      <Grid container rowGap={2} px={2}>
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MainHeader heading="Notifications" />
        </Grid>

        <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
          <WebHeader heading="Notifications" />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
        >
          {/* map this container to populate notifications */}
          <NotificationContainer />
        </Grid>
      </Grid>
    </NavigationLayout>
  )
}

export default Notification
