import React from "react";
import { UIStyledBox } from "./ui";

const UIBox = (props) => {
  const { children, ...rest } = props;
  return <UIStyledBox {...rest}>{children}</UIStyledBox>;
};

export default UIBox;
