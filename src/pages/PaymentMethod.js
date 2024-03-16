import React, { useEffect, useState } from 'react'
import NavigationLayout from '../containers/NavigationLayout'
import { Box, CircularProgress, Grid } from '@mui/material'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import UIDivider from '../components/UIDivider'
import Paypal from '../assets/images/paypal.png'
import Visa from '../assets/images/visa.png'
import Master from '../assets/images/masterCard.png'
import PaymentCard from '../assets/images/payment1.png'
import Amex from '../assets/images/amex.png'
import UITextField from '../components/InputField/UITextField'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import PaymentForm from '../containers/Services/PaymentForm'
import PaymentDetail from '../containers/Services/PaymentDetail'
import Header from '../containers/Header'
import UIButton from '../components/Button/UIButton'
import { PaymentBox } from '../containers/Payment/ui'
import { useDispatch, useSelector } from 'react-redux'
import { createBooking } from '../store/actions/services'
import UIModal from '../components/Modal/UIModal'
import UIModalSuccess from '../components/Modal/UIModalSuccess'
import { useLocation, useNavigate } from 'react-router-dom'
import { apiPost, apiPut } from '../apis/ApiRequest'
import { ApiEndpoints } from '../apis/apiEndpoints'
import { toast } from 'react-toastify'
import UIInputLabel from '../components/InputLabel'
import UIDatePicker from '../components/InputField/UIDatePicker'
import moment from 'moment'
import { UIStyledOutlinedField } from '../components/InputField/ui'
import { LoadingButton } from '@mui/lab'
// import { paymentSchema } from "./schema";

