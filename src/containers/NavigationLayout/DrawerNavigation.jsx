import { Drawer, IconButton } from "@mui/material";
import React from "react";
import { DrawerHeader } from "./ui";
import Profile from "../../pages/Profile";
import CloseIcon from "@mui/icons-material/Close";

const DrawerNavigation = ({state, toggleDrawer}) => {
  return (
    <Drawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
      sx={{ ".MuiDrawer-paper": { width: "25% !important" } }}
    >
      <DrawerHeader>
        <IconButton
          // onClick={handleDrawerClose}
          onClick={toggleDrawer("right", false)}
          sx={{
            "& > svg": { color: (theme) => theme.palette.primary.main },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Profile isBackButton={false} isDrawer={true} />
    </Drawer>
  );
};

export default DrawerNavigation;
