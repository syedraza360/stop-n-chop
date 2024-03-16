import { Grid, Slide, Typography } from "@mui/material";
import React from "react";
import UIButton from "../../components/Button/UIButton";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const Steps = ({
  title,
  description,
  step,
  btnTitle,
  btn1cb,
  btn2cb,
  isActive,
}) => {
  return (
    <>
      <Slide
        direction="left"
        in={[isActive.step1, isActive.step2, isActive.step3]}
        mountOnEnter
        unmountOnExit
      >
        <Grid container px={{ xs: 6, md: 12 }} py={{ xs: 3, md: 2 }}>
          <Grid item xs={12}>
            <UITypogrpahy type="heading" title="Welcome" />
          </Grid>
          <Grid item xs={12}>
            <UITypogrpahy type="heading" title={title} />
          </Grid>
          {step !== 3 && (
            <Grid item xs={12}>
              <UITypogrpahy title={description} />
            </Grid>
          )}
        </Grid>
      </Slide>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        my={{ xs: 5, md: 8 }}
        rowGap={3}
      >
        <Grid item xs={9} md={3} sx={{ width: "100%" }}>
          <UIButton
            label={btnTitle}
            btnType="simple"
            variant="contained"
            fullWidth
            onClick={btn1cb}
          />
        </Grid>
        {step == 3 && (
          <Grid item xs={9} md={3} sx={{ width: "100%" }}>
            <UIButton
              label="Book Now"
              btnType="simple"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#F4F4F4 !important", color: "black" }}
              onClick={btn2cb}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Steps;
