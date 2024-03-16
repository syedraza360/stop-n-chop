import { Box, Divider, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPasswordSchema } from "../schema";
import { useLocation, useNavigate } from "react-router-dom";
import UITextField from "../../../components/InputField/UITextField";
import UIButton from "../../../components/Button/UIButton";
import InputLabel from "../../../components/InputLabel";
import UITypogrpahy from "../../../components/UITypography/UITypogrpahy";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../store/actions/AUTH";
import { toast } from "react-toastify";

const NewPasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newPasswordSchema),
    defaultValues: { password: "", newPassword: "" },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const resetPasswordData = useSelector(
    (state) => state.ResetPasswordReducer.res
  );

  const handleUserSignup = (data) => {
    const dataObj = {
      email: location.state.email,
      password: data.password,
    };
    dispatch(resetPassword(dataObj));
  };

  useEffect(() => {
    if (resetPasswordData?.res?.success) {
      navigate("/login");
      toast.success(resetPasswordData.res.message);
    }
  }, [resetPasswordData?.res?.success]);

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
            <UITypogrpahy type="heading" title="New Password" />
            <UITypogrpahy title="Your new password must be different from old" />
          </Grid>
          <Grid item xs={8} mt={2}>
            <Divider />
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(handleUserSignup)}>
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
                placeholder="Type here"
                control={control}
                name="password"
                fullWidth
                errorMessage={errors?.password?.message}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
            <Grid item xs={10} md={8} mt={2}>
              <InputLabel label="Re-Type Password" />
              <UITextField
                variant="outlined"
                placeholder="Type here"
                type="password"
                control={control}
                name="newPassword"
                fullWidth
                errorMessage={errors?.newPassword?.message}
              />
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={{ xs: "center", md: "flex-start" }}
            mt={8}
          >
            <Grid item xs={10} md={8}>
              <UIButton
                fullWidth
                btnType="simple"
                variant="contained"
                label="Update Password"
                type="submit"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default NewPasswordForm;
