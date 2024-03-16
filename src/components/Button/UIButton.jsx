import React from "react";
import { UILoadingButton, UIStyledButton } from "./ui";
import Input from "@mui/material/Input";

const UIButton = ({
  icon,
  label,
  variant,
  btnType,
  isLoading,
  iconPosition,
  stylecolor,
  type,
  ...rest
}) => {
  return btnType == "simple" ? (
    <UIStyledButton
      variant={variant}
      stylecolor={stylecolor}
      type={type}
      {...rest}
    >
      {label}
    </UIStyledButton>
  ) :  (
    btnType == "icon" &&
    (iconPosition == "start" ? (
      <UIStyledButton
        variant={variant}
        startIcon={icon}
        stylecolor={stylecolor}
        {...rest}
      >
        {label}
      </UIStyledButton>
    ) : (
      <UIStyledButton
        variant={variant}
        endIcon={icon}
        stylecolor={stylecolor}
        {...rest}
      >
        {label}
      </UIStyledButton>
    ))
  );
};

export default UIButton;
