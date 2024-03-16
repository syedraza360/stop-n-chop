import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { paymentSchema } from "./schema";
import { Box, Grid } from "@mui/material";
import UITextField from "../../components/InputField/UITextField";
import UIInputLabel from "../../components/InputLabel";
import UIButton from "../../components/Button/UIButton";
import { useSelector } from "react-redux";
import PaypalPayment from "../Payment/PaypalPayment";

const PaymentForm = () => {
  return (
    <Box p={{ xs: 2, md: 0 }} mt={7}>
      <PaypalPayment />
    </Box>
  );
};

export default PaymentForm;
