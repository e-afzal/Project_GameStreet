import React, { useEffect, useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";

// STYLE
import "../styles/navbar.css";

// PACKAGES
import { useDispatch, useSelector } from "react-redux";

// IMAGE IMPORT
import cartIcon from "../assets/icons/cart.svg";
import navbarIcon from "../assets/icons/navbar.png";
import logOutIcon from "../assets/icons/log_out.svg";
import closeIcon from "../assets/icons/cancel-icon.svg";
import userIcon from "../assets/icons/user_signup_login.svg";
import chevronLeftCrimson from "../assets/icons/Chevron-left-crimson.svg";
import gameStreetLogo from "../assets/images/GameStreet_Logo-Vertical.svg";
import gameStreetLogo2 from "../assets/images/GameStreet_Logo-Horizontal.svg";

// REDUX - ACTION
import { logout } from "../actions/userActions";

const Navbar = ({ history, borderBottom }) => {
  // TARGET ELEMENTS
  const desktopNav = useRef();
  const mobileNav = useRef();
  const menuImg = useRef();
  const overlay = useRef();
  const menuBlur = useRef();
  const overlayClose = useRef();
  const sidebarMenuContext = useRef();
  const sidebarCloseContextMenu = useRef();
  const dropdown = useRef();
  const dropdownMenu = useRef();
  const secondaryDropdown = useRef();
  const secDrpdwnPs4 = useRef();
  const secDrpdwnPs5 = useRef();
  const secDrpdwnXboxSeries = useRef();
  const secDrpdwnXboxOne = useRef();
  const secDrpdwnSwitch = useRef();
  const cartOrb = useRef();

  // TOGGLE DROPDOWN MENU
  const toggleDropdownMenu = () => {
    dropdownMenu.current.classList.toggle("active");
  };

  // TOGGLE SECONDARY DROPDOWN
  const togglePS4DrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.toggle("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const togglePS5DrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.toggle("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const toggleXboxSeriesDrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.toggle("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const toggleXboxOneDrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.toggle("active");
      secDropdownLoop[4].ref.current.classList.remove("active");
    }
  };
  const toggleSwitchDrpdwnMenu = () => {
    for (let i = 0; i < secDropdownLoop.length; i++) {
      secDropdownLoop[0].ref.current.classList.remove("active");
      secDropdownLoop[1].ref.current.classList.remove("active");
      secDropdownLoop[2].ref.current.classList.remove("active");
      secDropdownLoop[3].ref.current.classList.remove("active");
      secDropdownLoop[4].ref.current.classList.toggle("active");
    }
  };

  // SECONDARY-DROPDOWN consts
  let secDropdownLoop = [
    {
      platform: "PS4",
      platformFull: "Playstation 4",
      items: [
        { category: "Consoles", link: `/products/search/PS4/consoles` },
        { category: "Games", link: `/products/search/PS4/games` },
        { category: "Accessories", link: `/products/search/PS4/accessories` },
      ],
      ref: secDrpdwnPs4,
      click: togglePS4DrpdwnMenu,
    },
    {
      platform: "PS5",
      platformFull: "Playstation 5",
      items: [
        { category: "Consoles", link: `/products/search/PS5/consoles` },
        { category: "Games", link: `/products/search/PS5/games` },
        { category: "Accessories", link: `/products/search/PS5/accessories` },
        { category: "Merchandises", link: `/products/search/PS5/merchandises` },
      ],
      ref: secDrpdwnPs5,
      click: togglePS5DrpdwnMenu,
    },
    {
      platform: "Xbox Series X|S",
      platformFull: "Xbox Series X|S",
      items: [
        {
          category: "Consoles",
          link: `/products/search/Xbox Series X|S/consoles`,
        },
        { category: "Games", link: `/products/search/Xbox Series X|S/games` },
        {
          category: "Accessories",
          link: `/products/search/Xbox Series X|S/accessories`,
        },
      ],
      ref: secDrpdwnXboxSeries,
      click: toggleXboxSeriesDrpdwnMenu,
    },
    {
      platform: "Xbox One",
      platformFull: "Xbox One",
      items: [
        { category: "Consoles", link: `/products/search/Xbox One/consoles` },
        { category: "Games", link: `/products/search/Xbox One/games` },
        {
          category: "Accessories",
          link: `/products/search/Xbox One/accessories`,
        },
      ],
      ref: secDrpdwnXboxOne,
      click: toggleXboxOneDrpdwnMenu,
    },
    {
      platform: "Nintendo Switch",
      platformFull: "Nintendo Switch",
      items: [
        {
          category: "Consoles",
          link: `/products/search/Nintendo Switch/consoles`,
        },
        { category: "Games", link: `/products/search/Nintendo Switch/games` },
        {
          category: "Accessories",
          link: `/products/search/Nintendo Switch/accessories`,
        },
      ],
      ref: secDrpdwnSwitch,
      click: toggleSwitchDrpdwnMenu,
    },
  ];
  const [platformDetails, setPlatformDetails] = useState({});

  // REDUX RELATED
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (window.innerWidth <= 768) {
      desktopNav.current.style.display = "none";
    } else if (window.innerWidth > 768) {
      mobileNav.current.style.display = "none";
    }
    if (cartItems.length > 0) {
      cartOrb.current.classList.add("active");
    }
  }, [platformDetails, cartItems, cartOrb]);

  // MOBILE NAVBAR FUNCTIONALITY
  const openNav = () => {
    overlay.current.classList.add("active");
    menuBlur.current.classList.add("active");
  };

  const closeNav = () => {
    overlay.current.classList.remove("active");
    menuBlur.current.classList.remove("active");
  };

  // SIDEBAR CONTEXT HANDLER
  const sideBarContextHandler = (e) => {
    sidebarMenuContext.current.classList.add("active");
    const findResult = secDropdownLoop.find(
      (eachItem) => eachItem.platform === e.target.innerText
    );
    setPlatformDetails(findResult);
  };

  const closeSideBarContextHandler = () => {
    sidebarMenuContext.current.classList.remove("active");
  };

  const logoutHandler = () => {
    // LOGOUT USER by emptying details
    dispatch(logout());
  };

  const searchHandler = (e) => {
    // e.preventDefault();
    history.push(`/products/searchProducts`);
  };
  return (
    <>
      <section id="hero" ref={desktopNav}>
        {/* DESKTOP NAV */}
        <nav className="hero-nav">
          <div className="nav-logo">
            <Link to="/">
              <img src={gameStreetLogo} alt="Game Street Logo" />
            </Link>
          </div>
          <div className="nav-searchbar">
            <form className="nav-form-search" onSubmit={searchHandler}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search products..."
              />
            </form>
          </div>
          <ul className="nav-links">
            {userInfo ? (
              <li>
                <div
                  className="dropdown"
                  ref={dropdown}
                  onClick={toggleDropdownMenu}
                >
                  <p>My Account</p>
                  <div className="menu" ref={dropdownMenu}>
                    <ul>
                      <li>
                        <img
                          src={userIcon}
                          alt="User Icon"
                          className="user-icon"
                        />
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <img src={logOutIcon} alt="Log Out Icon" />
                        <Link to="/" onClick={logoutHandler}>
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register">Sign up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}

            <li ref={cartOrb}>
              <Link to="/cart">
                <img src={cartIcon} alt="Cart Icon" />
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="secondary-links" style={{ borderBottom: borderBottom }}>
          {secDropdownLoop.map((eachPlatform, index) => (
            <li key={index}>
              <div
                className="dropdown-secondary"
                ref={secondaryDropdown}
                onClick={eachPlatform.click}
              >
                <p>{eachPlatform.platform}</p>
                <div className="secondary-menu" ref={eachPlatform.ref}>
                  <ul>
                    {eachPlatform.items.map((eachListItem, index) => (
                      <li key={index}>
                        <a href={eachListItem.link}>{eachListItem.category}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* MOBILE NAV */}
      <nav className="mobile-nav" ref={mobileNav}>
        <div className="nav-menu">
          <img
            src={navbarIcon}
            alt="Navbar Icon"
            ref={menuImg}
            onClick={openNav}
          />

          <div className="menu-blur" ref={menuBlur}></div>

          <div className="menu-overlay" ref={overlay}>
            <div className="overlay-close">
              <img
                src={closeIcon}
                alt="Close Menu Icon"
                ref={overlayClose}
                onClick={closeNav}
              />
            </div>
            {userInfo ? (
              <div className="account-loggedIn">
                <div className="account-icon">
                  <img src={userIcon} alt="User Icon" />
                </div>
                <div className="account-content">
                  <p>Welcome {userInfo && userInfo.fName}!</p>
                  <small>
                    <Link to="/dashboard">Account Settings</Link>
                  </small>
                  <small>
                    <Link to="/dashboard/orderHistory">Order History</Link>
                  </small>
                  <small>
                    <Link to="/" onClick={logoutHandler}>
                      Log Out
                    </Link>
                  </small>
                </div>
              </div>
            ) : (
              <div className="account">
                <div className="account-icon">
                  <img src={userIcon} alt="User Icon" />
                </div>
                <div className="account-content">
                  <p>Account</p>
                  <small>
                    <Link to="/login">Sign in</Link> or {""}
                    <Link to="/register">Create Account</Link>
                  </small>
                </div>
              </div>
            )}

            <h4>Shop by Platform</h4>
            <ul>
              {secDropdownLoop.map((eachPlatform, index) => (
                <li key={index}>
                  <Link to="#" onClick={sideBarContextHandler}>
                    {eachPlatform.platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-context" ref={sidebarMenuContext}>
            <div className="overlay-return">
              <img src={chevronLeftCrimson} alt="return-icon" />
              <p
                className="close-context"
                ref={sidebarCloseContextMenu}
                onClick={closeSideBarContextHandler}
              >
                RETURN
              </p>
            </div>
            <h4>{platformDetails.platformFull}</h4>
            <ul>
              {platformDetails.items &&
                platformDetails.items.map((eachListItem, index) => (
                  <li key={index}>
                    <a href={eachListItem.link}>{eachListItem.category}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="nav-logo">
          <Link to="/">
            <img
              src={gameStreetLogo2}
              alt="Game Street Logo Horizontal"
              className="gs-logo"
            />
          </Link>
        </div>

        <div className="nav-search">
          <form className="nav-form-search" onSubmit={searchHandler}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search product..."
            />
          </form>
        </div>
        <div className="nav-cart">
          <Link to="/cart">
            <img src={cartIcon} alt="cart icon" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
