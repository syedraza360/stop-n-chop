import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UISavingBox } from "./ui";
import OultlineBox from "../../components/OulineBox";
import UIBox from "../../components/Box/UIBox";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import UIDivider from "../../components/UIDivider";
import { useDispatch, useSelector } from "react-redux";
import { addPackageDetails } from "../../store/actions/packages";
import { UIStyledPackageBox } from "../../components/Box/ui";
import { addTimeSlots } from "../../store/actions/services";

const Adult = ({
  heading,
  description,
  savingsTitle,
  price,
  p_ind,
  item,
  types,
}) => {
  const dispatch = useDispatch();

  const addPackageDetailReducer = useSelector(
    (state) => state?.AddPackageDetailReducer
  );

  const handlePackageClick = (c_ind, elm) => {
    const dataObj = {
      _id: item?._id,
      heading: heading,
      description: description,
      savingsTitle: savingsTitle,
      createdAt: item?.createdAt,
      type: {
        amount: elm.amount,
        category: elm.category,
        categoryDescription: elm.categoryDescription,
        discount: elm.discount,
        _id: elm._id,
        discountedPrice: elm.discount
          ? elm?.amount - elm?.amount * (elm?.discount / 100)
          : elm.amount,
      },
    };
    dispatch(addPackageDetails(dataObj));
    const timeObj = {
      time: "",
      day: "",
    };
    dispatch(addTimeSlots(timeObj));
  };

  return (
    <>
      <UIStyledPackageBox
        item={item}
        addPackageDetailReducer={addPackageDetailReducer}
        sx={{ p: 3 }}
      >
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <UITypogrpahy title={heading} type="heading" />
            <UITypogrpahy title={description} />
          </Grid>
          <Grid item xs={4}>
            <UISavingBox>
              <UITypogrpahy
                title={savingsTitle}
                textAlign={"center"}
                sx={{
                  color: (theme) => theme?.palette?.primary?.white,
                  fontSize: "12px",
                }}
                isWhite={true}
              />
            </UISavingBox>
          </Grid>

          <Grid item xs={12} my={3}>
            <UIDivider />
          </Grid>

          {types?.length > 0 &&
            types?.map((elm, i) => {
              return (
                <Grid item xs={12}>
                  <OultlineBox
                    packageName={elm.category}
                    noOfCuts={elm.categoryDescription}
                    index={i}
                    elm={elm}
                    onClick={() => {
                      handlePackageClick(i, elm);
                    }}
                    price={elm.amount}
                    addPackageDetailReducer={addPackageDetailReducer}
                  />
                </Grid>
              );
            })}
        </Grid>
      </UIStyledPackageBox>
    </>
  );
};

export default Adult;
