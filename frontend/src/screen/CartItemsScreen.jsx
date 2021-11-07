import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/cartItems.css";

// COMPONENTS
import ScrollToTop from "../util/ScrollToTop";
import CartEmpty from "../components/CartEmpty";
import ScreenBgd from "../components/ScreenBgd";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartItemsScreen = ({ match, history, location }) => {
  const productID = match.params.id;
  // Fetching QUANTITY, EDITION, CONDITION & CATEGORY from the URL.
  // E.g. http://localhost:3000/cart/60fde32544528f24e40075a9?qty=3
  const querySplitArray = location.search ? location.search.split("?") : [];
  let qty;
  let edition;
  let condition;
  let category;
  if (querySplitArray.length > 0) {
    qty = querySplitArray[1].split("=")[1];
    edition = querySplitArray[2].split("=")[1];
    condition = querySplitArray[3].split("=")[1];
    category = querySplitArray[4].split("=")[1];
  }

  // USE REF
  const orderSummary = useRef();

  // REDUX related
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    // If item is added to cart, 'push ID' and 'qty' to 'cartItems' array
    if (productID) {
      dispatch(addToCart(productID, qty, edition, condition, category));
    }
    // if (cartItems.length === 0) {
    //   orderSummary.current.style.display = "none";
    // } else {
    //   orderSummary.current.style.display = "block";
    // }
  }, [dispatch, productID, qty, edition, condition, category, orderSummary]);

  // CALCULATIONS
  // Subtotal Quantity
  let subtotalQty = cartItems.reduce((acc, curr) => acc + Number(curr.qty), 0);

  // Subtotal Amount
  let subtotalAmt = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );

  // Estimated Tax
  let estdTax = Math.ceil(subtotalAmt * (5 / 100));

  // Estimated Total
  let estdTotal = subtotalAmt + estdTax;

  // HANDLERS
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // If USER NOT logged in, go to shipping,
    // IF logged in, forward to 'shipping' page. ShipnPmt page for us
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      <ScreenBgd brightNess={"35%"} />
      <ScrollToTop />
      {cartItems.length < 1 ? (
        <CartEmpty />
      ) : (
        <section id="cart_items">
          {/* ITEMS LIST */}
          <div className="items-list">
            <h2 className="items-title">Cart Items</h2>

            {cartItems.map((eachItem, index) => {
              return (
                <div className="item-container" key={index}>
                  <div className="item-img">
                    <img src={eachItem.image} alt="Product Image" />
                  </div>
                  <div className="item-details">
                    <Link
                      to={`/products/${eachItem.category}/${eachItem.product}`}
                      className="item-title"
                    >
                      {eachItem.name}
                    </Link>
                    <p className="item-platform">
                      Platform: {eachItem.platform}
                    </p>
                    <p
                      className="item-edition"
                      style={{ textTransform: "capitalize" }}
                    >
                      Edition: {eachItem.edition}{" "}
                    </p>
                    <p
                      className="item-condition"
                      style={{ textTransform: "capitalize" }}
                    >
                      Condition: {eachItem.condition}
                    </p>
                    <p
                      className="item-quantity"
                      style={{ textTransform: "capitalize" }}
                    >
                      Quantity: {eachItem.qty}
                    </p>
                    <div className="flex-qty-remove">
                      {/* <label htmlFor="quantity" className="qty-label">
                      Quantity
                    </label> */}
                      <div className="btn-remove">
                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeFromCartHandler(eachItem.product)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    {/* <select
                    name="quantity"
                    id="quantity"
                    className="qty-dropdown"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select> */}
                  </div>
                  <div className="item-price-container">
                    <h4 className="item-price">
                      AED {eachItem.price && eachItem.price.toFixed(2)}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ORDER SUMMARY  */}
          <div className="order-summary" ref={orderSummary}>
            <div className="summary-card">
              <h4 className="summary-title">Order Summary</h4>

              <div className="summary-subtotal-flex">
                <p className="subtotal">Subtotal ({subtotalQty} items)</p>
                <p className="subtotal-amt">AED {subtotalAmt.toFixed(2)}</p>
              </div>

              <div className="summary-delivery-flex">
                <p className="delivery">Delivery Charges</p>
                <p className="delivery-amt">FREE</p>
              </div>

              <div className="summary-tax-flex">
                <p className="tax">Estimated Tax @ 5%</p>
                <p className="tax-amt">AED {estdTax.toFixed(2)}</p>
              </div>

              <hr />

              <div className="summary-total-flex">
                <p className="total">Estimated Total</p>
                <p className="total-amt">AED {estdTotal.toFixed(2)}</p>
              </div>

              <div className="summary-btn">
                <button
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartItemsScreen;
