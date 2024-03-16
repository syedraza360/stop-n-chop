import { Box, Popover } from "@mui/material";
import React, { useState } from "react";
import { UIStyledPopover } from "./ui";

const UIPopover = ({ anchorEl, setAnchorEl, children, ...props }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <UIStyledPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      disableScrollLock
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    >
      <Box sx={{ backgroundColor: (theme) => theme.palette.primary.white }}>
        {children}
      </Box>
    </UIStyledPopover>
  );
};

export default UIPopover;
