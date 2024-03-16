import { Grid, IconButton } from "@mui/material";
import React from "react";
import { ImageBox, ImageWrapper } from "./ui";
import UIButton from "../../components/Button/UIButton";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";

const BookingHeader = () => {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <ImageWrapper>
          <Grid container sx={{ display: { xs: "block", md: "none" } }}>
            <Grid item xs={2} p={2}>
              <IconButton
                sx={{ backgroundColor: "black" }}
                onClick={() => navigate("/home")}
              >
                <ArrowBackRoundedIcon
                  fontSize="small"
                  sx={{ color: "white" }}
                />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6} md={2}>
              <ImageBox />
            </Grid>
          </Grid>
        </ImageWrapper>
      </Grid>
    </Grid>
  );
};

export default BookingHeader;
