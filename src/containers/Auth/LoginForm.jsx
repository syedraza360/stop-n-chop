import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import UITextField from "../../components/InputField/UITextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema";
import { StyledLink } from "../../components/InputField/ui";
import UIButton from "../../components/Button/UIButton";
import { useLocation, useNavigate } from "react-router-dom";
import { BASEURL, apiPost } from "../../apis/ApiRequest";
import { ApiEndpoints } from "../../apis/apiEndpoints";
import InputLabel from "../../components/InputLabel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/AUTH";
import { toast } from "react-toastify";
import { setToken } from "../../apis/Auth";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import UIDivider from "../../components/UIDivider";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signinData = useSelector((state) => state?.SignInReducer);

  const handleUserLogin = (data) => {
    const dataObj = {
      email: data.email,
      password: data.password,
    };
    dispatch(signin(dataObj));
  };

  useEffect(() => {
    if (signinData?.res?.res?.success) {
      navigate("/home");
    }
  }, [signinData?.res?.res?.success]);

  return (
    <Box
      sx={{
        margin: "auto",
        pl: { md: 15 },
        paddingRight: { md: 10 },
        height: { md: "100vh" },
        display: "flex",
        alignItems: "center",
        // backgroundColor: `#0D0D0D !important`,
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Grid container sx={{ display: { xs: "none", md: "block" } }}>
          <Grid md={8}>
            <UITypogrpahy type="heading" title="Sign In" />
            <UITypogrpahy title="Welcome Back" />
          </Grid>
          <Grid item xs={8} mt={2}>
            <UIDivider />
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={2}
          >
            <Grid item xs={10} md={8}>
              <InputLabel label="Email" />
              <UITextField
                variant="outlined"
                placeholder="Type your email"
                control={control}
                name="email"
                fullWidth
                errorMessage={errors?.email?.message}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={2}
          >
            <Grid item xs={10} md={8}>
              <InputLabel label="Password" />
              <UITextField
                variant="outlined"
                type="password"
                placeholder="Type your password"
                control={control}
                name="password"
                fullWidth
                errorMessage={errors?.password?.message}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={2}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <StyledLink to="/reset-password">Forget Password</StyledLink>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={4}
          >
            <Grid item xs={10} md={8}>
              <UIButton
                fullWidth
                btnType="simple"
                variant="contained"
                label="Sign In"
                type="submit"
              />
            </Grid>
          </Grid>
        </form>
        <Grid
          container
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="flex-end"
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              height: "100px",
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Don't have an account?{" "}
              <StyledLink to="/sign-up">Sign up</StyledLink>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginForm;
