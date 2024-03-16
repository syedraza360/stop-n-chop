import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Avatar, Paper } from "@mui/material";
import { useNavigate } from "react-router";
import { routes } from "../../utils/NavPathLocations";
import profileImage from "../../assets/images/profileImage.jpg";
import InitalLoader from "../../components/Loader/InitalLoader";

const BottomNavigations = (props) => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    routes.map((item, i) => {
      if (window.location.pathname == item.path) {
        setValue(i);
      }
    });
  }, []);

  return (
    <>
      <Box sx={{ display: "block", minHeight: '90%' }}>{props.children}</Box>
      <Box sx={{ width: "100%", display: "block", minHeight: "10%" }}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999 }}
          elevation={3}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              navigate(`${routes[newValue].path}`);
            }}
            sx={{ background: (theme) => theme.palette.primary.white }}
          >
            {routes &&
              routes.map(({ text, Icon, path }, i) => {
                return (
                  <BottomNavigationAction
                    key={i}
                    // label={text}
                    sx={{
                      "> svg > path": {
                        stroke: (theme) =>
                          window.location.pathname === path
                            ? theme.palette.primary.black
                            : theme.palette.primary.main,
                        fill: (theme) =>
                          window.location.pathname === path
                            ? theme.palette.secondary.main
                            : "transparent",
                      },
                      "&:last-child": {
                        "> svg > path": {
                          stroke: (theme) =>
                            window.location.pathname === path
                              ? theme.palette.secondary.main
                              : theme.palette.primary.main,
                        },
                      },
                    }}
                    icon={<Icon />}
                  />
                );
              })}
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default BottomNavigations;
