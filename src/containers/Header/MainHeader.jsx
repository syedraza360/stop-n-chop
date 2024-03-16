import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/backIcon.svg";
import UIButton from "../../components/Button/UIButton";
import { useNavigate } from "react-router-dom";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

import { ReactComponent as DarkModeIcon } from "../../assets/icons/darkModeIcon.svg";
import { ReactComponent as LightModeIcon } from "../../assets/icons/lightModeIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../../store/actions/darkMode";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Logo from "../../assets/images/logo-mobile-dark.png";
import ProfileImg from "../../assets/images/profileImage.jpg";
import UIDivider from "../../components/UIDivider";
import { getUserProfile } from "../../store/actions/Profile";

const MainHeader = ({ heading, description }) => {
  const navigate = useNavigate();
  const uploadImageReducer = useSelector((state) => state?.UploadImageReducer);

  const getUserData = useSelector((state) => state?.GetUserProfileReducer?.res);
  const { dark } = useSelector((state) => state?.DarkModeReducer);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const userId = localStorage.getItem("userId");

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    setIsClicked(!isClicked);
    if (dark) {
      const dataObj = {
        darkMode: false,
      };
      dispatch(darkMode(dataObj));
    } else {
      const dataObj = {
        darkMode: true,
      };
      dispatch(darkMode(dataObj));
    }
  };

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, []);

  useEffect(() => {
    if (getUserData?.res?.success) {
      setUserData(getUserData?.res?.data);
    }
  }, [getUserData?.res?.success, uploadImageReducer?.profilePicture]);

  return (
    <Grid
      container
      py={3}
      px={2}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={3} alignSelf="center">
        <img src={Logo} height={20} />
      </Grid>
      <Grid item xs={4} sx={{ "&:hover": { cursor: "pointer" } }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          
          <Box
            onClick={() => navigate("/profile")}
            display="flex"
            alignItems="center"
          >
            {userData?.profilePicture ? (
              <img
                src={userData?.profilePicture}
                height={40}
                width={40}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            ) : (
              <Avatar></Avatar>
            )}
          </Box>
        </Box>
      </Grid>
      {heading !== "" && (
        <>
          <Grid item xs={12} mt={2}>
            <UITypogrpahy textAlign="center" type="heading" title={heading} />
          </Grid>
        </>
      )}
      {description !== "" && (
        <Grid item xs={12} mt={1}>
          <UITypogrpahy textAlign="center" title={description} />
        </Grid>
      )}
      <Grid item xs={12} mt={2}>
        <UIDivider />
      </Grid>
    </Grid>
  );
};

export default MainHeader;
