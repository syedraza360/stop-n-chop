import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { StyledOtp, UIStyledOutlinedField } from "./ui";
import OTPInput from "react-otp-input";

const UITextField = ({
  name,
  type,
  label,
  value,
  control,
  variant,
  errorMessage,
  handleChange,
  isOtp,
  otp,
  onChange,
  ...rest
}) => {
  const { control: fallbackControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      {isOtp ? (
        <OTPInput
          value={otp}
          onChange={onChange}
          numInputs={6}
          renderSeparator={<span></span>}
          containerStyle={{ justifyContent: "space-around" }}
          errorMessage={errorMessage}
          inputStyle={{
            padding: "20px",
            fontSize: "16px",
            borderRadius: "16px",
            borderColor: (theme) =>
              errorMessage.length > 1
                ? theme.palette.indicators.main
                : theme.palette.primary.shade2,
            borderWidth: "1px",
            borderStyle: "solid",
            "& :focus-visible": {
              outlineColor: (theme) => theme.palette.secondary.main,
              borderColor: (theme) => theme.palette.secondary.main,
            },
          }}
          renderInput={(props) => <input {...props} />}
        />
      ) : (
        <Controller
          name={name}
          control={control == null ? fallbackControl : control}
          render={({ field }) => {
            return (
              <>
                <UIStyledOutlinedField
                  type={
                    type === "password"
                      ? showPassword
                        ? "text"
                        : "password"
                      : "text"
                  }
                  variant="outlined"
                  value={value}
                  onChange={handleChange}
                  error={errorMessage && true}
                  helperText={errorMessage}
                  InputLabelProps={{ shrink: true }}
                  InputProps={
                    type === "password" && {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? (
                              <VisibilityOff
                                sx={(theme) => ({
                                  color: theme.palette.primary.main,
                                })}
                              />
                            ) : (
                              <Visibility
                                sx={(theme) => ({
                                  color: theme.palette.primary.main,
                                })}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }
                  }
                  {...rest}
                  {...field}
                />
              </>
            );
          }}
        />
      )}
    </>
  );
};

export default UITextField;
