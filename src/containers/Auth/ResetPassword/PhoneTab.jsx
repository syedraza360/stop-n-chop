import React from "react";
import UITextField from "../../../components/InputField/UITextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPhoneSchema } from "../schema";
import UIButton from "../../../components/Button/UIButton";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CountryPhoneNumber from "../../../components/InputField/CountryPhoneNumber";
import { toast } from "react-toastify";

const PhoneTab = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPhoneSchema),
    defaultValues: { number: "" },
  });

  const navigate = useNavigate();

  const handleResetPhone = (data) => {
    toast.info("Coming soon");
  };

  return (
    <Box sx={{ width: "100%", mt: { xs: 0, md: 3 } }}>
      <form onSubmit={handleSubmit(handleResetPhone)}>
        <CountryPhoneNumber
          variant="outlined"
          placeholder="Type here"
          control={control}
          name="number"
          fullWidth
          errorMessage={errors?.number?.message}
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

export default PhoneTab;
