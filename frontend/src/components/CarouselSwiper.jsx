import React from "react";
import { Link } from "react-router-dom";

// IMAGES
import gowBanner from "../assets/images/home_banner/Header_Banner-GoW.jpg";
import ratchetBanner from "../assets/images/home_banner/Header_Banner-Ratchet.jpg";
import xboxBanner from "../assets/images/home_banner/Header_Banner-Xbox_Series_S.jpg";

// PACKAGES
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper/core";

// STYLE
import "../styles/carouselSwiper.css";

SwiperCore.use([Autoplay, EffectFade]);

// Used on 'Homepage', right under the NAVBAR
const CarouselSwiper = () => {
  return (
    <Swiper
      className="mySwiper"
      speed={1000}
      slidesPerView={1}
      spaceBetween={1}
      loop={true}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect={"fade"}
    >
      <SwiperSlide>
        <a href="/products/consoles/610729775559cf29bcb4e5a4">
          <img
            src={gowBanner}
            alt="God of War Banner"
            className="carousel-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/products/games/612ec67751895f450c4f8a3e">
          <img
            src={ratchetBanner}
            alt="Ratchet & Clank Banner"
            className="carousel-img"
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/products/consoles/610729775559cf29bcb4e5a7">
          <img
            src={xboxBanner}
            alt="Xbox Series X Banner"
            className="carousel-img"
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselSwiper;
