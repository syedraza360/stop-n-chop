import React from "react";
import { UIStyledBox, UIStyledServiceBox } from "../../components/Box/ui";
import { Grid } from "@mui/material";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const Cards = ({ isSelected, ind, onClick, heading, price }) => {
  return (
    <UIStyledServiceBox
      onClick={onClick}
      px={2}
      py={3}
      isSelected={isSelected}
      ind={ind}
    >
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <UITypogrpahy type="subheading" title={heading} />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy title="Duration 1 h" />
        </Grid>
        <Grid item xs={6}>
          <UITypogrpahy textAlign="end" title={price} />
        </Grid>
      </Grid>
    </UIStyledServiceBox>
  );
};

export default Cards;
