import { Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/backIcon.svg";
import UIButton from "../../components/Button/UIButton";
import { useNavigate } from "react-router-dom";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../store/actions/darkMode";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UIDivider from "../../components/UIDivider";

const Header = ({ heading, description }) => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={6}>
        <IconButton
          m={2}
          onClick={() => navigate(-1)}
          sx={{ "& > svg": { color: (theme) => theme.palette.primary.main } }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      {/* <Grid item xs={5.5} display="flex" justifyContent="flex-end">
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            handleDarkModeClick();
          }}
          color="inherit"
        >
          {dark ? (
            <Brightness7Icon sx={{ color: "white" }} />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Grid> */}
      <Grid item xs={12}>
        <UITypogrpahy type="heading" title={heading} textAlign="center" />
      </Grid>
      <Grid item xs={12}>
        <UITypogrpahy title={description} textAlign="center" />
      </Grid>
      <Grid item xs={12} mt={3} px={3}>
        <UIDivider />
      </Grid>
    </Grid>
  );
};

export default Header;
