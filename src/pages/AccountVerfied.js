import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import crossIcon from '../assets/images/crossIcon.png'
import successBg from '../assets/images/successBg.png'
import UIButton from '../components/Button/UIButton'
import { useNavigate } from 'react-router-dom'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'

const AccountVerfied = ({ handleClose }) => {
  const navigate = useNavigate()
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{ width: '100%', justifyContent: 'flex-end', display: 'flex' }}
          >
            <img
              onClick={handleClose}
              src={crossIcon}
              style={{ marginRight: '20px', marginTop: '20px' }}
              alt="cross-icon"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ height: '60vh' }}
        >
          {/* <ImageBoxContainer passwordupdated={'true'} /> */}
          <img src={successBg} alt="success-bg" />
          <UITypogrpahy title={'Account Verified'} type="heading" />
          <UITypogrpahy
            mt={1}
            title="Congratulations! Your account details have been verified."
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{ height: '20vh', alignItems: 'flex-end' }}
      >
        <Grid item xs={10} md={3}>
          <UIButton
            label="Get Started"
            btnType="simple"
            variant="contained"
            fullWidth
            onClick={() => navigate('/login')}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default AccountVerfied
