import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { UIImageBoxWeb } from "./ui";
import profileImg from "../../assets/images/profileImage.jpg";
import UIPopover from "../../components/Popover/UIPopover";
import { ReactComponent as SettingIcon } from "../../assets/icons/settingIcon.svg";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UIDivider from "../../components/UIDivider";

const NotificationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.white,
      }}
    >
      <Grid container p={2}>
        <Grid item xs={12}>
          <UITypogrpahy
            sx={{ fontSize: "24px !important" }}
            title={"Notifications"}
            type="heading"
          />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
      </Grid>
      <Grid container p={2} alignItems="center">
        <Grid item md={2} justifySelf="center">
          <UIImageBoxWeb src={profileImg} />
        </Grid>
        <Grid item xs={8}>
          <UITypogrpahy title="Congratulations!, your first appointment has been confirmed" />
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={handleClick}
            sx={{
              "* & > svg": { color: (theme) => theme.palette.primary.main },
            }}
          >
            <MoreVertIcon />
          </IconButton>
          <UIPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <Box
              sx={{ backgroundColor: (theme) => theme.palette.primary.white }}
            >
              <UITypogrpahy
                title="Delete"
                sx={{ p: 2, "&:hover": { cursor: "pointer" } }}
              />
            </Box>
          </UIPopover>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotificationBar;
