import { Grid } from "@mui/material";
import React from "react";
import { UITimeBox } from "./ui";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";

const BookingTimeSlots = ({ getSchedules, timeSlots, onClick }) => {
  const selectedTimeSlot = useSelector((state) => state?.AddTimeSlotsReducer);

  return (
    <Grid container>
      {getSchedules?.res?.res?.success ? (
        <>
          {timeSlots?.length > 0 ? (
            timeSlots.map((item, i) => {
              return (
                <Grid item xs={4} sm={3} md={3} px={1} mt={2}>
                  <UITimeBox
                    onClick={() => {
                      onClick(item);
                      // setIsTimeSelected(i);
                    }}
                    ind={i}
                    // isTimeSelected={isTimeSelected}
                  >
                    <UITypogrpahy
                      sx={{
                        fontSize: "12px !important",
                        color: (theme) =>
                          selectedTimeSlot.time == item &&
                          `${theme.palette.secondary.main}`,
                        fontWeight: selectedTimeSlot.time == item && "900",
                      }}
                      title={item}
                    />
                  </UITimeBox>
                </Grid>
              );
            })
          ) : (
            <Grid item xs={12} px={1} mt={2}>
              <UITypogrpahy
                type="subheading"
                title="No time Slots Available Now"
              />
            </Grid>
          )}
        </>
      ) : (
        <Loader sx={{ height: "20vh" }} />
      )}
    </Grid>
  );
};

export default BookingTimeSlots;
