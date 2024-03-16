import React from "react";
import { UIModalBox, UIModalWrapper } from "./ui";
import UITypogrpahy from "../UITypography/UITypogrpahy";
import { Grid } from "@mui/material";
import UIButton from "../Button/UIButton";

const UIModal = ({ open, setOpen, description, width, onClick,sx, ...props }) => {
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
      <UIModalBox sx={sx}>
        <Grid container gap={2}>
          <Grid item xs={12}>
            <UITypogrpahy title={"Are you sure"} type="heading" />
          </Grid>
          {description && (
            <Grid item xs={12}>
              <UITypogrpahy title={description} />
            </Grid>
          )}
        </Grid>
        <Grid container mt={1} justifyContent="center" spacing={3}>
          <Grid item xs={5} md={4}>
            <UIButton
              btnType="simple"
              variant="contained"
              label={"No"}
              onClick={handleClose}
              fullWidth
              sx={{ height: "45px", borderRadius: "10px" }}
              {...props}
            />
          </Grid>
          <Grid item xs={5} md={4}>
            <UIButton
              btnType="simple"
              variant="contained"
              label={"Yes"}
              onClick={onClick}
              sx={{ height: "45px", borderRadius: "10px" }}
              fullWidth
              {...props}
            />
          </Grid>
        </Grid>
      </UIModalBox>
    </UIModalWrapper>
  );
};

export default UIModal;
