import React, { useEffect, useState } from 'react'
import NavigationLayout from '../containers/NavigationLayout'
import { Box, Grid } from '@mui/material'
import MainHeader from '../containers/Header/MainHeader'
import WebHeader from '../containers/Header/WebHeader'
import UIDivider from '../components/UIDivider'
import SubscribedCard from '../containers/SubscribedPackages/SubscribedCard'
import { useSelector } from 'react-redux'
import { apiGet } from '../apis/ApiRequest'
import { ApiEndpoints } from '../apis/apiEndpoints'

const SubscribedPackage = () => {
  const userData = useSelector((state) => state?.GetUserProfileReducer?.res)

  const [subsPackage, setSubsPackage] = useState({
    type: '',
    category: '',
    amount: '',
    remainingAmount: '',
  })

  const getAPackage = () => {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.specificPackage}${userData?.res?.data?.subscribed_package_id}`,
      (res) => {
        setSubsPackage({
          ...subsPackage,
          amount: res.data.amount,
          category: res.data.category,
          type: res.data.type,
        })
      },
      (err) => {
        console.log('err', err)
      },
    )
  }

  useEffect(() => {
    if (userData?.res?.success) {
      getAPackage()
      setSubsPackage({
        ...subsPackage,
        remainingAmount: userData?.res?.data?.remainingSubscribedAmount,
      })
    }
  }, [userData?.res?.success])

  return (
    <NavigationLayout>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} px={2}>
        <MainHeader heading="Services" description="Your subsribed packages" />
      </Box>
      <Box sx={{ paddingLeft: { md: '75px' }, paddingRight: { md: '10px' } }}>
        <Grid container gap={1} sx={{ display: { xs: 'none', md: 'block' } }}>
          <WebHeader
            heading="Subscribed Packages"
            description="Your subsribed packages"
            isDivider={false}
          />
          <UIDivider />
        </Grid>
      </Box>
      <Grid container mt={3} sx={{ paddingLeft: { md: '75px' } }}>
        <Grid item xs={4}>
          <SubscribedCard
            type={subsPackage.type}
            category={subsPackage.category}
            amount={subsPackage.amount}
            remainingAmount={subsPackage.remainingAmount}
          />
        </Grid>
      </Grid>
    </NavigationLayout>
  )
}

export default SubscribedPackage
