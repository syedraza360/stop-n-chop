import { Box, Divider, Grid, Tab, Typography } from '@mui/material'
import React, { useState } from 'react'
import UIButton from '../components/Button/UIButton'
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg'
import UITabs from '../components/Tabs/UITabs'
import EmailTab from '../containers/Auth/ResetPassword/EmailTab'
import PhoneTab from '../containers/Auth/ResetPassword/PhoneTab'
import { StyledLink } from '../components/InputField/ui'
import Header from '../containers/Header'
import { ImageBox } from '../containers/SplashScreen/ui'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import UIDivider from '../components/UIDivider'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 3, md: 0 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const ResetPassword = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Grid container rowGap={2} px={{ xs: 2, md: 0 }}>
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Header
            heading="Reset Password"
            description="Enter the email or phone number"
          />
        </Grid>
        <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ImageBox isWebSplash={true} />
        </Grid>
        <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  margin: 'auto',
                  pl: { md: 15 },
                  paddingRight: { md: 10 },
                  height: { md: '100vh' },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Grid container sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Grid md={8}>
                      <UITypogrpahy type="heading" title="Reset Password" />
                      <UITypogrpahy title="Enter the email or phone number" />
                    </Grid>
                  </Grid>
                  <Grid container mt={{ xs: 0, md: 3 }}>
                    <Grid item xs={12} md={8}>
                      <UITabs
                        onChange={handleChange}
                        value={value}
                        centered={true}
                      >
                        <Tab
                          label="Email Address"
                          {...a11yProps(0)}
                          sx={{
                            color: (theme) =>
                              `${theme.palette.primary.main} !important`,
                            borderBottom: (theme) =>
                              value === 0 &&
                              `3px solid ${theme.palette.primary.main}`,
                          }}
                        />
                        <Tab
                          label="Phone Number"
                          {...a11yProps(1)}
                          sx={{
                            color: (theme) =>
                              `${theme.palette.primary.main} !important`,
                            borderBottom: (theme) =>
                              value === 1 &&
                              `3px solid ${theme.palette.primary.main}`,
                          }}
                          disabled
                        />
                      </UITabs>
                      <TabPanel value={value} index={0}>
                        <EmailTab />
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <PhoneTab />
                      </TabPanel>
                    </Grid>
                  </Grid>
                  <Grid container mt={{ md: 3 }}>
                    <Grid item xs={12}>
                      <Typography
                        textAlign={{ xs: 'center', md: 'start' }}
                        sx={{ color: (theme) => theme.palette.primary.main }}
                      >
                        Didn’t receive it? <StyledLink>Resend link</StyledLink>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ResetPassword
