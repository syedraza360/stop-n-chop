import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import BottomNavigations from './BottomNavigations'
import HeaderNavigation from './HeaderNavigation'
import { useDispatch } from 'react-redux'
import { getUserProfile } from '../../store/actions/Profile'

const NavigationLayout = (props) => {
  const dispatch = useDispatch()

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    dispatch(getUserProfile(userId))
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} display={{ xs: 'block', md: 'none' }}>
        <BottomNavigations>{props.children}</BottomNavigations>
      </Grid>
      <Grid item xs={12} display={{ xs: 'none', md: 'block' }}>
        <HeaderNavigation>{props.children}</HeaderNavigation>
      </Grid>
    </Grid>
  )
}

export default NavigationLayout
