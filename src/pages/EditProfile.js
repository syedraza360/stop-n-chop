import React, { useEffect, useState } from 'react'
import ProfileHeader from '../containers/Profile/ProfileHeader'
import EditProfileForm from '../containers/Profile/EditProfileForm'
import { Box, Grid } from '@mui/material'
import HeaderNavigation from '../containers/NavigationLayout/HeaderNavigation'
import profileImg from '../assets/images/profileImage.jpg'
import { UIImage } from '../containers/Profile/ui'
import FileInputButton from '../components/Button/FileInputButton'
import UIDivider from '../components/UIDivider'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, uploadProfileImage } from '../store/actions/Profile'
import { fileUpload, fileUploadImage } from '../apis/ApiRequest'
import { ApiEndpoints } from '../apis/apiEndpoints'
import { toast } from 'react-toastify'

const EditProfile = () => {
  const [profileData, setProfileDate] = useState()

  const [isImageUploading, setIsImageUploading] = useState(false)

  const userData = useSelector((state) => state?.GetUserProfileReducer?.res)
  const uploadImageReducer = useSelector((state) => state?.UploadImageReducer)

  const dispatch = useDispatch()
  const userId = localStorage.getItem('userId')

  const _handleChangeImage = (e) => {
    setIsImageUploading(true)
    if (e.target.files[0]) {
      const dataObj = {
        image: e.target.files[0]?.name,
      }
      fileUpload(
        `${ApiEndpoints.root}${ApiEndpoints.uploadImage}${userId}`,
        e.target.files[0],
      )
        .then((res) => {
          if (res.success) {
            setIsImageUploading(false)
            toast.success(res.message)
            dispatch(uploadProfileImage(res.data))
            dispatch(getUserProfile(userId))
            setProfileDate({ ...profileData, profilePicture: res.data })
          }
        })
        .catch((err) => {})
    }
  }

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [])

  useEffect(() => {
    if (userData?.res?.success) {
      setProfileDate(userData?.res?.data)
    }
  }, [userData?.res?.success])

  return (
    <>
      <Grid container mt={2}>
        <Grid item xs={12} px={2} sx={{ display: { xs: 'block', md: 'none' } }}>
          <ProfileHeader
            isEditProfile={true}
            heading="Edit Picture"
            isBackButton={true}
            _handleChangeImage={_handleChangeImage}
            srcImg={profileData?.profilePicture}
            isImageUploading={isImageUploading}
            isWithoutBg={true}
            isDrawer={false}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
          <HeaderNavigation />
        </Grid>
      </Grid>
      <Grid container px={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid item xs={2}>
          <Box>
            <FileInputButton
              isWithoutBg={true}
              isFileUpload={false}
              data={profileData}
              _handleChangeImage={_handleChangeImage}
              srcImg={profileData?.profilePicture}
              isImageUploading={isImageUploading}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        py={2}
        justifyContent="center"
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Grid item xs={11}>
          <UIDivider />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} px={{ xs: 2, md: 10 }}>
          <EditProfileForm />
        </Grid>
      </Grid>
    </>
  )
}

export default EditProfile
