import React, { useEffect } from 'react'
import NavigationLayout from '../containers/NavigationLayout'
import { Box, Grid, Skeleton, Tab } from '@mui/material'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import UIDivider from '../components/UIDivider'
import Cards from '../containers/Services/Cards'
import UIButton from '../components/Button/UIButton'
import Header from '../containers/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import WebHeader from '../containers/Header/WebHeader'
import UITabs from '../components/Tabs/UITabs'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { getAllServices, serviceSelect } from '../store/actions/services'
import ServiceContent from '../containers/Services/ServiceContent'
import { addPackageDetails } from '../store/actions/packages'
import MainHeader from '../containers/Header/MainHeader'
import { DotLoader } from 'react-spinners'
import Loader from '../components/Loader'

const Services = () => {
  const navigate = useNavigate()

  const selectedService = useSelector((state) => state?.AddPackageDetailReducer)
  const servicesReducer = useSelector((state) => state?.getAllServicesReducer)

  const dispatch = useDispatch()

  const [isSelected, setIsSelected] = useState()

  const [services, setServices] = useState([])

  // #region tabs

  const tabsArr = [
    {
      label: 'Basic Cut',
      tabName: 'basicCut',
      filter: 'Basic Cut',
    },
    {
      label: 'Basic Cut +',
      tabName: 'basicPlus',
      filter: 'Basic Plus',
    },
    {
      label: 'Premium',
      tabName: 'premium',
      filter: 'Premium',
    },
  ]

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  //   #endregion

  const handleBasicCut = (item) => {
    setIsSelected(item?._id)
    dispatch(addPackageDetails(item))
  }

  useEffect(() => {
    dispatch(getAllServices('Basic Cut'))
  }, [])

  useEffect(() => {
    if (servicesReducer?.type) {
      setServices(servicesReducer?.res?.res?.data)
    }
  }, [servicesReducer?.type])

  useEffect(() => {
    if (selectedService && selectedService?.package)
      setIsSelected(selectedService?.package?._id)
  }, [])

  return (
    <NavigationLayout>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} px={2}>
        <MainHeader
          heading="Services"
          description="Enter your payment details by continuing you agree to our terms"
        />
      </Box>
      <Box sx={{ paddingLeft: { md: '75px' }, paddingRight: { md: '10px' } }}>
        <Grid container gap={1} sx={{ display: { xs: 'none', md: 'block' } }}>
          <WebHeader
            heading="Services"
            description="Enter your payment details by continuing you agree to our terms"
            isDivider={false}
          />
        </Grid>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} mt={{ xs: 5, md: 0 }}>
            <UITabs value={value} onChange={handleChange}>
              {tabsArr?.length > 0 &&
                tabsArr?.map((item, i) => {
                  return (
                    <Tab
                      sx={{
                        color: (theme) =>
                          `${theme.palette.primary.main} !important`,
                        transition: 'all 0.2s ease',
                        borderBottom: (theme) =>
                          value === i &&
                          `3px solid ${theme.palette.primary.main}`,
                      }}
                      label={item.label}
                      onClick={() => {
                        setValue(i)
                        dispatch(getAllServices(item.filter))
                      }}
                      {...a11yProps(i)}
                    />
                  )
                })}
            </UITabs>

            {servicesReducer?.type == 'loading' ? (
              <Loader />
            ) : (
              <ServiceContent
                handleBasicCut={handleBasicCut}
                isSelected={isSelected}
                tabsArr={tabsArr}
                value={value}
                services={services}
              />
            )}
          </Grid>
        </Grid>
        <Grid container mt={4} mb={10} px={3} spacing={2}>
          <Grid item xs={12} md={2}>
            <UIButton
              btnType="simple"
              variant="outlined"
              label="One time payment"
              fullWidth
              disabled={services?.length === 0 ? true : false}
              onClick={() => {
                if (selectedService?.package)
                  navigate('/book-service', {
                    state: { isServiceSelected: true },
                  })
                else {
                  toast.error('Please select any service')
                }
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <UIButton
              btnType="simple"
              variant="contained"
              label="Subscribe"
              fullWidth
              disabled={services?.length === 0 ? true : false}
              onClick={() => {
                if (selectedService?.package) navigate('/packages')
                else {
                  toast.error('Please select any service')
                }
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </NavigationLayout>
  )
}

export default Services
