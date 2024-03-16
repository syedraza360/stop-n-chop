import React from "react";
import { UIModalBox, UIModalWrapper } from "./ui";
import { Grid, IconButton, Stack } from "@mui/material";
import UITypogrpahy from "../UITypography/UITypogrpahy";
import UIButton from "../Button/UIButton";
import { ReactComponent as AppointmentSuccess } from "../../assets/images/appointmentSuccess.svg";
import ClearIcon from "@mui/icons-material/Clear";

const UIModalSuccess = ({
  open,
  setOpen,
  heading,
  description,
  width,
  onClick,
  ...props
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <UIModalWrapper
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      width={width}
    >
      <UIModalBox>
        <Grid container gap={2} justifyContent="center">
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <ClearIcon
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={11}>
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <AppointmentSuccess />
              <UITypogrpahy title={heading} type="heading" />
              <UITypogrpahy title={description} textAlign="center" />
              <UIButton
                btnType="simple"
                variant="contained"
                label={"Done"}
                onClick={onClick}
                sx={{ height: "45px", borderRadius: "10px" }}
                fullWidth
                {...props}
              />
            </Stack>
          </Grid>
        </Grid>
      </UIModalBox>
    </UIModalWrapper>
  );
};

export default UIModalSuccess;
