import React, { useEffect, useState } from "react";

// PACKAGES
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// STYLES
import "../styles/singleGameSlides.css";
import "../vendor/swiper-bundle.min.css";

SwiperCore.use([Navigation, Thumbs]);

// Gallery used on 'SingleGame' page
const GameSwiper = ({ images }) => {
  const [productImages, setProductImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    images.forEach((each) => productImages.push(each));
  }, [images, productImages]);

  return (
    <>
      <Swiper
        id="main"
        style={{ width: "100%" }}
        thumbs={{ swiper: thumbsSwiper }}
        speed={500}
        navigation
        slidesPerView={1}
        loop={false}
      >
        {productImages &&
          productImages.map((each, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={each} alt={`slide`} className="singleGameImg" />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Swiper
        id="thumbs"
        className="gameThumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
      >
        {productImages.map((each, index) => {
          return (
            <SwiperSlide key={`slide - ${index}`}>
              <img
                src={each}
                alt={`slide-${index}`}
                // style={{ width: "100%" }}
                className="gameThumbsImg"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default GameSwiper;
