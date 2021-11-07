import React, { useEffect, useState } from "react";

// PACKAGES
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";

// STYLES
import "../styles/singlePropSlides.css";
import "../vendor/swiper-bundle.min.css";

SwiperCore.use([Navigation, Thumbs]);

// Gallery used for ALL products except 'games'
const ProductSwiper = ({ images }) => {
  const [productImages, setProductImages] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    images.forEach((each) => productImages.push(each));
  }, [images, productImages]);

  return (
    <>
      <Swiper
        id="main"
        // style={{ width: "100%" }}
        thumbs={{ swiper: thumbsSwiper }}
        speed={500}
        navigation
        slidesPerView={1}
      >
        {productImages &&
          productImages.map((each, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={each} alt={`slide`} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <Swiper
        id="thumbs"
        className="thumbsProduct"
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
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
