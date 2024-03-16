import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import UITextField from "../../components/InputField/UITextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./schema";
import { StyledLink } from "../../components/InputField/ui";
import UIButton from "../../components/Button/UIButton";
import CountryPhoneNumber from "../../components/InputField/CountryPhoneNumber";
import { useNavigate } from "react-router-dom";
import { BASEURL, apiPost } from "../../apis/ApiRequest";
import { ApiEndpoints } from "../../apis/apiEndpoints";
import InputLabel from "../../components/InputLabel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/actions/AUTH";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import UIDivider from "../../components/UIDivider";

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      name: "",
      email: "",
      password: "",
      username: "",
      number: "",
    },
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signupData = useSelector((state) => state.SignupReducer.res);

  const handleUserSignup = (data) => {
    const dataObj = {
      // name: data.name,
      name: data.firstName,
      // lastName: data.lastName,
      username: data.username,
      email: data.email,
      phoneNumber: data.number.toString(),
      password: data.password,
    };

    dispatch(signup(dataObj));
  };

  useEffect(() => {
    if (signupData?.res?.success) {
      navigate("/email-verification", {
        state: { email: signupData?.data.email, type: "signup" },
      });
    }
  }, [signupData?.res]);

  const fieldArr = [
    {
      inputLabel: "First Name",
      placeholder: "First name",
      name: "firstName",
      errorMessage: errors?.firstName?.message,
      type: "text",
    },
    {
      inputLabel: "Last Name",
      placeholder: "Last name",
      name: "lastName",
      errorMessage: errors?.lastName?.message,
      type: "text",
    },
    // {
    //   inputLabel: "Name",
    //   placeholder: "Name",
    //   name: "name",
    //   errorMessage: errors?.name?.message,
    //   type: "text",
    // },
    {
      inputLabel: "User name",
      placeholder: "User name",
      name: "username",
      errorMessage: errors?.username?.message,
      type: "text",
    },
    {
      inputLabel: "Email",
      placeholder: "Email",
      name: "email",
      errorMessage: errors?.email?.message,
      type: "text",
    },
    {
      inputLabel: "Password",
      placeholder: "Password",
      name: "password",
      errorMessage: errors?.password?.message,
      type: "password",
    },
  ];

  return (
    <Box
      sx={{
        margin: "auto",
        pl: { md: 15 },
        paddingRight: { md: 10 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }} pb={{ md: 3 }}>
        <Grid container sx={{ display: { xs: "none", md: "block" } }}>
          <Grid md={10}>
            <UITypogrpahy type="heading" title="Sign Up" />
            <UITypogrpahy title="Welcome Back" />
          </Grid>
          <Grid item xs={10} mt={2}>
            <UIDivider />
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(handleUserSignup)}>
          {fieldArr.map((item, i) => {
            return (
              <Grid
                container
                justifyContent={{ xs: "center", md: "flex-start" }}
                mt={2}
              >
                <Grid item xs={10} md={10}>
                  <InputLabel label={item.inputLabel} />
                  <UITextField
                    variant="outlined"
                    placeholder={item.placeholder}
                    control={control}
                    name={item.name}
                    fullWidth
                    errorMessage={item.errorMessage}
                    type={item.type}
                  />
                </Grid>
              </Grid>
            );
          })}
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={2}
          >
            <Grid item xs={10} md={10}>
              <InputLabel label="Phone Number" />
              <CountryPhoneNumber
                variant="outlined"
                placeholder="Type here"
                control={control}
                name="number"
                fullWidth
                errorMessage={errors?.number?.message}
              />
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={2}
          >
            <Grid item xs={10} md={10}>
              <UIButton
                fullWidth
                btnType="simple"
                variant="contained"
                label="Sign Up"
                type="submit"
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            alignItems="flex-end"
          >
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              pt={{ xs: 5, md: 10 }}
            >
              <Typography
                sx={{ color: (theme) => theme.palette.primary.main }}
                fontSize={{ xs: "16px", md: "18px" }}
              >
                Already have an account? {""}
                <StyledLink to="/login">Sign In</StyledLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;
