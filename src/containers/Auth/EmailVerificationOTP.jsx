import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import UIButton from "../../components/Button/UIButton";
import UITextField from "../../components/InputField/UITextField";
import { StyledLink } from "../../components/InputField/ui";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../apis/ApiRequest";
import { ApiEndpoints } from "../../apis/apiEndpoints";
import { emailVerification } from "../../store/actions/AUTH";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const EmailVerificationOTP = ({ btnText }) => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const emailVerifyData = useSelector((state) => state?.EmailVerifyReducer);
  const forgetData = useSelector((state) => state.ForgetPasswordReducer?.res);

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const handleEmailVerfication = async (e) => {
    e.preventDefault();
    if (otp.length != 6) {
      setErrorMessage("OTP require 6 digits");
    } else {
      setErrorMessage("");
      const dataObj = {
        email: location.state?.email,
        code: otp,
        type: location.state?.type,
      };
      dispatch(emailVerification(dataObj));
    }
  };

  useEffect(() => {
    if (emailVerifyData?.res?.res?.success) {
      if (location?.state?.type === "signup") {
        navigate("/add-profile");
      } else if (location?.state?.type === "resetPassword") {
        navigate("/new-password", {
          state: { email: forgetData?.data.email },
        });
      } else {
        navigate("/home");
      }
      toast.success(emailVerifyData?.res?.res?.message);
    }
  }, [emailVerifyData?.res?.res.success]);

  return (
    <Box
      sx={{
        margin: "auto",
        pl: { md: 15 },
        paddingRight: { md: 10 },
        height: { md: "100vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container sx={{ display: { xs: "none", md: "block" } }}>
          <Grid md={8}>
            <UITypogrpahy type="heading" title="Email Verification " />
            <UITypogrpahy title="We have sent your verification code to email" />
          </Grid>
          <Grid item xs={8} mt={2}>
            <Divider />
          </Grid>
        </Grid>
        <form onSubmit={handleEmailVerfication}>
          <Grid
            container
            mt={3}
            columnGap={{ md: 3 }}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Grid item xs={12} sm={10} md={10}>
              <UITextField
                fullWidth
                isOtp={true}
                otp={otp}
                onChange={setOtp}
                errorMessage={errorMessage}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={{ xs: 3, md: 0 }}
          >
            <Grid
              item
              md={8}
              xs={10}
              sx={{ height: "200px", alignItems: "center", display: "flex" }}
            >
              <UIButton
                btnType="simple"
                label={btnText}
                variant="contained"
                type="submit"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
        <Grid container>
          <Grid item xs={12}>
            <Typography textAlign={{ xs: "center", md: "start" }}>
              Didn’t receive it? <StyledLink>Resend code</StyledLink>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EmailVerificationOTP;
