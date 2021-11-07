import React from "react";

// STYLE
import "../styles/screenBgd.css";

// IMAGE
import bundleWallpaper from "../assets/images/bundle_red.jpg";

// A faded black background appearing on ALL single game/product pages
const ScreenBgd = ({
  grayScale = 1,
  brightNess = "35%",
  bluriness = "3px",
}) => {
  return (
    <>
      <img
        src={bundleWallpaper}
        alt=""
        className="body-bgd"
        style={{
          filter: `brightness(${brightNess}) grayscale(${grayScale}) blur(${bluriness})`,
        }}
      />
    </>
  );
};

export default ScreenBgd;
