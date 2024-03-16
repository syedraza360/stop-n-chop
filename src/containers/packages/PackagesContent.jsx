import { Grid } from "@mui/material";
import React from "react";
import UIButton from "../../components/Button/UIButton";
import { useNavigate } from "react-router-dom";
import SubscriptionContainer from "../Subscription/SubscriptionContainer";

const PackagesContent = ({ value, item, i, description }) => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  const navigate = useNavigate();

  return (
    <TabPanel value={value} index={i}>
      <SubscriptionContainer
        heading={item.type}
        description={description}
        savingsTitle={"-10% saving"}
        price={""}
        types={item.category}
      />
      <Grid container justifyContent={"center"} mb={4}>
        <Grid item xs={12} md={4}>
          <UIButton
            label="Next"
            btnType="simple"
            variant="contained"
            fullWidth
            sx={{ margin: "40px 0px" }}
            onClick={() => navigate("/payment")}
          />
        </Grid>
      </Grid>
    </TabPanel>
  );
};

export default PackagesContent;
