import React, { useState } from "react";
import { ImageWrapper } from "./ui";
import Stepper from "./Stepper";

const Index = () => {
  const [isActive, setIsActive] = useState({
    step1: true,
    step2: false,
    step3: false,
  });

  return (
    <>
      <ImageWrapper isActive={isActive} />
      <Stepper setIsActive={setIsActive} isActive={isActive} />
    </>
  );
};

export default Index;