const PaymentMethod = () => {
  const paymentCardImg = [Paypal, Visa, Master, PaymentCard, Amex]

  const addPackageDetailReducer = useSelector(
    (state) => state?.AddPackageDetailReducer,
  )
  const selectedTimeSlot = useSelector((state) => state?.AddTimeSlotsReducer)
  const getUserData = useSelector((state) => state?.GetUserProfileReducer?.res)

  const [cardPayment, setCardPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiryData: '',
    cvv: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { state } = useLocation()

  const [open, setOpen] = useState(false)

  const userId = localStorage.getItem('userId')

  const handleAddPackageDetails = () => {
    const packgeDataObj = {
      packageId: addPackageDetailReducer?.package?._id,
      amount: addPackageDetailReducer?.package?.type?.discountedPrice,
    }

    apiPut(
      `${ApiEndpoints.root}${ApiEndpoints.addPackage}?userId=${userId}`,
      packgeDataObj,
      (res) => {
        toast.success(res.message)
        setOpen(true)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      },
    )
  }

  const handleAddService = () => {
    const dataObj = {
      userId: userId,
      barberId: addPackageDetailReducer?.package?.barberId,
      serviceId: addPackageDetailReducer?.package?._id,
      total: addPackageDetailReducer?.package?.type?.discountedPrice,
      bookingTimeslot: selectedTimeSlot.time,
      date: selectedTimeSlot.date,
      day: selectedTimeSlot.day,
    }
    apiPost(
      `${ApiEndpoints.root}${ApiEndpoints.createBooking}`,
      dataObj,
      (res) => {
        toast.success(res?.message)
        setIsLoading(false)
        setOpen(true)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      },
    )
  }

  const handleCreateBooking = () => {
    var amount = 0
    if (getUserData?.res?.data?.remainingSubscribedAmount != 0) {
      if (
        getUserData?.res?.data?.remainingSubscribedAmount >
        addPackageDetailReducer?.package?.amount
      ) {
        amount = 0
      } else {
        amount =
          addPackageDetailReducer?.package?.amount -
          getUserData?.res?.data?.remainingSubscribedAmount
      }
    } else {
      amount = addPackageDetailReducer?.package?.amount
    }

    const paymentData = {
      userId: userId,
      amount: state?.isPackage
        ? addPackageDetailReducer?.package?.type?.amount
        : amount,
      name: cardPayment.cardName,
      number: cardPayment.cardNumber,
      expiry: cardPayment.expiryData,
      security_code: cardPayment.cvv,
      phoneNumber: getUserData.res.data.phoneNumber,
      email: getUserData?.res?.data?.email,
    }

    if (amount === 0) {
      if (state?.isPackage) {
        handleAddPackageDetails()
      } else {
        handleAddService()
      }
    } else {
      if (
        cardPayment.cardName !== '' &&
        cardPayment.cardNumber !== '' &&
        cardPayment.cvv &&
        cardPayment.expiryData !== ''
      ) {
        setIsLoading(true)
        apiPost(
          `${ApiEndpoints.root}${ApiEndpoints.payBooking}`,
          paymentData,
          (res) => {
            if (res.success) {
              setIsLoading(false)
              if (state?.isPackage) {
                handleAddPackageDetails()
              } else {
                handleAddService()
              }
            } else {
              toast.error('Something went wrong')
            }
          },
          (err) => {
            console.log('err', err)
            toast.error(err?.response?.data?.message)
            setIsLoading(false)
          },
        )
      } else {
        toast.error('Fill all fields')
      }
    }
  }

  const handleDate = (val) => {
    const x = moment(val.$d).format('GGGG-MM')
    setCardPayment({ ...cardPayment, expiryData: x })
  }

  const handleInputChange = (e) => {
    // if (e.target.name == 'cardNumber' && e.target.value < 17) {
    //   setCardPayment({ ...cardPayment, [e.target.name]: e.target.value })
    // }

    setCardPayment({ ...cardPayment, [e.target.name]: e.target.value })
  }

  console.log('selectedTimeSlot', selectedTimeSlot)

  return (
    <NavigationLayout>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} px={2}>
        <Header
          heading="Add Payment Methods"
          description="Enter your payment details by continuing you agree to our terms"
        />
      </Box>
      <PaymentBox>
        <Grid container gap={1} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid item xs={12}>
            <UITypogrpahy type="heading" title="Add Payment Method" />
          </Grid>
          <Grid item xs={12}>
            <UITypogrpahy title="Enter your payment details by continuing you agree to our terms" />
          </Grid>
          <Grid item xs={12} mt={2}>
            <UIDivider />
          </Grid>
        </Grid>
        <Grid container mt={3} columnSpacing={9} justifyContent="space-between">
          <Grid item xs={12} md={6}>
            <Grid container justifyContent={{ xs: 'center', md: 'flex-start' }}>
              {paymentCardImg.map((item) => (
                <Grid item xs={2.3} md={2}>
                  <img src={item} alt="paypal" height={50} />
                </Grid>
              ))}
            </Grid>
            <form>
              <Grid container rowSpacing={2} columnSpacing={2} my={2}>
                {/* {fieldArr?.map((item, i) => {
                  return (
                   
                  )
                })} */}
                <Grid item xs={12}>
                  <UIInputLabel label={'Name'} />
                  <UIStyledOutlinedField
                    variant="outlined"
                    placeholder={'Card Name'}
                    // control={control}
                    name={'cardName'}
                    fullWidth
                    // errorMessage={item.errorMessage}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <UIInputLabel label={'Card Number'} />
                  <UIStyledOutlinedField
                    variant="outlined"
                    placeholder={'Card Number'}
                    // control={control}
                    name={'cardNumber'}
                    fullWidth
                    error={cardPayment.cardNumber.length > 16}
                    type="number"
                    // errorMessage={item.errorMessage}
                    onChange={handleInputChange}
                  />
                  <UIInputLabel
                    sx={{
                      fontSize: '12px',
                      pt: 1,
                      pl: 1,
                      color: (theme) => theme.palette.indicators.main,
                    }}
                    label={
                      cardPayment.cardNumber.length > 16 &&
                      'Invalid Card Number'
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <UIInputLabel label="Expiry Date" />

                  <UIDatePicker
                    label={''}
                    views={['year', 'month']}
                    placeholder="YYYY-MM"
                    onChange={handleDate}
                  />
                </Grid>
                <Grid item xs={6}>
                  <UIInputLabel label="CVV" />
                  <UIStyledOutlinedField
                    variant="outlined"
                    placeholder="CVV"
                    // control={control}
                    error={cardPayment.cvv.length > 3 && true}
                    name="cvv"
                    fullWidth
                    // errorMessage={errors?.cvc?.message}
                    onChange={handleInputChange}
                  />
                  <UIInputLabel
                    sx={{
                      fontSize: '12px',
                      pt: 1,
                      pl: 1,
                      color: (theme) => theme.palette.indicators.main,
                    }}
                    label={
                      cardPayment.cvv.length > 3 &&
                      'Invalid CVV'
                    }
                  />
                </Grid>
              </Grid>
            </form>
            <Grid
              item
              md={4}
              mt={4}
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              {isLoading ? (
                <CircularProgress sx={{ color: '#FFBE59' }} />
              ) : (
                <UIButton
                  btnType="simple"
                  variant="contained"
                  label="Pay"
                  fullWidth
                  onClick={handleCreateBooking}
                />
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} my={4}>
            <PaymentDetail />
            <Grid
              container
              sx={{ display: { xs: 'block', md: 'none' } }}
              px={{ xs: 2, md: 0 }}
            >
              <Grid item xs={12} mt={8} mb={{ xs: 6, md: 0 }}>
                {isLoading ? (
                  <CircularProgress sx={{ color: '#FFBE59' }} />
                ) : (
                  <UIButton
                    btnType="simple"
                    variant="contained"
                    label="Pay"
                    fullWidth
                    onClick={handleCreateBooking}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <UIModalSuccess
          open={open}
          setOpen={setOpen}
          heading={
            state?.isPackage
              ? 'Package Subscribed Successfully'
              : 'Appointment Confirmed'
          }
          description={
            state?.isPackage
              ? 'Subscription Package Added Successfully'
              : 'Appointment confirmation has been sent to your email'
          }
          onClick={() => {
            setOpen(false)
            navigate('/home')
          }}
        />
      </PaymentBox>
    </NavigationLayout>
  )
}

export default PaymentMethod
