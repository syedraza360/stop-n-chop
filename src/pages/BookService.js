import { Box, Grid, Tab, Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BookingHeader from '../containers/ServiceBook/BookingHeader'
import NavigationLayout from '../containers/NavigationLayout'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import UIButton from '../components/Button/UIButton'
import { UITimeBox } from '../containers/ServiceBook/ui'
import UIDatePicker from '../components/InputField/UIDatePicker'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bookServiceSchema } from '../containers/ServiceBook/schema'
import UITabs from '../components/Tabs/UITabs'
import { useDispatch, useSelector } from 'react-redux'
import { getABarber, getAllSchedule } from '../store/actions/Home'
import { useLocation, useNavigate } from 'react-router-dom'
import Cards from '../containers/Services/Cards'
import UIDivider from '../components/UIDivider'
import moment from 'moment/moment'
import dayjs from 'dayjs'
import {
  addTimeSlots,
  getAllServices,
  getAllServicesByBarberId,
  getAllServicesById,
} from '../store/actions/services'
import BookServiceTabPanel from '../containers/ServiceBook/BookServiceTabPanel'
import { addPackageDetails } from '../store/actions/packages'
import BookingTimeSlots from '../containers/ServiceBook/BookingTimeSlots'
import { resheduleAppointment } from '../store/actions/appointments'
import { DotLoader } from 'react-spinners'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'

