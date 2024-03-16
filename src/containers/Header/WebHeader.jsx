import { Grid } from "@mui/material";
import React from "react";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import UIDivider from "../../components/UIDivider";
import { UIWebHeaderHeadingTypography } from "./ui";

const WebHeader = ({ heading, description, isDivider = true }) => {
  return (
    <Grid container spacing={2} py={3}>
      <Grid item xs={12}>
        <UIWebHeaderHeadingTypography fontSize="32px">
          {heading}
        </UIWebHeaderHeadingTypography>
      </Grid>
      {description && (
        <Grid item xs={12}>
          <UITypogrpahy title={description} />
        </Grid>
      )}
      {isDivider && (
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
      )}
    </Grid>
  );
};

export default WebHeader;
