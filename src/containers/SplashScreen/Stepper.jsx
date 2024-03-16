import { Grid, Slide, Typography } from "@mui/material";
import React, { useState } from "react";
import { DotBox1, DotBox2, DotBox3, StepperBox } from "./ui";
import UIButton from "../../components/Button/UIButton";
import { useNavigate } from "react-router-dom";
import Steps from "./Steps";

const Stepper = ({ isActive, setIsActive }) => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  return (
    <StepperBox>
      <Grid container justifyContent="space-between" alignItems='center' px={1} py={2.5}>
        <Grid
          item
          xs={4}
          sm={3}
          md={1}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <DotBox1
            isActive={isActive}
            onClick={() => {
              setStep(1);
              setIsActive({ step1: true, step2: false, step3: false });
            }}
          />
          <DotBox2
            isActive={isActive}
            onClick={() => {
              setIsActive({ step1: false, step2: true, step3: false });
              setStep(2);
            }}
          />
          <DotBox3
            isActive={isActive}
            onClick={() => {
              setStep(3);
              setIsActive({ step1: false, step2: false, step3: true });
            }}
          />
        </Grid>
        {step !== 3 && (
          <Grid item xs={4} md={1} display="flex" justifyContent="center">
            <UIButton
              label="Sign in"
              btnType="simple"
              onClick={() => navigate("/login")}
              sx={{ padding: 0, color: "white !important" }}
            />
          </Grid>
        )}
      </Grid>

      {/* Step 1 */}
      {step == 1 && (
        <>
          <Steps
            title="to Stop-N-Chop!"
            description="A social platform to connect with your favorite service providers or your favorite customers."
            step={step}
            btnTitle="Next"
            isActive={isActive}
            btn1cb={() => {
              setStep(2);
              setIsActive({ step1: false, step2: true, step3: false });
            }}
          />
        </>
      )}

      {/* Step 2 */}
      {step == 2 && (
        <>
          <Steps
            title="to Stop-N-Chop!"
            description="A social platform to connect with your favorite service providers or your favorite customers."
            step={step}
            btnTitle="Next"
            isActive={isActive}
            btn1cb={() => {
              setStep(3);
              setIsActive({ step1: false, step2: false, step3: true });
            }}
          />
        </>
      )}

      {/* Step 3 */}
      {step == 3 && (
        <>
          <Steps
            title="to Stop-N-Chop!"
            description="A social platform to connect with your favorite service providers or your favorite customers."
            step={step}
            btnTitle="Member Login"
            isActive={isActive}
            btn1cb={() => navigate("/login")}
            btn2cb={() => navigate("/sign-up")}
          />
        </>
      )}
    </StepperBox>
  );
};

export default Stepper;
