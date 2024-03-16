import React from "react";
import {
  UIDescriptionTypography,
  UIHeadingTypography,
  UISubDescriptionTypography,
  UISubHeadingTypography,
} from "./ui";

const UITypogrpahy = ({ type, title, isGrey, ...props }) => {
  return (
    <>
      {type === "heading" ? (
        <UIHeadingTypography fontSize={{ xs: "20px", md: "26px" }} {...props}>
          {title}
        </UIHeadingTypography>
      ) : type === "subheading" ? (
        <UISubHeadingTypography {...props}>{title}</UISubHeadingTypography>
      ) : type === "subpara" ? (
        <UISubDescriptionTypography {...props}>
          {title}
        </UISubDescriptionTypography>
      ) : (
        <UIDescriptionTypography isGrey={isGrey} {...props}>
          {title}
        </UIDescriptionTypography>
      )}
    </>
  );
};

export default UITypogrpahy;
