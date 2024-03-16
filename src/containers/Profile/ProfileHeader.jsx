import { Avatar, Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UIButton from "../../components/Button/UIButton";
import { ReactComponent as BackIcon } from "../../assets/icons/backIcon.svg";
import { UIImage } from "./ui";
import profileImage from "../../assets/images/profileImage.jpg";
import FileInputButton from "../../components/Button/FileInputButton";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UIDivider from "../../components/UIDivider";
import profileImg from "../../assets/images/profileImage.jpg";
import { useSelector } from "react-redux";

const ProfileHeader = ({
  heading,
  email,
  number,
  name,
  isEditProfile,
  isBackButton,
  isDrawer,
  srcImg,
  isImageUploading,
  _handleChangeImage,
}) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.GetUserProfileReducer?.res);
  const uploadImageReducer = useSelector((state) => state?.UploadImageReducer);

  const [data, setData] = useState({});
  const [avatarName, setAvatarName] = useState("");

  useEffect(() => {
    if (userData?.res?.success) {
      if (Object.keys(uploadImageReducer).length) {
        setData(uploadImageReducer);
      } else {
        setData(userData?.res?.data);
      }

      setAvatarName(data?.username?.charAt(0));
    }
  }, [userData?.res?.success, uploadImageReducer?.profilePicture]);


  const [formateNumber, setFormateNumber] = useState("");

  useEffect(() => {
    let first = number?.slice(1, 4);
    let second = number?.slice(4, 7);
    let third = number?.slice(7, 11);
    setFormateNumber(`(${first}) ${second}-${third}`);
  }, [number]);

  return (
    <Grid container justifyContent={{ xs: "center", md: "flex-start" }}>
      {isBackButton && (
        <Grid item xs={12}>
          <IconButton
            onClick={() => navigate(-1)}
            sx={{ "& > svg": { color: (theme) => theme.palette.primary.main } }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Grid>
      )}
      {isDrawer && (
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          {!data?.profilePicture ? (
            <Avatar
              sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}
            >
              {avatarName}
            </Avatar>
          ) : (
            <img
              src={data?.profilePicture}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              height={90}
              width={90}
              alt="p_image"
            />
          )}
        </Grid>
      )}

      {isEditProfile && (
        <Grid item xs={2} mt={3} display="flex" justifyContent="center">
          <FileInputButton
            isWithoutBg={true}
            isFileUpload={false}
            data={srcImg}
            _handleChangeImage={_handleChangeImage}
            srcImg={srcImg}
            isImageUploading={isImageUploading}
          />
        </Grid>
      )}
      <Grid item xs={12} mt={0.8}>
        <UITypogrpahy
          title={data?.name}
          type={"subheading"}
          textAlign="center"
        />
      </Grid>
      <Grid item xs={12} mt={0.8}>
        <UITypogrpahy title={data.email} textAlign="center" />
      </Grid>
      <Grid item xs={12} mt={3} px={1}>
        <UIDivider />
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
