import React, { useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import FileInputButton from '../components/Button/FileInputButton'
import UIButton from '../components/Button/UIButton'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import profileImg from '../assets/images/profileImage.jpg'
import { fileUpload } from '../apis/ApiRequest'
import { ApiEndpoints } from '../apis/apiEndpoints'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { uploadProfileImage } from '../store/actions/Profile'
import { useNavigate } from 'react-router-dom'

const AddProfile = () => {
  const [profileData, setProfileDate] = useState({
    image: '',
  })

  const navigate = useNavigate()

  const [isImageUploading, setIsImageUploading] = useState(false)

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
          }
        })
        .catch((err) => {
          toast.error('Something went wrong')
        })
      setProfileDate({ ...profileData, image: e.target.files[0] })
    }
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        mt={10}
      >
        <Grid item xs={3} md={1}>
          <Box>
            <FileInputButton
              isWithoutBg={true}
              isFileUpload={false}
              data={profileData}
              _handleChangeImage={_handleChangeImage}
              srcImg={uploadImageReducer.profilePicture}
              isImageUploading={isImageUploading}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container>
        <Grid item xs={12} md={12} mt={3}>
          <UITypogrpahy
            title="Add Profile Photo"
            type="heading"
            sx={{ textAlign: 'center' }}
          />
          <UITypogrpahy
            mt={1}
            title="Add a profile photo so that your friends know it's you"
            sx={{ textAlign: 'center' }}
          />
        </Grid>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="flex-end"
        container
        sx={{ height: { xs: '65vh', md: '50vh' } }}
      >
        <Grid
          item
          xs={10}
          md={3}
          sx={{
            width: '100%',
            justifySelf: 'end',
          }}
        >
          <UIButton
            label="Next"
            btnType="simple"
            variant="contained"
            fullWidth
            onClick={() => navigate()}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default AddProfile
