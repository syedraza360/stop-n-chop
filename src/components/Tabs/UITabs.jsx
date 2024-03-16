import React from "react";
import { TabBoxWrapper, UIStyledTabs } from "./ui";
import { Tabs } from "@mui/material";

const UITabs = ({ value, onChange, children, centered, sx, ...props }) => {
  return (
    <TabBoxWrapper>
      <UIStyledTabs
        value={value}
        onChange={onChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: (theme) => theme.palette.primary.tabDivider,
          },
        }}
        sx={sx}
        {...props}
      >
        {children}
      </UIStyledTabs>
    </TabBoxWrapper>
  );
};

export default UITabs;
