import React, { useEffect, useState } from 'react'
import ProfileHeader from '../containers/Profile/ProfileHeader'
import UIButton from '../components/Button/UIButton'
import { Box, Grid, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeToken } from '../apis/Auth'
import { getUserProfile } from '../store/actions/Profile'
import UINavigationButton from '../components/Button/UINavigationButton'
import { UIProfileBox } from '../containers/NavigationLayout/ui'

const Profile = ({ isBackButton = true, isDrawer }) => {
  const userId = localStorage.getItem('userId')

  const navigate = useNavigate()
  const userData = useSelector((state) => state?.GetUserProfileReducer?.res)
  const uploadImageReducer = useSelector((state) => state?.UploadImageReducer)

  const [data, setData] = useState({})

  const dispatch = useDispatch()

  const handleSignOut = () => {
    removeToken()
    window.location.href = '/login'
  }

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [userData?.res?.success])

  useEffect(() => {
    if (userData?.res?.success) {
      setData(userData?.res?.data)
    }
  }, [userData?.res?.success, userData?.res?.data])

  return (
    <UIProfileBox>
      <Grid container>
        <Grid item xs={12} px={2}>
          <ProfileHeader
            heading={data?.name}
            email={data?.email}
            number={data?.phoneNumber}
            isBackButton={isBackButton}
            isDrawer={true}
          />
        </Grid>
      </Grid>
      <Box
        height={'70%'}
        sx={{ backgroundColor: '#0D0D0D' }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Grid container justifyContent="center" p={2} spacing={2}>
          <Grid item xs={12} md={12}>
            <UINavigationButton
              label="Edit Profile"
              onClick={() => navigate('/edit-profile')}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <UINavigationButton
              label="Terms & Conditions"
              onClick={() => {
                navigate('/terms-and-condition')
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <UINavigationButton
              label="Privacy Policy"
              onClick={() => navigate('/privacy-and-policy')}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <UINavigationButton
              label="Subscribed Package"
              onClick={() => navigate('/subscribed-package')}
            />
          </Grid>
        </Grid>
        <Grid
          container
          p={4}
          alignItems="flex-end"
          justifyContent="center"
          sx={{ height: '22vh' }}
        >
          <Grid item xs={12} md={12}>
            <UIButton
              btnType="simple"
              variant="contained"
              label="Sign Out"
              fullWidth
              onClick={() => {
                handleSignOut()
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </UIProfileBox>
  )
}

export default Profile
