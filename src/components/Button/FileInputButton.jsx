import React, { useRef } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import {
  FileAvatar,
  Input,
  UIBoxInput,
  UIFileImg,
  UIFileMainBox,
  UILoadingBox,
  UIStyledInputButton,
} from "./ui";
import cloudIcon from "../../assets/images/CloudIcon.svg";
import UITypogrpahy from "../UITypography/UITypogrpahy";
import CameraIcon from "../../assets/images/cameraIcon.png";
import PersonIcon from "@mui/icons-material/Person";
import CircularProgress from "@mui/material/CircularProgress";

const FileInputButton = ({
  isFileUpload,
  data,
  _handleChangeImage,
  isWithoutBg,
  srcImg,
  isImageUploading,
  ...props
}) => {
  const fileInputRef = useRef(null);

  const _handleInputClick = (e) => {
    fileInputRef.current.click();
  };

  return (
    <>
      {isWithoutBg && (
        <UIStyledInputButton data={data} disableRipple>
          <Stack direction="column" alignItems="center" spacing={0}>
            <Input
              accept="image/*"
              ref={fileInputRef}
              type="file"
              onChange={_handleChangeImage}
            />
            {isImageUploading ? (
              <UILoadingBox>
                <CircularProgress sx={{ height: 100, width: 100 }} />
              </UILoadingBox>
            ) : (
              <UIFileMainBox>
                {srcImg ? (
                  <UIFileImg src={srcImg} alt="img" {...props} />
                ) : (
                  <FileAvatar>
                    <PersonIcon fontSize="large" />
                  </FileAvatar>
                )}
                <UIBoxInput onClick={_handleInputClick}>
                  {!data?.imagePath && !isFileUpload && (
                    <img src={CameraIcon} alt="camera" height={30} />
                  )}
                </UIBoxInput>
              </UIFileMainBox>
            )}
          </Stack>
        </UIStyledInputButton>
      )}
    </>
  );
};

export default FileInputButton;
