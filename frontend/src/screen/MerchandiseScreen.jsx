import React, { useEffect, useState } from "react";

// STYLE
import "../styles/singleProduct.css";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";
import Metatag from "../components/Metatag";
import ScreenBgd from "../components/ScreenBgd";
import ProductSwiper from "../components/ProductSwiper";

// REDUX related
import { useDispatch, useSelector } from "react-redux";
import { listMerchandiseDetails } from "../actions/productActions";

const MerchandiseScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [edition, setEdition] = useState("");
  const [condition, setCondition] = useState("");
  const [message, setMessage] = useState("");

  // REDUX Related
  const dispatch = useDispatch();
  const merchandiseDetails = useSelector((state) => state.merchandiseDetails);
  const { loading, error, merchandise } = merchandiseDetails;

  useEffect(() => {
    dispatch(listMerchandiseDetails(match.params.id));
  }, [dispatch, match]);

  // SPLIT FEATURES
  let splitFeatures = [];
  splitFeatures =
    merchandise.productFeatures && merchandise.productFeatures.split("|");
  const category = merchandise.category;

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (!edition || !qty || !condition) {
      setMessage("Please select an option for all the above categories");
    } else if (edition && qty && condition) {
      history.push(
        `/cart/${match.params.id}?qty=${qty}?edition=${edition}?condition=${condition}?category=${category}`
      );
    }
  };

  return (
    <>
      <Metatag title={merchandise && merchandise.title} />
      <ScrollToTop />
      <ScreenBgd brightNess={"35%"} bluriness={"3px"} />
      <section id="product-content">
        {/* PRODUCT DETAILS */}
        <div className="product-details">
          <div className="product-brief">
            <h2 className="product-title">{merchandise.title}</h2>
            <h4 className="product-price">
              AED {merchandise.price && merchandise.price.toFixed(2)}
            </h4>

            <hr />
            <div
              className="product-quantity"
              style={{
                display: `${merchandise.countInStock > 0 ? "block" : "none"}`,
              }}
            >
              <h5>Quantity</h5>
              <select name="quantity" id="quantity">
                <option
                  value="1"
                  selected
                  onClick={(e) => setQty(e.target.value)}
                >
                  1
                </option>
                <option value="2" onClick={(e) => setQty(e.target.value)}>
                  2
                </option>
                <option value="3" onClick={(e) => setQty(e.target.value)}>
                  3
                </option>
                <option value="4" onClick={(e) => setQty(e.target.value)}>
                  4
                </option>
                <option value="5" onClick={(e) => setQty(e.target.value)}>
                  5
                </option>
              </select>
            </div>
            <hr />

            <form className="cart-form">
              <h5>Edition</h5>
              <div className="form-group">
                <input
                  type="radio"
                  name="edition"
                  id="standard"
                  value="standard"
                  onChange={(e) => setEdition(e.target.value)}
                />
                <label htmlFor="standard">Standard</label>

                {/* <input
                type="radio"
                name="edition"
                id="collectors"
                value="collectors"
              />
              <label for="collectors">Collectors</label> */}
              </div>

              <hr />

              <h5>Condition</h5>
              <div className="form-group">
                <input
                  type="radio"
                  name="condition"
                  id="new"
                  value="new"
                  onChange={(e) => setCondition(e.target.value)}
                />
                <label htmlFor="new">New</label>
              </div>

              <button
                type="submit"
                onClick={addToCartHandler}
                disabled={merchandise.countInStock === 0}
              >
                Add To Cart
              </button>
              <small
                style={{
                  textAlign: "center",
                  display: "block",
                  marginTop: "10px",
                  color: "crimson",
                  fontSize: "12px",
                }}
              >
                {message}
              </small>
            </form>
          </div>

          <div className="about-product">
            <h2 className="about-title">Product Description</h2>
            <p className="about-description">
              {merchandise.productDescription && merchandise.productDescription}
            </p>
          </div>

          <div className="product-features">
            <h2 className="features-title">Product Features</h2>
            {splitFeatures &&
              splitFeatures.map((eachFeature, index) => (
                <p key={index} className="features-description">
                  🎯 {eachFeature}
                </p>
              ))}
          </div>
        </div>

        {/* PRODUCT GALLERY */}
        <div className="product-gallery">
          <h1>Image Gallery</h1>
          {merchandise.productImages && (
            <ProductSwiper images={merchandise.productImages} />
          )}
        </div>
      </section>
    </>
  );
};

export default MerchandiseScreen;
