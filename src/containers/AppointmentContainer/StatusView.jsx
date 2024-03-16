import React from "react";
import { UIStyledStatusBox } from "./ui";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const StatusView = ({ status }) => {
  return (
    <UIStyledStatusBox>
      <UITypogrpahy
        title={status}
        textAlign="center"
        sx={{ fontWeight: 600, color: "black !important" }}
      />
    </UIStyledStatusBox>
  );
};

export default StatusView;
