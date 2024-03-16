import { Grid } from "@mui/material";
import React from "react";
import { BoxWrapper } from "./ui";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const BasicCut = () => {
  return (
    <BoxWrapper mt={2}>
      <UITypogrpahy title="Men Clipper Cut" />
      <UITypogrpahy title="$10" />
    </BoxWrapper>
  );
};

export default BasicCut;
