import React from "react";
import { UIStyledInputLabel } from "./ui";

const UIInputLabel = ({ label, ...props }) => {
  return <UIStyledInputLabel {...props}>{label}</UIStyledInputLabel>;
};

export default UIInputLabel;
