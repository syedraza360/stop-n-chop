import React, { useEffect, useState } from 'react'
import NavigationLayout from '../containers/NavigationLayout/index'
import Header from '../containers/Header'
import { Box, Grid, Tab } from '@mui/material'
import UITabs from '../components/Tabs/UITabs'
import UIBox from '../components/Box/UIBox'
import SubscriptionContainer from '../containers/Subscription/SubscriptionContainer'
import UIButton from '../components/Button/UIButton'
import MainHeader from '../containers/Header/MainHeader'
import WebHeader from '../containers/Header/WebHeader'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PackagesContent from '../containers/packages/PackagesContent'
import { getAllPackages, getAllPackagesByType } from '../store/actions/packages'
import { toast } from 'react-toastify'
import { DotLoader } from 'react-spinners'
import UITypogrpahy from '../components/UITypography/UITypogrpahy'
import Loader from '../components/Loader'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Packages = () => {
  const addPackageDetailReducer = useSelector(
    (state) => state?.AddPackageDetailReducer,
  )

  const dispatch = useDispatch()

  const allPackages = useSelector((state) => state?.GetAllPackagesReducer)
  const packagesByType = useSelector(
    (state) => state?.GetAllPackagesByTypeReducer,
  )

  const [packageArr, setPackageArr] = useState([])
  const [packageTabsArr, setPackageTabsArr] = useState('')
  const [value, setValue] = useState(0)

  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const packagesArr = [
    {
      heading: 'Teens/Adults',
      description: 'we are providing only monthly packages',
      savingsTitle: '- 10% savings',
      price: 30.0,
      types: [
        {
          id: 12,
          package: 'Silver',
          no_of_cuts: '2 Cuts',
        },
        {
          id: 13,
          package: 'Gold',
          no_of_cuts: '3 Cuts',
        },
        {
          id: 14,
          package: 'Platinum',
          no_of_cuts: '4 Cuts',
        },
      ],
    },
    {
      heading: 'Child Package',
      description: 'Children 7-12yrs, single child',
      savingsTitle: '- 10% savings',
      price: 60.0,
      types: [
        {
          id: 22,
          package: 'Silver',
          no_of_cuts: '2 Cuts',
        },
        {
          id: 23,
          package: 'Gold',
          no_of_cuts: '3 Cuts',
        },
        {
          id: 24,
          package: 'Platinum',
          no_of_cuts: '4 Cuts',
        },
      ],
    },
    {
      heading: 'Multi-Child Package',
      description: '2+ children - per child basis',
      savingsTitle: '- 10% savings',
      price: 120.0,
      types: [
        {
          id: 32,
          package: 'Silver',
          no_of_cuts: '2 Cuts',
        },
        {
          id: 33,
          package: 'Gold',
          no_of_cuts: '3 Cuts',
        },
        {
          id: 34,
          package: 'Platinum',
          no_of_cuts: '4 Cuts',
        },
      ],
    },
  ]

  const tabArr = [
    {
      label: 'Adult',
      filter: 'Teen/Adults',
    },
    {
      label: 'Child',
      filter: 'Child',
    },
    {
      label: 'Multi Child',
      filter: 'Multi-Child',
    },
  ]

  useEffect(() => {
    dispatch(getAllPackages())
    dispatch(getAllPackagesByType('Teen/Adults'))
  }, [])

  useEffect(() => {
    if (allPackages?.type) {
      //remove same element
      const uniqueTypes = {}
      // Filter the array to keep only unique types
      const filteredData = allPackages?.res?.res?.data.filter((item) => {
        if (!uniqueTypes[item.type]) {
          uniqueTypes[item.type] = true
          return true
        }
        return false
      })
      // get Teen/Adult type name
      const adultCategory = 'Teen/Adults'

      const filterAdultCategory = allPackages?.res?.res?.data.filter(
        (item) => item.type === adultCategory,
      )

      // get Child type name
      const ChildType = 'Child'

      const filterChildCategory = allPackages?.res?.res?.data.filter(
        (item) => item.type === ChildType,
      )

      // get Teen/Adult type name
      const desiredType = 'Multi-Child'

      const filterMultiChildCategory = allPackages?.res?.res?.data.filter(
        (item) => item.type === desiredType,
      )

      let adultCategoryArr =
        filterAdultCategory?.length > 0 &&
        filterAdultCategory?.map((item, i) => {
          return {
            _id: item?._id,
            category: item?.category,
            amount: item?.amount,
            categoryDescription: item?.categoryDescription,
            discount: item?.discount,
          }
        })

      let childCategoryArr =
        filterChildCategory?.length > 0 &&
        filterChildCategory?.map((item, i) => {
          return {
            _id: item?._id,
            category: item?.category,
            amount: item?.amount,
            categoryDescription: item?.categoryDescription,
            discount: item?.discount,
          }
        })
      let multiChildCategoryArr =
        filterMultiChildCategory?.length > 0 &&
        filterMultiChildCategory?.map((item, i) => {
          return {
            _id: item?._id,
            category: item?.category,
            amount: item?.amount,
            categoryDescription: item?.categoryDescription,
            discount: item.discount,
          }
        })

      setPackageArr((prev) => {
        let x = filteredData?.map((item, i) => {
          if (item.type === 'Teen/Adults') {
            return {
              _id: item?._id,
              type: item?.type,
              createdAt: item?.createdAt,
              category: adultCategoryArr,
              description: ' 13yrs+',
            }
          } else if (item.type === 'Child') {
            return {
              _id: item?._id,
              type: item?.type,
              createdAt: item?.createdAt,
              category: childCategoryArr,
              description: 'Children  7-12yrs,  single  child',
            }
          } else {
            return {
              _id: item?._id,
              type: item?.type,
              createdAt: item?.createdAt,
              category: multiChildCategoryArr,
              description: '2+  children  -  per  child  basis ',
            }
          }
        })
        return x
      })
    }
  }, [allPackages.type])

  useEffect(() => {
    if (packagesByType?.type) {
      //remove same element
      const uniqueTypes = {}
      // Filter the array to keep only unique types
      const filteredData = packagesByType?.res?.res?.data.filter((item) => {
        if (!uniqueTypes[item.type]) {
          uniqueTypes[item.type] = true
          return true
        }
        return false
      })
      // get Teen/Adult type name
      const adultCategory = 'Teen/Adults'

      const filterAdultCategory = packagesByType?.res?.res?.data.filter(
        (item) => item.type === adultCategory,
      )

      // get Child type name
      const ChildType = 'Child'

      const filterChildCategory = packagesByType?.res?.res?.data.filter(
        (item) => item.type === ChildType,
      )

      // get Teen/Adult type name
      const desiredType = 'Multi-Child'

      const filterMultiChildCategory = packagesByType?.res?.res?.data.filter(
        (item) => item.type === desiredType,
      )

      let adultCategoryArr =
        filterAdultCategory?.length > 0 &&
        filterAdultCategory?.map((item, i) => {
          return {
            _id: item?._id,
            category: item?.category,
            amount: item?.amount,
            categoryDescription: item?.categoryDescription,
          }
        })

      let childCategoryArr =
        filterChildCategory?.length > 0 &&
        filterChildCategory?.map((item, i) => {
          return {
            _id: item?._id,
            category: item?.category,
            amount: item?.amount,
            categoryDescription: item?.categoryDescription,
          }
        })
      let multiChildCategoryArr =
        filterMultiChildCategory?.length > 0 &&
        filterMultiChildCategory?.map((item, i) => {
          return {
            _id: item?._id,
            category: item?.category,
            amount: item?.amount,
            categoryDescription: item?.categoryDescription,
          }
        })

      setPackageTabsArr((prev) => {
        let x = filteredData?.map((item, i) => {
          if (item.type === 'Teen/Adults') {
            return {
              _id: item?._id,
              type: item?.type,
              description: ' 13yrs+',
              createdAt: item?.createdAt,
              category: adultCategoryArr,
            }
          } else if (item.type === 'Child') {
            return {
              _id: item?._id,
              type: item?.type,
              createdAt: item?.createdAt,
              description: 'Children  7-12yrs,  single  child',
              category: childCategoryArr,
            }
          } else {
            return {
              _id: item?._id,
              type: item?.type,
              createdAt: item?.createdAt,
              description: '2+  children  -  per  child  basis ',
              category: multiChildCategoryArr,
            }
          }
        })
        return x
      })
    }
  }, [packagesByType.type, value])

  console.log('PackageArr', packageArr)
  console.log('allPackages', allPackages)

  return (
    <NavigationLayout>
      <Grid container sx={{ display: { xs: 'block', md: 'none' } }}>
        <Grid item xs={12} px={2}>
          <MainHeader
            heading={'Select Package'}
            description={'We are providing only monthly packages'}
          />
        </Grid>
      </Grid>

      <Box sx={{ paddingLeft: { md: '75px' }, paddingRight: { md: '60px' } }}>
        <Grid
          container
          justifyContent="center"
          mt={{ xs: 4, md: 5 }}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <Grid item xs={12} md={3} display="flex" justifyContent="center">
            <UITabs value={value} onChange={handleChange}>
              {tabArr?.length > 0 &&
                tabArr?.map((item, i) => {
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
                        dispatch(getAllPackagesByType(item.filter))
                      }}
                      {...a11yProps(i)}
                    />
                  )
                })}
            </UITabs>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ display: { xs: 'block', md: 'none' } }}
          mt={3}
          py={2}
          px={{ xs: 4, md: 2 }}
        >
          <Grid item xs={12} md={6}>
            {packagesByType?.type === 'loading' ? (
              <Box
                //This loader will remove after loader branch merge
                sx={{
                  width: '100%',
                  height: '50vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DotLoader color="#FFBE59" />
              </Box>
            ) : (
              <>
                {/* {packageTabsArr?.length > 0 ? (
                  packageTabsArr?.map((item, i) => {
                    return (
                      <PackagesContent
                        i={i}
                        item={item}
                        value={value}
                        description={item.description}
                      />
                    )
                  })
                ) */}
                {packageTabsArr?.length > 0 ? (
                  <>
                    <PackagesContent
                      i={0}
                      item={packageTabsArr[0]}
                      value={value}
                      description={packageTabsArr[0]?.description}
                    />
                    <PackagesContent
                      i={1}
                      item={packageTabsArr[0]}
                      value={value}
                      description={packageTabsArr[0]?.description}
                    />
                    <PackagesContent
                      i={2}
                      item={packageTabsArr[0]}
                      value={value}
                      description={packageTabsArr[0]?.description}
                    />
                  </>
                ) : (
                  <>
                    <UITypogrpahy
                      type="heading"
                      title="No Packages Available"
                      textAlign="center"
                    />
                  </>
                )}
              </>
            )}
          </Grid>
        </Grid>
        <Grid container sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid item xs={12}>
            <WebHeader
              heading="Select Package"
              description="We are providing only monthly packages"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: { xs: 'none', md: 'block' }, mx: 4, my: 6 }}>
          <Grid container spacing={8} justifyContent="space-between">
            {allPackages?.type === 'loading' ? (
              <Loader />
            ) : (
              <>
                {packageArr?.length > 0 ? (
                  packageArr?.map((item, i) => {
                    return (
                      <Grid item xs={4}>
                        <SubscriptionContainer
                          heading={item?.type}
                          description={item.description}
                          savingsTitle={
                             'Upto 20% discount'
                          }
                          price=""
                          item={item}
                          types={item?.category}
                        />
                      </Grid>
                    )
                  })
                ) : (
                  <UITypogrpahy
                    type="heading"
                    title="No Packages Available"
                    sx={{ mt: 3, ml: 3 }}
                  />
                )}
              </>
            )}
          </Grid>
          <Grid contianer mt={6}>
            <Grid item xs={3}>
              <UIButton
                fullWidth
                btnType="simple"
                variant="contained"
                label="Next"
                disabled={packageArr?.length == 0 ? true : false}
                onClick={() => {
                  if (Object.keys(addPackageDetailReducer?.package).length > 0)
                    navigate('/payment', { state: { isPackage: true } })
                  else toast.error('Please select any package')
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </NavigationLayout>
  )
}

export default Packages
