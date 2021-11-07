import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/searchPage.css";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";

// PACKAGES
import axios from "axios";

const PlatformScreen = ({ match }) => {
  const matchTerm = match.params.console;
  // CONSTS
  let [category, setCategory] = useState("");
  let [availability, setAvailability] = useState("");
  let [price, setPrice] = useState("");
  let [platform, setPlatform] = useState(matchTerm);
  const [result, setResult] = useState([]);
  const [sortValue, setSortValue] = useState("PriceH2L");
  const [loading, setLoading] = useState(null);
  // const [platformInput, setPlatformInput] = useState("");

  // REFS
  const productAccordion = useRef();
  const availableAccordion = useRef();
  const priceAccordion = useRef();
  const platformAccordion = useRef();

  const toggleAccordion = (accordion) => {
    accordion.current.classList.toggle("active");
  };

  useEffect(() => {
    // if (platformInput) {
    //   setPlatform(platformInput);
    // } else {
    //   setPlatform(matchTerm);
    // }
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
  }, [
    category,
    price,
    availability,
    platform,
    sortValue,
    matchTerm,
    // platformInput,
  ]);

  // HANDLERS
  const typeHandler = (e) => {
    setLoading(true);
    setCategory(e.target.id);
    setLoading(false);
  };

  const platformHandler = (e) => {
    setLoading(true);
    // setPlatformInput(e.target.id);
    setPlatform(e.target.id);
    setLoading(false);
  };

  const availabilityHandler = (e) => {
    setLoading(true);
    setAvailability(e.target.id);
    setLoading(false);
  };

  const priceHandler = (e) => {
    setLoading(true);
    setPrice(e.target.id);
    setLoading(false);
  };

  const sortHandler = (e) => {
    setSortValue(e.target.value);
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
        {/* FILTER OPTIONS PANE */}
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
            <div
              className="accordion-general"
              ref={productAccordion}
              onClick={() => toggleAccordion(productAccordion)}
            >
              <div className="filter-label">
                <h4>Product Type</h4>
                <svg width="15" height="10" viewBox="0 0 42 25">
                  <path
                    d="M3 3L21 21L39 3"
                    stroke="white"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="filter-options">
                <div className="input-group">
                  <input
                    type="radio"
                    id="accessories"
                    name="type"
                    onClick={typeHandler}
                  />
                  <label htmlFor="accessories">Accessories</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="consoles"
                    name="type"
                    onClick={typeHandler}
                  />
                  <label htmlFor="consoles">Consoles & Bundles</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="games"
                    name="type"
                    onClick={typeHandler}
                  />
                  <label htmlFor="games">Games</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="merchandises"
                    name="type"
                    onClick={typeHandler}
                  />
                  <label htmlFor="merchandises">Merchandises</label>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="filter-availability">
            <div
              className="accordion-general"
              ref={availableAccordion}
              onClick={() => toggleAccordion(availableAccordion)}
            >
              <div className="filter-label">
                <h4>Availability</h4>
                <svg width="15" height="10" viewBox="0 0 42 25">
                  <path
                    d="M3 3L21 21L39 3"
                    stroke="white"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="filter-options">
                <div className="input-group">
                  <input
                    type="radio"
                    id="In Stock"
                    name="availability"
                    onClick={availabilityHandler}
                  />
                  <label htmlFor="In Stock">In Stock</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="Out of Stock"
                    name="availability"
                    onClick={availabilityHandler}
                  />
                  <label htmlFor="Out of Stock">Out of Stock</label>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="filter-price">
            <div
              className="accordion-general"
              ref={priceAccordion}
              onClick={() => toggleAccordion(priceAccordion)}
            >
              <div className="filter-label">
                <h4>Price</h4>
                <svg width="15" height="10" viewBox="0 0 42 25">
                  <path
                    d="M3 3L21 21L39 3"
                    stroke="white"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="filter-options">
                <div className="input-group">
                  <input
                    type="radio"
                    id="0-500"
                    name="price"
                    onClick={priceHandler}
                  />
                  <label htmlFor="0-500">0 - 500</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="500-1000"
                    name="price"
                    onClick={priceHandler}
                  />
                  <label htmlFor="500-1000">500 - 1000</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="1000-1500"
                    name="price"
                    onClick={priceHandler}
                  />
                  <label htmlFor="1000-1500">1000 - 1500</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="1500-2000"
                    name="price"
                    onClick={priceHandler}
                  />
                  <label htmlFor="1500-2000">1500 - 2000</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="2000+"
                    name="price"
                    onClick={priceHandler}
                  />
                  <label htmlFor="2000+">2000+</label>
                </div>

                {/* <div className="input-group">
                  <input
                    type="radio"
                    id="300+"
                    name="price"
                    onClick={priceHandler}
                  />
                  <label htmlFor="300+">300+</label>
                </div> */}
              </div>
            </div>
          </div>
          <hr />

          <div className="filter-platform">
            <div
              className="accordion-general"
              ref={platformAccordion}
              onClick={() => toggleAccordion(platformAccordion)}
            >
              <div className="filter-label">
                <h4>Platform</h4>
                <svg width="15" height="10" viewBox="0 0 42 25">
                  <path
                    d="M3 3L21 21L39 3"
                    stroke="white"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="filter-options">
                <div className="input-group">
                  <input
                    type="radio"
                    id="PS5"
                    name="platform"
                    onClick={platformHandler}
                  />
                  <label htmlFor="PS5">PS5</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="PS4"
                    name="platform"
                    onClick={platformHandler}
                  />
                  <label htmlFor="PS4">PS4</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="Xbox Series X|S"
                    name="platform"
                    onClick={platformHandler}
                  />
                  <label htmlFor="Xbox Series X|S">Xbox Series X|S</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="Xbox One"
                    name="platform"
                    onClick={platformHandler}
                  />
                  <label htmlFor="Xbox One">Xbox One</label>
                </div>

                <div className="input-group">
                  <input
                    type="radio"
                    id="Nintendo Switch"
                    name="platform"
                    onClick={platformHandler}
                  />
                  <label htmlFor="Nintendo Switch">Nintendo Switch</label>
                </div>
              </div>
            </div>
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

export default PlatformScreen;
