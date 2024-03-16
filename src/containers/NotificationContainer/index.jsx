import { Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { UIImageBox } from "./ui";
import profileImg from "../../assets/images/profileImage.jpg";
import UIPopover from "../../components/Popover/UIPopover";
import { ReactComponent as SettingIcon } from "../../assets/icons/settingIcon.svg";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import UIDivider from "../../components/UIDivider";

const Index = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container>
      <Grid item xs={4} md={2} justifySelf="center">
        <UIImageBox src={profileImg} />
      </Grid>
      <Grid item xs={6}>
        <UITypogrpahy title="Congratulations!, your first appointment has been confirmed" />
      </Grid>
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <MoreVertRoundedIcon
          sx={{ color: (theme) => theme.palette.primary.main }}
          onClick={handleClick}
        />
        <UIPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
          <UITypogrpahy
            title="Delete"
            sx={{ p: 2, "&:hover": { cursor: "pointer" } }}
          />
        </UIPopover>
      </Grid>
    </Grid>
  );
};

export default Index;
