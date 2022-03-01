import React, { useEffect, useState } from "react";

// PACKAGES
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// STYLE
import "../styles/trendSwiper.css";

// IMAGES
import gow from "../assets/images/trending/God_of_War-PS4.jpg";
import souls from "../assets/images/trending/Demons_Souls-PS5.jpg";
import witcher from "../assets/images/trending/witcher_3-goty-PS4.jpg";
import ratchet from "../assets/images/trending/Ratchet_&_Clank-PS5.jpg";
import lou from "../assets/images/trending/The_Last_of_Us_Part_II-PS5.jpg";
import mario from "../assets/images/trending/Super_Mario_Odyssey-Switch.jpg";
import flight from "../assets/images/trending/Flight_Simulator-Xbox_Series_X.jpg";
import redemption from "../assets/images/trending/Red_Dead_Redemption_2-PS4.jpg";
import uncharted from "../assets/images/trending/Uncharted_4_-A_Thiefs_End-PS4.jpg";
import zelda from "../assets/images/trending/The_Legend_of_Zelda-Breath_of_the_Wild-Switch.jpg";

// Appears in 'TRENDING' section on HOMEPAGE
const TrendSwiper = () => {
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
        slidesPerView={slides}
        spaceBetween={spaceBtw}
        speed={900}
        className="mySwiper"
        loop={true}
        className="trend-container"
      >
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e609fc" className="trend">
            <img
              src={souls}
              alt="Demon's Souls"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e60a03" className="trend">
            <img
              src={flight}
              alt="Microsoft Flight Simulator"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e609fa" className="trend">
            <img
              src={gow}
              alt="God of War"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/612ec67751895f450c4f8a3e" className="trend">
            <img
              src={ratchet}
              alt="Ratchet & Clank: Rift Apart"
              className="trend"
              // style={{ width: "75%" }}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e609fe" className="trend">
            <img
              src={redemption}
              alt="Red Dead Redemption"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e60a0b" className="trend">
            <img
              src={mario}
              alt="Super Mario Odyssey "
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e609fb" className="trend">
            <img
              src={lou}
              alt="The Last of Us 2"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e60a0a" className="trend">
            <img
              src={zelda}
              alt="Zelda: Breath of the Wild"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/6121b9142b8da63678acb9df" className="trend">
            <img
              src={uncharted}
              alt="Uncharted 4"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/products/games/610899ab7be4872050e609fd" className="trend">
            <img
              src={witcher}
              alt="Witcher 3: GOTY"
              // style={{ width: "75%" }}
              className="trend"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TrendSwiper;
