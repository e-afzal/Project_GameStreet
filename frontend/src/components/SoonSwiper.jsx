import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// PACKAGE
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// STYLE
import "../styles/soonSwiper.css";

// IMAGES
import fifa from "../assets/images/upcoming/FIFA_22-PS5.jpg";
import nfl from "../assets/images/upcoming/Madden_NFL_22-PS5.jpg";
import mario from "../assets/images/upcoming/Mario_Golf-Super_Rush-Switch.jpg";
import forza from "../assets/images/upcoming/Forza_Horizon_5-Xbox_Series_X.jpg";
import dyingLight from "../assets/images/upcoming/Dying_Light_2-Deluxe_Edition-PS4.jpg";

// Appears on HOMEPAGE in the 'Coming Soon' section
const SoonSwiper = () => {
  const [slides, setSlides] = useState(5);
  const [spaceBtw, setSpaceBtw] = useState(45);

  useEffect(() => {
    if (window.innerWidth <= 650) {
      setSlides(3);
      setSpaceBtw(20);
    } else if (window.innerWidth <= 850) {
      setSlides(3);
    } else if (window.innerWidth > 850) {
      setSlides(5);
    }
  }, [slides]);
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={slides}
        spaceBetween={spaceBtw}
        speed={900}
        className="soon-container"
        loop={true}
      >
        <SwiperSlide>
          <Link to="/products/games/6121b881fb1d81202c1cb212" className="soon">
            <img src={dyingLight} alt="Dying Light 2" className="soon" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/products/games/6121b8878334f437d07b20b1" className="soon">
            <img src={forza} alt="Forza Horizon 5" className="soon" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/products/games/6121b6ccdce536120423bb49" className="soon">
            <img src={fifa} alt="Fifa 22" className="soon" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/products/games/6121b88cb0d1412c6c5d988a" className="soon">
            <img src={mario} alt="Mario Golf - Super Rush" className="soon" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/products/games/6121b8ca0df85739e87895ed" className="soon">
            <img src={nfl} alt="Madden NFL 22" className="soon" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SoonSwiper;
