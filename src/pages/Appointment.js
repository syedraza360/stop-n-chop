import React, { useEffect, useState } from 'react'
import NavigationLayout from '../containers/NavigationLayout'
import Header from '../containers/Header'
import UIBox from '../components/Box/UIBox'
import { Box, Grid, Typography } from '@mui/material'
import appointmentImage from '../assets/images/profileImage.jpg'
import AppointmentContainer from '../containers/AppointmentContainer'
import UIModal from '../components/Modal/UIModal'
import MainHeader from '../containers/Header/MainHeader'
import WebHeader from '../containers/Header/WebHeader'
import { apiDelete, apiGet } from '../apis/ApiRequest'
import { ApiEndpoints } from '../apis/apiEndpoints'
import { toast } from 'react-toastify'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import UIButton from '../components/Button/UIButton'
import { DotLoader } from 'react-spinners'
import Loader from '../components/Loader'
import moment from 'moment'

const Appointment = () => {
  const [appointments, setAppointments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState('')

  const userId = localStorage.getItem('userId')

  const getUserAppointments = () => {
    setIsLoading(true)
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.getUserAppointments}?userId=${userId}`,
      (res) => {
        setAppointments(res?.data)
        setIsLoading(false)
      },
      (err) => {
        toast.error(err.response?.data?.message)
      },
    )
  }

  const cancelAppointment = (appointmentId) => {
    apiDelete(
      `${ApiEndpoints.root}${ApiEndpoints.cancelAppointment}${appointmentId}?userId=${userId}`,
      (res) => {
        if (res?.success) {
          setModalOpen(false)
          toast.success(res?.message)
          getUserAppointments()
        }
      },
      (err) => {
        toast.error(err.response.data.message)
      },
    )
  }

  useEffect(() => {
    getUserAppointments()
  }, [])

  const createdAt = '2024-02-19T19:56:03.758Z'
  const today = moment() // Get the current date and time
  const createdDate = moment(createdAt) // Convert the createdAt string to a moment object

  // Compare the createdAt time with the current time
  const isAfter = createdDate.isAfter(today)

  return (
    <NavigationLayout>
      <Grid item xs={12} px={2} sx={{ display: { xs: 'block', md: 'none' } }}>
        <MainHeader heading="Appointments" />
      </Grid>
      <Box sx={{ paddingLeft: { md: '75px' }, paddingRight: { md: '60px' } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2, xl: 6 }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
        >
          <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' } }}>
            <WebHeader heading="Appointment" />
          </Grid>
          {isLoading ? (
            <Loader />
          ) : appointments.length > 0 ? (
            appointments?.map((item, i) => {
              return (
                <Grid item xs={11} md={6} lg={4} key={i}>
                  <AppointmentContainer
                    item={item}
                    status={
                      item?.status === 'Accepted'
                        ? 'Accepted'
                        : item?.status === 'Decline'
                        ? 'Declined'
                        : 'Pending'
                    }
                    isAfter={isAfter}
                    onCancelClick={() => {
                      if (item?.status === 'Accepted') {
                        setSelectedId(item?._id)
                        setModalOpen(true)
                      } else {
                        cancelAppointment(item?._id)
                      }
                    }}
                  />
                </Grid>
              )
            })
          ) : (
            <>
              <Grid item xs={12} md={12} px={3}>
                <UITypogrpahy type="heading" title="No Appointmnets to show" />
              </Grid>
            </>
          )}
        </Grid>
        <UIModal
          open={modalOpen}
          setOpen={setModalOpen}
          description="You cannot withdraw your cash because your apoointment has been accepted!"
          onClick={() => cancelAppointment(selectedId)}
          sx={{ width: '35% !important' }}
        ></UIModal>
      </Box>
    </NavigationLayout>
  )
}

export default Appointment
