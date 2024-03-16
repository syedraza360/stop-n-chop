import React, { useEffect, useState } from "react";
import UIBox from "../../components/Box/UIBox";
import { Grid } from "@mui/material";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import UIDivider from "../../components/UIDivider";
import { useSelector } from "react-redux";

// eslint-disable-next-line import/no-webpack-loader-syntax

const PaymentDetail = () => {
  const [amount, setAmount] = useState(0);

  const addPackageDetailReducer = useSelector(
    (state) => state?.AddPackageDetailReducer
  );

  const getUserData = useSelector((state) => state?.GetUserProfileReducer?.res);

  const getABarberReducer = useSelector(
    (state) => state.GetABabersReducer?.res
  );

  const selectedTimeSlot = useSelector((state) => state?.AddTimeSlotsReducer);
  const date = new Date();

  useEffect(() => {
    if (getUserData?.res?.data?.remainingSubscribedAmount != 0) {
      if (
        getUserData?.res?.data?.remainingSubscribedAmount >
        addPackageDetailReducer?.package?.amount
      ) {
        setAmount(0);
      } else {
        setAmount(
          addPackageDetailReducer?.package?.amount -
            getUserData?.res?.data?.remainingSubscribedAmount
        );
      }
    } else {
      setAmount(addPackageDetailReducer?.package?.amount);
    }
  }, [
    getUserData?.res?.success,
    amount,
    addPackageDetailReducer?.package?.amount,
    getUserData?.res?.data?.remainingSubscribedAmount,
  ]);

  console.log("addPackageDetailReducer", addPackageDetailReducer);
  console.log("amount", amount);

  return (
    <UIBox p={2} mt={{ xs: 5, md: 0 }} mx={{ xs: 3, md: 0 }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          {/* <iframe
            src="https://maps.google.com/maps?q='+48.950449+','-57.939385+'&hl=es&z=14&amp;output=embed"
            height="250"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="ifram"
          ></iframe> */}
          {/* <ReactMapGL
            {...viewport}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onMove={(evt) => setViewport(evt.viewState)}
            style={{ height: "200px", padding: "20px" }}
            mapStyle="mapbox://styles/syed-danial110/cljc2s3wi004801o4htf27rve"
          >
            <Marker
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img
                src={BarbarImg}
                alt="pin"
                height="90px"
                width="90px"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </Marker>
          </ReactMapGL> */}
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            type="heading"
            title={getABarberReducer?.res?.data?.name}
          />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy title="1801 Blake St Ste 100, Denver, CO 80202" />
          <UITypogrpahy title={getABarberReducer?.res?.data?.phoneNumber} />
        </Grid>
        <Grid item xs={8}>
          <UITypogrpahy
            title={
              addPackageDetailReducer?.package?.category ? "Service" : "Package"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <UITypogrpahy
            textAlign="end"
            title={
              addPackageDetailReducer?.package?.category
                ? `${addPackageDetailReducer?.package?.type},`
                : addPackageDetailReducer?.package?.heading
            }
          />
          <UITypogrpahy
            textAlign="end"
            title={addPackageDetailReducer?.package?.category}
          />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy title="Date & Time" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy
            textAlign="end"
            title={
              selectedTimeSlot.date
                ? `${selectedTimeSlot.date}, ${selectedTimeSlot.time}`
                : `${new Date().getDate()}-${new Date().getDay()}-${new Date().getFullYear()}`
            }
          />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy title="Sub Total" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy
            textAlign="end"
            title={
              addPackageDetailReducer?.package?.amount
                ? `$${addPackageDetailReducer?.package?.amount}`
                : `$${addPackageDetailReducer?.package?.type?.amount}`
            }
          />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy title="Discount price" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy
            textAlign="end"
            title={
              addPackageDetailReducer?.package?.type?.discount
                ? `${addPackageDetailReducer?.package?.type?.discount}%`
                : "0%"
            }
          />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy title="Tax & Fees" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy textAlign="end" title="$3.35" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy title="Total" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy
            textAlign="end"
            title={
              addPackageDetailReducer?.package?.amount
                ? `$${amount + 3.35}`
                : `$${
                    parseInt(addPackageDetailReducer?.package?.type?.amount) -
                    parseInt(addPackageDetailReducer?.package?.type?.amount) *
                      (addPackageDetailReducer?.package?.type?.discount / 100) +
                    3.35
                  }`
            }
          />
        </Grid>
      </Grid>
    </UIBox>
  );
};

export default PaymentDetail;
