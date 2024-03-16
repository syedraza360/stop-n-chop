import React, { useEffect, useRef, useState } from 'react'
import NavigationLayout from '../containers/NavigationLayout/index'

import 'mapbox-gl/dist/mapbox-gl.css'

import ReactMapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl'

import mapboxgl from 'mapbox-gl'
import profileImage from '../assets/images/profileImage.jpg'
import Geocoder from '../containers/GeoCoder/Geocoder'
import { useDispatch, useSelector } from 'react-redux'
import { addUserData, getAllBarbers } from '../store/actions/Home'
import MarkerIcon from '../assets/images/marker.png'
import UIButton from '../components/Button/UIButton'
import { Box, Grid, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Header from '../containers/Header'
import MainHeader from '../containers/Header/MainHeader'
import BarbarImg from '../assets/images/barberImg.svg'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import InitalLoader from '../components/Loader/InitalLoader'
import HomeSlider from '../containers/Home/HomeSlider'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import { ReactComponent as PhoneIcon } from '../assets/images/phoneIcon.svg'
import { ReactComponent as EmailIcon } from '../assets/images/emailIcon.svg'
import { ReactComponent as LocationIcon } from '../assets/images/locationIcon.svg'

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    latitude: 32.46125,
    longitude: -99.7236,
    zoom: 12,
  })

  const [open, setOpen] = useState(true)
  const [isLocation, setIsLocation] = useState(false)
  const [barberData, setBarberData] = useState([])

  // Reducers
  const signinData = useSelector((state) => state?.SignInReducer)
  const barberReducer = useSelector((state) => state?.GetAllBabersReducer?.res)

  const geolocateControlStyle = {}

  const successCallback = (position) => {
    setViewport({
      ...viewport,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })

    // for reverse geo coding
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${position.coords.longitude},${position.coords.latitude}.json?access_token=pk.eyJ1Ijoic3llZC1kYW5pYWwxMTAiLCJhIjoiY2xqa2QwdHJqMHBwbTNsbXIzYzZmZHA3MSJ9.pj8jW5_63f6gi0X8BRIXnQ`

    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((data) => {
        const address = data?.features[0]?.place_name

        const dataObj = {
          address,
        }
        dispatch(addUserData(dataObj))
      })
      .catch((error) => {})
  }

  const errorCallback = (error) => {}

  const action = (
    <>
      <UIButton
        btnType="simple"
        label="Allow"
        onClick={() => {
          navigator.geolocation.watchPosition(successCallback, errorCallback)
          setIsLocation(true)
        }}
        stylecolor="black"
        sx={{ padding: '8px 16px !important' }}
      />
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  const [locationPermission, setLocationPermission] = useState('')

  useEffect(() => {
    const checkLocationPermission = () => {
      const handlePermission = (status) => {
        setLocationPermission(status)
        if (status == 'granted') {
          setIsLocation(true)
        }
      }

      if ('geolocation' in navigator) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then((result) => handlePermission(result.state))
      } else {
        setLocationPermission('unsupported')
      }
    }

    checkLocationPermission()
  }, [])

  useEffect(() => {
    dispatch(getAllBarbers())
  }, [])

  useEffect(() => {
    if (barberReducer?.res?.success) {
      setBarberData(barberReducer.res.data)
    }
  }, [barberReducer?.res?.success, barberReducer?.res?.data])

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
        <NavigationLayout>
          <Grid container sx={{ display: { xs: 'block', md: 'none' } }}>
            <Grid item xs={12}>
              <MainHeader heading="" />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" my={4}>
            <Grid item xs={11}>
              <HomeSlider />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: 'center', lg: 'space-evenly' }}
            mb={4}
            gap={2}
          >
            <Grid item xs={11} lg={2} display="flex" >
              <PhoneIcon />
              <UITypogrpahy title="(347) 506-215" sx={{ pl: 1 }} />
            </Grid>
            <Grid item xs={11} lg={3} display="flex" >
              <LocationIcon />
              <UITypogrpahy
                title="3333 CO Rd 119 #1 Hutto,TX 78634"
                sx={{ pl: 1 }}
              />
            </Grid>
            <Grid item xs={11} lg={2} display="flex" >
              <EmailIcon />
              <UITypogrpahy title="(347) 506-215" sx={{ pl: 1 }} />
            </Grid>
          </Grid>
        </NavigationLayout>
      )}
    </>
  )
}

export default Home
