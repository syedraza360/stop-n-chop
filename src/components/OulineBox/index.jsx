import { Box, Typography } from "@mui/material";
import React from "react";
import { UIOutlineBox } from "./ui";
import UITypogrpahy from "../UITypography/UITypogrpahy";

const index = ({
  packageName,
  noOfCuts,
  onClick,
  elm,
  addPackageDetailReducer,
  price,
}) => {
  return (
    <UIOutlineBox
      onClick={onClick}
      elm={elm}
      addPackageDetailReducer={addPackageDetailReducer}
    >
      <UITypogrpahy title={packageName} isGrey={true} />
      <Box>
        <UITypogrpahy title={noOfCuts} />
        <UITypogrpahy
          title={`$${price}`}
          sx={{ fontSize: "14px" }}
          textAlign={"end"}
          fontWeight={600}
        />
      </Box>
    </UIOutlineBox>
  );
};

export default index;
