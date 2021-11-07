import React from "react";
import { Link } from "react-router-dom";

// STYLE
import "../styles/footer.css";

// IMAGES IMPORT
import twitterLogo from "../assets/icons/twitter.png";
import youtubeLogo from "../assets/icons/youtube.png";
import appstoreIcon from "../assets/images/appstore.svg";
import facebookLogo from "../assets/icons/facebook.png";
import instagramLogo from "../assets/icons/instagram.png";
import playstoreIcon from "../assets/images/playstore_icon.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="find">
          <h4 className="find">Products</h4>
          <ul>
            <li>
              <a href="/product/consoles">Consoles</a>
            </li>
            <li>
              <a href="/product/games">Video Games</a>
            </li>
            <li>
              <a href="/product/accessories">Accessories</a>
            </li>
            <li>
              <a href="/product/merchandises">Merchandise</a>
            </li>
          </ul>
        </div>
        <div className="help">
          <h4 className="help">Get Help</h4>
          <ul>
            <li>
              <Link to="#">Contact us</Link>
            </li>
            <li>
              <Link to="#">Store feedback</Link>
            </li>
            <li>
              <Link to="#">Order enquiry</Link>
            </li>
            <li>
              <Link to="#">Covid-19 protocols</Link>
            </li>
          </ul>
        </div>
        <div className="about">
          <h4 className="about">About</h4>
          <ul>
            <li>
              <Link to="#">Store locations</Link>
            </li>
            <li>
              <Link to="#">About Game Street</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="app">
          <h4 className="app-title">Mobile App</h4>
          <div className="img-container">
            <div className="app-playstore">
              <img
                src={playstoreIcon}
                alt="Google Playstore Logo"
                className="playstore"
              />
            </div>
            <div className="app-appstore">
              <img
                src={appstoreIcon}
                alt="Apple App Store"
                className="appstore"
              />
            </div>
          </div>
        </div>
        <div className="signup">
          <h4 className="signup-title">Sign up</h4>
          <p className="signup-description">
            Subscribe to receive exclusive promotions, coupons and news on
            latest events:
          </p>
          <form className="signup-form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button className="signup-btn">Join</button>
          </form>
        </div>
        <div className="connect">
          <h4 className="connect-title">Connect</h4>
          <div className="social-flex">
            <div className="connect-youtube">
              <img src={youtubeLogo} alt="Youtube Logo" />
            </div>
            <div className="connect-twitter">
              <img src={twitterLogo} alt="Twitter Logo" />
            </div>
            <div className="connect-facebook">
              <img src={facebookLogo} alt="Facebook Logo" />
            </div>
            <div className="connect-instagram">
              <img src={instagramLogo} alt="Instagram Logo" />
            </div>
          </div>
        </div>
        {/* <p className="copyright">
          Copyright (COPYRIGHT glyph) 2021 Game Street LLC. All Rights Reserved.
        </p> */}
      </footer>
    </>
  );
};

export default Footer;
