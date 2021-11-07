import React from "react";
import { Link } from "react-router-dom";

// STYLE
import "../styles/home.css";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";
import Metatag from "../components/Metatag";
import ScreenBgd from "./../components/ScreenBgd";
import SoonSwiper from "./../components/SoonSwiper";
import TrendSwiper from "./../components/TrendSwiper";
import CarouselSwiper from "./../components/CarouselSwiper";

// IMAGES
import ps4Bundle from "../assets/images/bundle_ps4.png";
import bundleWallpaper from "../assets/images/bundle_red.jpg";
import switchBlack from "../assets/images/consoles/Switch-Black.jpg";
import ps4Console from "../assets/images/consoles/PS4-PS4_Console.jpg";
import ps5Console from "../assets/images/consoles/PS5-PS5_Console.jpg";
import miles from "../assets/images/games/PS5-Miles_Morales-Ultimate_Edition.jpg";
import xboxSeriesS from "../assets/images/consoles/Series_X&S-Xbox_Series_S_Console.jpg";
import xboxController from "../assets/images/accessories/Series_X&S-Microsoft_Xbox_Series_X_Robot_White_Wireless_Controller.jpg";

const HomeScreen = () => {
  return (
    <>
      <Metatag />
      <ScreenBgd />
      <ScrollToTop />

      {/* CAROUSEL */}
      <section id="carousel">
        <CarouselSwiper />
      </section>
      {/* SECTION: TRENDING */}
      <section id="trending">
        <h2 className="trending-title">Trending</h2>
        <div className="trending-carousel">
          <TrendSwiper />
        </div>
      </section>
      {/* SECTION: PRODUCT CATEGORIES */}
      <section id="products">
        <div className="product-card">
          <img
            src={ps5Console}
            alt="Playstation 5 Console"
            className="product-image"
          />
          <div className="product-description">
            <h4 className="product-title">Playstation 5</h4>
            <Link to="/products/console/PS5" className="product-link">
              Shop All
            </Link>
          </div>
        </div>
        <div className="product-card">
          <img
            src={ps4Console}
            alt="Playstation 4 Console"
            className="product-image"
          />
          <div className="product-description">
            <h4 className="product-title">Playstation 4</h4>
            <Link to="/products/console/PS4" className="product-link">
              Shop All
            </Link>
          </div>
        </div>
        <div className="product-card">
          <img
            src={xboxSeriesS}
            alt="Xbox Series S Console"
            className="product-image"
          />
          <div className="product-description">
            <h4 className="product-title">Xbox Series X|S</h4>
            <Link
              to="/products/console/Xbox Series X|S"
              className="product-link"
            >
              Shop All
            </Link>
          </div>
        </div>
        <div className="product-card">
          <img
            src={switchBlack}
            alt="Nintendo Switch Console"
            className="product-image"
          />
          <div className="product-description">
            <h4 className="product-title">Nintendo Switch</h4>
            <Link
              to="/products/console/Nintendo Switch"
              className="product-link"
            >
              Shop All
            </Link>
          </div>
        </div>
        <div className="product-card">
          <img
            src={miles}
            alt="Spider Man Miles Morales Box Art"
            className="product-image"
          />
          <div className="product-description">
            <h4 className="product-title">Video Games</h4>
            <Link to="/product/games" className="product-link">
              Shop All
            </Link>
          </div>
        </div>
        <div className="product-card">
          <img
            src={xboxController}
            alt="Product Card"
            className="product-image"
          />
          <div className="product-description">
            <h4 className="product-title">Gaming Accessories</h4>
            <Link to="/product/accessories" className="product-link">
              Shop All
            </Link>
          </div>
        </div>
      </section>
      {/* SECTION: BUNDLE BANNER */}
      <section id="bundle-banner">
        <div className="bundle-bgd">
          <img src={bundleWallpaper} alt="PS4 Red Wallpaper" />
        </div>
        <div className="bundle-grid">
          <div className="bundle-content">
            <h2 className="bundle-title">Console bundle deals from AED 1259</h2>
            <p className="bundle-description">
              Play your way and experience the power of gaming at home or on the
              go
            </p>
            <Link to="/product/consoles" className="bundle-link">
              Shop all
            </Link>
          </div>
          <div className="bundle-img">
            <img src={ps4Bundle} alt="PS4 Bundle" />
          </div>
        </div>
      </section>
      {/* SECTION: UPCOMING */}
      <section id="soon">
        <h2 className="soon">Coming Soon</h2>
        <div className="soon-slider">
          <SoonSwiper />
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
