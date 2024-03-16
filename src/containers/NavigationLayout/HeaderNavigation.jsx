import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router";
import { useState } from "react";
import { headerRoutes } from "../../utils/NavPathLocations";
import { UIListItemButton, Main, AppBar, DrawerHeader, MainDrawer } from "./ui";
import UIPopover from "../../components/Popover/UIPopover";
import NotificationBar from "../NotificationContainer/NotificationBar";
import { useDispatch, useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIconWhite from "../../assets/icons/menu-white.png";
import { ReactComponent as HeaderLogo } from "../../assets/images/logo-svg.svg";
import DrawerNavigation from "./DrawerNavigation";

const drawerWidth = 340;

const HeaderNavigation = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRedirect = (index, item) => {
    navigate(item.path);
  };

  // #region popover
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //#endregion

  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          drawerWidth={drawerWidth}
          sx={{
            background: (theme) => theme.palette.primary.white,
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 100px !important",
            }}
          >
            <Box sx={{ "&:hover": { cursor: "pointer" } }}>
              <HeaderLogo style={{ height: "40px", width: "167px" }} />
            </Box>
            <Box>
              <List>
                <ListItem disablePadding>
                  {headerRoutes.map((item, i) => {
                    return (
                      <UIListItemButton
                        path={item.path}
                        onClick={() => handleRedirect(i, item)}
                      >
                        <ListItemText primary={item.text} />
                      </UIListItemButton>
                    );
                  })}
                </ListItem>
              </List>
            </Box>
            <Box>
              {/* <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  handleDarkModeClick();
                }}
                color="inherit"
              >
                {dark ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton> */}
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleClick}
                sx={{
                  // ...(open && { display: "none" }),
                  marginRight: "40px",
                  "* & > svg": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <NotificationsNoneIcon />
              </IconButton>
              <UIPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
                <Box sx={{ width: "450px" }}>
                  <NotificationBar />
                </Box>
              </UIPopover>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                // onClick={handleDrawerOpen}
                onClick={toggleDrawer("right", true)}
                sx={{ ...(open && { display: "none" }) }}
              >
                <img src={MenuIconWhite} alt="menu" height={30} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Main open={open} drawerWidth={drawerWidth}>
          <DrawerHeader />
        </Main>
        <DrawerNavigation state={state} toggleDrawer={toggleDrawer} />
      </Box>
      <Box>{props.children}</Box>
    </>
  );
};

export default HeaderNavigation;
