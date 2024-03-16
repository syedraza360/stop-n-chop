import React from "react";
import { UIStyledLoaderBox } from "./ui";
import { DotLoader } from "react-spinners";
import Lottie from "lottie-react";
import LoaderJson from "../../assets/Loader.json";

const Loader = ({ ...props }) => {
  return (
    <UIStyledLoaderBox {...props}>
      <Lottie
        animationData={LoaderJson}
        loop={true}
        style={{ height: "60vh" }}
      />
    </UIStyledLoaderBox>
  );
};

export default Loader;
