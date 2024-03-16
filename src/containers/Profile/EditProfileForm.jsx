import { Grid, InputLabel, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { editProfileSchema } from "./schema";
import UITextField from "../../components/InputField/UITextField";
import CountryPhoneNumber from "../../components/InputField/CountryPhoneNumber";
import UIButton from "../../components/Button/UIButton";
import { StyledLink } from "../../components/InputField/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UIInputLabel from "../../components/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUserProfile } from "../../store/actions/Profile";
import { toast } from "react-toastify";

const EditProfileForm = () => {
  const signinData = useSelector((state) => state?.SignInReducer?.res);
  const userData = useSelector((state) => state?.GetUserProfileReducer?.res);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: userData?.res?.data?.name || "",
      email: userData?.res?.data?.email ? userData?.res?.data?.email : "",
      number: userData?.res?.data?.phoneNumber
        ? userData?.res?.data?.phoneNumber
        : "",
    },
  });

  const dispatch = useDispatch();

  const updateUserReducer = useSelector(
    (state) => state?.UpdateUserProfileReducer?.res
  );

  const userId = localStorage.getItem("userId");

  const handleEditProfile = (data) => {
    const dataObj = {
      name: data?.name,
      email: data?.email,
      phoneNumber: data?.number,
    };
    dispatch(updateUserProfile(dataObj, userId));
  };

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [updateUserReducer?.res?.success]);

  return (
    <form
      onSubmit={handleSubmit(handleEditProfile)}
      style={{ margin: "20px 0" }}
    >
      <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
        <Grid item xs={10} md={4}>
          <UIInputLabel label="Name" />
          <UITextField
            variant="outlined"
            placeholder="Type here"
            control={control}
            name="name"
            fullWidth
            errorMessage={errors?.name?.message}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
        <Grid item xs={10} md={4} mt={2}>
          <UIInputLabel label="Email" />
          <UITextField
            variant="outlined"
            placeholder="Type here"
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
        <Grid item xs={10} md={4}>
          <UIInputLabel label="Phone Number" />
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
        mt={3}
      >
        <Grid item xs={10} md={4}>
          <UIButton
            fullWidth
            btnType="simple"
            variant="contained"
            label="Save Changes"
            type="submit"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default EditProfileForm;
