import React, { useEffect } from "react";
import UITextField from "../../../components/InputField/UITextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetEmailSchema } from "../schema";
import UIButton from "../../../components/Button/UIButton";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../../store/actions/AUTH";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const EmailTab = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetEmailSchema),
    defaultValues: { email: "" },
  });

  const forgetData = useSelector((state) => state.ForgetPasswordReducer?.res);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetEmail = (data) => {
    const dataObj = {
      email: data.email,
    };
    dispatch(forgetPassword(dataObj));
  };

  useEffect(() => {
    if (forgetData?.res?.success) {
      navigate("/email-verification", {
        state: { email: forgetData?.data.email, type: "resetPassword" },
      });
      toast.success(forgetData.res.message);
    }
  }, [forgetData?.res?.success]);

  return (
    <Box sx={{ width: "100%", mt: { xs: 0, md: 3 } }}>
      <form onSubmit={handleSubmit(handleResetEmail)}>
        <UITextField
          variant="outlined"
          placeholder="Email"
          control={control}
          name="email"
          fullWidth
          errorMessage={errors?.email?.message}
          sx={{ marginTop: "10px" }}
        />
        <UIButton
          label="Continue"
          btnType="simple"
          variant="contained"
          type="submit"
          fullWidth
          sx={{ marginTop: "40px" }}
        />
      </form>
    </Box>
  );
};

export default EmailTab;
