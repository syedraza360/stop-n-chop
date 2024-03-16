import React, { useEffect, useState } from 'react'
import NavigationLayout from '../containers/NavigationLayout/index'
import { Grid, Typography } from '@mui/material'
import SplashImage from '../assets/images/slashScreen.png'
import SplashContainer from '../containers/SplashScreen/index'
import { ImageBox, ImageWrapper } from '../containers/SplashScreen/ui'
import UIButton from '../components/Button/UIButton'
import { useNavigate } from 'react-router-dom'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import InitalLoader from '../components/Loader/InitalLoader'

const SplashScreen = () => {
  const navigate = useNavigate()

  const [isInitialLoading, setIsInitialLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsInitialLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isInitialLoading ? (
        <InitalLoader />
      ) : (
        <Grid container alignItems="center">
          <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
            <SplashContainer />
          </Grid>
          <Grid item xs={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ImageBox isWebSplash={true} />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: { xs: 'none', md: 'block' }, height: '100%' }}
          >
            <Grid container px={{ xs: 6, md: 12 }} py={{ xs: 3, md: 2 }}>
              <Grid item xs={12}>
                <UITypogrpahy type="heading" title="Welcome" />
              </Grid>
              <Grid item xs={12}>
                <UITypogrpahy type="heading" Ftitle="to Stop-N-Chop!" />
              </Grid>
              <Grid item xs={12} mt={1}>
                <UITypogrpahy
                  title="  A social platform to connect with your favorite service
                  providers or your favorite customers."
                />
              </Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              mt={{ xs: 5, md: 8 }}
              pl={12}
              rowGap={3}
            >
              <Grid item xs={9} md={6} sx={{ width: '100%' }}>
                <UIButton
                  label={`Member Login`}
                  btnType="simple"
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/login')}
                />
              </Grid>

              <Grid item xs={9} md={6} sx={{ width: '100%' }}>
                <UIButton
                  label="Book Now"
                  btnType="simple"
                  fullWidth
                  stylecolor="black"
                  onClick={() => {
                    navigate('/sign-up')
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default SplashScreen
