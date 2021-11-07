import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/searchPage.css";

// PACKAGES
import axios from "axios";

// ICONS
import filterIcon from "../assets/icons/filter.svg";
import sortIcon from "../assets/icons/sorting.svg";
import cancelFilterIcon from "../assets/icons/cancel-icon.svg";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";
import FilterCategory from "./../components/FilterCategory";
import FilterAvail from "../components/FilterAvail";
import FilterPrice from "../components/FilterPrice";
import FilterPlatform from "../components/FilterPlatform";
import FilterCategoryMob from "../componentsMobile/FilterCategoryMob";
import FilterAvailMob from "../componentsMobile/FilterAvailMob";
import FilterPriceMob from "../componentsMobile/FilterPriceMob";
import FilterPlatformMob from "../componentsMobile/FilterPlatformMob";

const SingleProductType = ({ match }) => {
  const matchTerm = match.params.productType;
  // CONSTS
  let [category, setCategory] = useState(matchTerm);
  let [availability, setAvailability] = useState("");
  let [price, setPrice] = useState("");
  let [platform, setPlatform] = useState("");
  const [result, setResult] = useState([]);
  const [sortValue, setSortValue] = useState("PriceH2L");
  const [loading, setLoading] = useState(null);

  // REFS - MOBILE
  const filterTrigger = useRef();
  const sideBarMenu = useRef();
  const overlay = useRef();
  const filterClose = useRef();
  const menuBlur = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.post("/api/products/search", {
        category,
        availability,
        price,
        platform,
      });
      setResult(data);
      setLoading(false);
    };

    fetchProducts();
  }, [category, price, availability, platform, sortValue, matchTerm]);

  // HANDLERS
  const sortHandler = (e) => {
    setSortValue(e.target.value);
  };

  // MOBILE HANDLERS
  const filterTriggerHandler = () => {
    overlay.current.classList.add("active");
    menuBlur.current.classList.add("active");
  };

  const filterCloseHandler = () => {
    overlay.current.classList.remove("active");
    menuBlur.current.classList.remove("active");
  };

  const menuBlurHandler = () => {
    overlay.current.classList.remove("active");
    menuBlur.current.classList.remove("active");
  };

  // SORTING
  result.sort((a, b) => {
    if (sortValue === "PriceH2L") return b.price - a.price;
    if (sortValue === "PriceL2H") return a.price - b.price;
  });

  return (
    <>
      <ScrollToTop />
      <section id="search-grid">
        {/* FILTER OPTIONS PANE - DESKTOP */}
        <div className="filter-pane">
          <div className="filter-main-title">
            <h4>Filter Options</h4>
            <Link
              to="/products/search"
              style={{
                marginLeft: "auto",
                fontSize: "1.4rem",
                display: "inline-block",
              }}
            >
              RESET
            </Link>
          </div>
          <hr />

          <div className="filter-product-type">
            <FilterCategory setLoading={setLoading} setCategory={setCategory} />
          </div>
          <hr />

          <div className="filter-availability">
            <FilterAvail
              setLoading={setLoading}
              setAvailability={setAvailability}
            />
          </div>
          <hr />

          <div className="filter-price">
            <FilterPrice setLoading={setLoading} setPrice={setPrice} />
          </div>
          <hr />

          <div className="filter-platform">
            <FilterPlatform setLoading={setLoading} setPlatform={setPlatform} />
          </div>
        </div>

        {/* MOBILE - FILTER */}
        <div className="filter-flex">
          <div
            className="filter"
            ref={filterTrigger}
            onClick={filterTriggerHandler}
          >
            <img src={filterIcon} alt="Filter Icon" />
            <p>Filter</p>
          </div>
          <div className="filter-sort">
            <img src={sortIcon} alt="Sort Icon" />
            <select
              name="sort"
              id="mobile-sort"
              defaultValue={sortValue}
              onClick={sortHandler}
            >
              <option value="PriceH2L">Price (Highest to Lowest)</option>
              <option value="PriceL2H">Price (Lowest to Highest)</option>
            </select>
          </div>
        </div>

        <div className="filter-sidebar-menu" ref={sideBarMenu}>
          <div
            className="filter-menu-blur"
            ref={menuBlur}
            onClick={menuBlurHandler}
          ></div>
          <div className="filter-menu-overlay" ref={overlay}>
            <div
              className="mobile-filter-close"
              ref={filterClose}
              onClick={filterCloseHandler}
            >
              <img src={cancelFilterIcon} alt="cancel-icon" />
            </div>
            <div className="filter-main-title">
              <h4>Filter Options</h4>
              <Link
                to="/products/search"
                style={{
                  marginLeft: "auto",
                  fontSize: "1.4rem",
                  display: "inline-block",
                }}
              >
                RESET
              </Link>
            </div>
            <hr />

            <div className="filter-product-type">
              <FilterCategoryMob
                setLoading={setLoading}
                setCategory={setCategory}
              />
            </div>
            <hr />

            <div className="filter-availability">
              <FilterAvailMob
                setLoading={setLoading}
                setAvailability={setAvailability}
              />
            </div>
            <hr />

            <div className="filter-price">
              <FilterPriceMob setLoading={setLoading} setPrice={setPrice} />
            </div>
            <hr />

            <div className="filter-platform">
              <FilterPlatformMob
                setLoading={setLoading}
                setPlatform={setPlatform}
              />
            </div>
            <hr />
          </div>
        </div>

        {/* SEARCH RESULTS */}
        <div className="search-results">
          <div className="search-number-sort">
            <p className="results-num">
              Showing {result && result.length} products
            </p>
            <select
              name="sort"
              id="results-sort"
              defaultValue={sortValue}
              onClick={sortHandler}
            >
              <option value="PriceH2L">Price (Highest to Lowest)</option>
              <option value="PriceL2H">Price (Lowest to Highest)</option>
            </select>
          </div>

          <div className="results-card-grid">
            {result.length >= 1 ? (
              result.map((eachItem) => (
                <Link
                  key={eachItem._id}
                  to={`/products/${eachItem.category}/${eachItem._id}`}
                  className="card-container"
                >
                  <div className="card-img">
                    <img
                      src={eachItem.productImages || eachItem.box_art}
                      alt="Card Image"
                    />
                  </div>
                  <div className="card-content">
                    <p className="product-title">
                      {eachItem.title || eachItem.name}
                    </p>
                    <p className="product-price">
                      AED {eachItem.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <h1 style={{ gridColumn: "span 3" }}>No Items found</h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductType;