const BookService = () => {
  const [date, setDate] = useState(new Date())

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { state } = useLocation()

  const [barberData, setBarberData] = useState()
  const [isSelected, setIsSelected] = useState()
  const [timeSlots, setTimeSlots] = useState([])

  const [services, setServices] = useState([])

  // reducers
  const getABarberReducer = useSelector((state) => state.GetABabersReducer.res)

  const servicesReducer = useSelector((state) => state?.getAllServicesReducer)

  const selectedService = useSelector((state) => state?.AddPackageDetailReducer)

  const getServicesById = useSelector(
    (state) => state.getAllServicesByBarberIdReducer,
  )

  const serviceById = useSelector((state) => state?.GetAllServiceByIdReducer)

  const getSchedules = useSelector((state) => state?.GetAllScheduleReducer)

  const selectedTimeSlot = useSelector((state) => state?.AddTimeSlotsReducer)

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

  var day = new Date()
  var fullDate
  const handleDate = (val) => {
    fullDate = moment(val?.$d).format(`D-MMM-YYYY`)
    day = moment(val?.$d).format('dddd')
    setDate(val?.$d)

    dispatch(getAllSchedule(day))

    const dataObj = {
      day: day,
      date: fullDate,
    }
    dispatch(addTimeSlots(dataObj))
  }

  const handleTimeSlotClick = (item) => {
    day = moment(date).format('dddd')
    fullDate = moment(date).format(`D-MMM-YYYY`)
    const dataObj = {
      time: item,
      day: day,
      date: fullDate,
    }
    dispatch(addTimeSlots(dataObj))
  }

  const handleBasicCut = (item) => {
    setIsSelected(item?._id)
    dispatch(addPackageDetails(item))
  }

  const handleBookingServiceSubmit = () => {
    if (
      selectedTimeSlot.time !== '' &&
      selectedTimeSlot.time != undefined &&
      selectedTimeSlot.day !== '' &&
      Object.keys(selectedService.package).length > 0
    ) {
      if (state?.appointment)
        dispatch(addPackageDetails(selectedService?.package))
      navigate('/payment')
    } else {
      toast.error('Select Service, time and date')
    }
  }

  // get a barber api and service by barber id
  useEffect(() => {
    if (selectedService && selectedService?.package?.barberId)
      dispatch(getABarber(selectedService?.package?.barberId))

    if (state?.barberId) {
      dispatch(getAllServicesByBarberId(state?.barberId))
    }
    if (state?.serviceId) {
      dispatch(getAllServicesById(state?.serviceId))
    }
  }, [selectedService?.type, state?.barberId])

  // get all service
  useEffect(() => {
    dispatch(getAllServices('Basic Cut'))
  }, [])

  // set barber Data in state
  useEffect(() => {
    if (getABarberReducer?.res?.success) {
      setBarberData(getABarberReducer?.res?.data)
    }
  }, [getABarberReducer?.res?.success, getABarberReducer?.res?.data])

  useEffect(() => {
    let day_ = selectedTimeSlot?.day
    let date_ = selectedTimeSlot?.date
    let time_ = selectedTimeSlot?.time

    if (selectedTimeSlot?.time !== '' || selectedTimeSlot?.day !== '') {
      const dataObj = {
        day: day_,
        time: time_,
        date: date_,
      }
      dispatch(getAllSchedule(day_))
      dispatch(addTimeSlots(dataObj))
    } else {
      let formatedDay = moment(day).format('dddd')
      const dataObj = {
        day: formatedDay,
        time: '',
        date: '',
      }
      dispatch(getAllSchedule(formatedDay))
      dispatch(addTimeSlots(dataObj))
    }
  }, [])

  // setting service in state by barber id
  useEffect(() => {
    if (getServicesById?.res?.type) {
      setServices(getServicesById?.res?.res?.data)
    }
  }, [getServicesById?.res?.type, selectedService?.type])

  // setting services in state
  useEffect(() => {
    if (servicesReducer?.type) {
      setServices(servicesReducer?.res?.res?.data)
    }
  }, [servicesReducer?.type])

  useEffect(() => {
    if (serviceById?.res?.res?.success) {
      dispatch(resheduleAppointment(serviceById?.res?.res?.data))
    }
  }, [serviceById?.res?.res?.success, serviceById?.res?.res?.data])

  useEffect(() => {
    if (getSchedules?.res?.res?.success) {
      setTimeSlots(getSchedules?.res?.res?.data[0]?.timeSlots)
    }
  }, [getSchedules?.res?.res?.success, getSchedules?.res?.res?.data])

  console.log('selectedTimeSlot', selectedTimeSlot)
  return (
    <NavigationLayout>
      <Grid container>
        <Grid item xs={12}>
          <BookingHeader />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2} px={{ xs: 2, md: 9 }}>
        <Grid item xs={12} mt={7}>
          <UITypogrpahy
            textAlign={{ xs: 'center', md: 'start' }}
            type="heading"
            title={barberData?.name}
          />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            textAlign={{ xs: 'center', md: 'start' }}
            title="1801 Blake St Ste 100, Denver, CO 80202"
          />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            textAlign={{ xs: 'center', md: 'start' }}
            title={
              barberData?.phoneNumber ? barberData?.phoneNumber : '+134445555'
            }
          />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={12} px={1}>
          <UITypogrpahy title="Day:" />
        </Grid>
        <Grid item xs={12} md={6} px={1}>
          <UIDatePicker
            name="date"
            label=""
            // defaultValue={dayjs(date)}
            defaultValue={dayjs(`${date}`)}
            onChange={handleDate}
          />
        </Grid>
        <Grid item xs={12} px={1}>
          <UITypogrpahy title="Time:" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BookingTimeSlots
            timeSlots={timeSlots}
            getSchedules={getSchedules}
            onClick={handleTimeSlotClick}
            // setIsTimeSelected={setIsTimeSelected}
            // isTimeSelected={isTimeSelected}
          />
        </Grid>

        <Grid
          item
          xs={12}
          mt={2}
          sx={{ display: { xs: 'none', md: 'block' } }}
          px={1}
        >
          <UITypogrpahy
            type="subheading"
            title={
              Object.keys(selectedService?.package).length > 0
                ? 'Selected Service'
                : 'Select Service'
            }
          />
        </Grid>

        {
          // state?.isServiceSelected &&
          Object.keys(selectedService?.package).length > 0 ? (
            <Grid item xs={12} md={6} px={2}>
              <Cards
                heading={selectedService?.package?.category}
                price={`$${selectedService?.package?.amount}`}
              />
            </Grid>
          ) : Object.keys(selectedService?.package).length == 0 ? (
            <Grid item xs={12} mt={2} px={1}>
              <UITabs
                value={value}
                onChange={handleChange}
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                {tabsArr?.map((item, i) => {
                  return (
                    <Tab
                      sx={{
                        color: (theme) =>
                          `${theme.palette.primary.main} !important`,
                      }}
                      label={item.label}
                      onClick={() => {
                        dispatch(getAllServices(item.filter))
                      }}
                      {...a11yProps(i, item.label)}
                    />
                  )
                })}
              </UITabs>

              {servicesReducer?.type == 'loading' ? (
                <Loader />
              ) : (
                <BookServiceTabPanel
                  handleBasicCut={handleBasicCut}
                  isSelected={isSelected}
                  tabsArr={tabsArr}
                  value={value}
                  services={services}
                />
              )}
            </Grid>
          ) : (
            <Box px={1} py={2}>
              <UITypogrpahy title="Nothing to show" />{' '}
            </Box>
          )
        }
        <Grid item xs={12} md={12} mb={8} px={2} mt={3}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <UIButton
                btnType="simple"
                variant="contained"
                label="Next"
                fullWidth
                onClick={handleBookingServiceSubmit}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </NavigationLayout>
  )
}

export default BookService
