import { Box, Grid } from "@mui/material";
import React from "react";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const SubscribedCard = ({ type, category, amount, remainingAmount }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.blackBtn,
        padding: "15px",
        borderRadius: "16px",
        border: `1px solid #ffbe59`,
      }}
    >
      <Grid container gap={2}>
        <Grid item xs={7}>
          <UITypogrpahy type="heading" title={type} />
          <UITypogrpahy title={category} sx={{ mt: 1 }} />
          <UITypogrpahy
            title={`Remaining amount: $${remainingAmount}`}
            sx={{ mt: 1 }}
          />
        </Grid>
        <Grid item xs={3}>
          <UITypogrpahy
            title={`$${amount}`}
            textAlign="end"
            sx={{ color: (theme) => theme.palette.secondary.main }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubscribedCard;
