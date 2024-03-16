import React, { useState } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { UIStyledDatePicker } from "./ui";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const UIDatePicker = ({ name, disabled, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <UIStyledDatePicker
        // label={'"year"'}
        placeholder="M-YYYY"
        disablePast
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default UIDatePicker;
