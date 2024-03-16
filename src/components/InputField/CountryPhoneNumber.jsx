import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import PhoneInput from "react-phone-input-2";

import { CountryListWrapper } from "./ui";

const CountryPhoneNumber = ({
  name,
  value,
  control,
  errorMessage,
  ...rest
}) => {
  return (
    <CountryListWrapper error={errorMessage}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            country={"us"}
            value={value}
            enableSearch={false}
            onlyCountries={["us"]}
            specialLabel=""
            {...rest}
            {...field}
            inputStyle={{ borderRadius: "16px" }}
          />
        )}
      />
    </CountryListWrapper>
  );
};

export default CountryPhoneNumber;
