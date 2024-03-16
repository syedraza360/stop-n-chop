import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination , Autoplay} from "swiper/modules";
import homeBanner1 from "../../assets/images/homeBanner1.png";
import homeBanner2 from "../../assets/images/homeBanner2.png";
import homeBanner3 from "../../assets/images/homeBanner3.png";
import homeBanner4 from "../../assets/images/homeBanner4.png";
import { Box, Grid } from "@mui/material";
import { SliderBanner } from "./ui";
import bannerLogo from "../../assets/images/bannerLogo.png";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";

const HomeSlider = () => {
  const arr = [
    {
      image: homeBanner1,
    },
    {
      image: homeBanner2,
    },
    {
      image: homeBanner3,
    },
    {
      image: homeBanner4,
    },
  ];
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {arr.map((item) => {
        return (
          <SwiperSlide>
            <Grid container>
              <Grid item xs={12}>
                <SliderBanner img={item.image}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: "100%",
                      height: "90%",
                    }}
                  >
                    <img src={bannerLogo} alt="bannerlogo" />
                  </Box>
                </SliderBanner>
              </Grid>
            </Grid>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
