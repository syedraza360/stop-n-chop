import { Box } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import LoaderJson from "../../assets/animatedLogo.json";

const InitalLoader = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", background: "#0d0d0d" }}>
      <Lottie
        animationData={LoaderJson}
        loop={true}
        style={{ height: "100vh" }}
      />
    </Box>
  );
};

export default InitalLoader;
