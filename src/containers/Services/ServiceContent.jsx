import { Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const ServiceContent = ({
  tabsArr,
  value,
  isSelected,
  handleBasicCut,
  services,
}) => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style={{ width: "100%" }}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  return (
    <>
      {tabsArr?.map((item, i) => {
        return (
          <TabPanel value={value} index={i}>
            <Grid
              container
              spacing={2}
              mt={1}
              height={290}
              sx={{ overflowY: "auto" }}
            >
              {services?.length > 0 ? (
                services?.map((elm, ind) => {
                  return (
                    <Grid item xs={12} md={4}>
                      <Cards
                        onClick={() => handleBasicCut(elm)}
                        isSelected={isSelected}
                        ind={elm?._id}
                        heading={elm?.category}
                        price={`$${elm?.amount}`}
                      />
                    </Grid>
                  );
                })
              ) : (
                <UITypogrpahy
                  sx={{ mt: 3, ml: 2  }}
                  type="subheading"
                  title="No Services Available"
                />
              )}
            </Grid>
          </TabPanel>
        );
      })}
    </>
  );
};

export default ServiceContent;
