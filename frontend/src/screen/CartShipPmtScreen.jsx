import React, { useEffect, useState } from "react";

// STYLES
import "../styles/cartShipPmt.css";

// COMPONENTS
import ScreenBgd from "./../components/ScreenBgd";
import ScrollToTop from "../util/ScrollToTop";
import OrderPlacedModal from "../components/OrderPlacedModal";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import {
  saveShippingAddress,
  savePaymentMethod,
  emptyCart,
} from "../actions/cartActions";
import { createOrder } from "../actions/orderActions";
import { getUserDetails } from "../actions/userActions";

// PACKAGES
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartShipPmtScreen = ({ history }) => {
  // REDUX RELATED
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // USER DETAILS
  const userDetails = useSelector((state) => state.userDetails);
  const { loading: userLoading, error: userError, user } = userDetails;

  // CART ITEMS for ORDER SUMMARY CALCULATION
  const cartStuff = useSelector((state) => state.cart);
  const { cartItems } = cartStuff;

  // SHIPPING DETAILS CONSTS
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [city, setCity] = useState(shippingAddress.city);
  const [number, setNumber] = useState(shippingAddress.number);
  // If details available in 'shippingAddress' from localStorage, the below fields will get populated with it. This was set in the 'saveShippingAddress' ACTION
  const [streetAddress, setStreetAddress] = useState(shippingAddress.address);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // If 'userInfo' unavailable, redirect to 'LOGIN' page
    if (!user) {
      history.push("/login");
    } else {
      // IF logged in and user details is missing, fetch it through 'getUserProfile' ACTION.
      // If User's 'fName' itself is not there, means other details are also not there. And so we dispatch 'getUserDetails'
      if (!user.fName) {
        dispatch(getUserDetails("profile"));
      } else {
        // If user details is available, we set the form fields
        setfName(user.fName);
        setlName(user.lName);
        setStreetAddress(user.streetAddress);
        setNumber(user.number);
        setCity(user.city);
      }
    }
  }, [dispatch, history, user, deliveryMethod]);

  const shippingFormHandler = (e) => {
    e.preventDefault();
    // SAVE DETAILS from FORM
    dispatch(
      saveShippingAddress({
        fName,
        lName,
        streetAddress,
        city,
        number,
        deliveryMethod,
      })
    );
    toast.success("SAVED SUCCESSFULLY!", {
      progressStyle: { backgroundColor: "white" },
      transition: Slide,
      style: {
        fontFamily: "FiraSans-Medium",
        fontSize: "14px",
        letterSpacing: ".9",
      },
    });
    // Below push is done by Brad, but we don't need it
    // history.push('/payment')
  };

  // PAYMENT RELATED
  // PAYMENT CONSTS
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  // const pmtFormHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(savePaymentMethod(paymentMethod));
  //   // history.push("/placeorder");
  // };

  // PLACE ORDER RELATED
  const orderCreate = useSelector((state) => state.orderCreate);
  const {
    loading: orderLoading,
    success,
    order,
    error: orderError,
  } = orderCreate;

  // 'ORDER SUMMARY' CALCULATIONS
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
  let premiumDeliveryCharge = 25.0;
  let deliveryCharge =
    deliveryMethod === "premiumDelivery" ? premiumDeliveryCharge : 0;
  let estdTotal = subtotalAmt + estdTax + deliveryCharge;

  useEffect(() => {
    if (success) {
      // order._id is the ID assigned by MongoDB since it was created on the DB when the 'PLACE ORDER' handler was executed and therefore 'createOrder' ACTION was called.
      // history.push(`/order/${order._id}`);
    }
  }, [history, order]);

  const placeOrderHandler = () => {
    if (!shippingAddress.deliveryMethod) {
      setMessage("Ensure all fields are complete and saved.");
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } else {
      dispatch(
        createOrder({
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: "Credit Card",
          subtotalPrice: subtotalAmt,
          taxPrice: estdTax,
          shippingPrice: deliveryCharge,
          totalPrice: estdTotal,
        })
      );
      dispatch(emptyCart());
    }
  };

  return (
    <>
      <ScrollToTop />
      {success ? (
        <OrderPlacedModal />
      ) : (
        <>
          <ScreenBgd brightNess={"20%"} />
          <ToastContainer
            style={{
              textAlign: "center",
              lineHeight: 1.5,
            }}
            theme="dark"
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <section id="ship-pmt-summary">
            <div className="details">
              {/* SECTION: SHIPPING DETAILS */}
              <section className="shipping-details">
                <h2 className="shipping-title">Shipping Details</h2>

                <form
                  className="shipping-form-container"
                  onSubmit={shippingFormHandler}
                >
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First name"
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                  />
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last name"
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                  />
                  <input
                    type="text"
                    name="streetAddress"
                    id="address"
                    placeholder="Street address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                  <select
                    name="city"
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option disabled>Select your city</option>
                    <option value="Dubai" selected={city === "Dubai"}>
                      Dubai
                    </option>
                    <option value="Abu Dhabi" selected={city === "Abu Dhabi"}>
                      Abu Dhabi
                    </option>
                    <option value="Sharjah" selected={city === "Sharjah"}>
                      Sharjah
                    </option>
                  </select>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    placeholder="Phone number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <div className="delivery-group">
                    <input
                      type="radio"
                      id="freeDelivery"
                      name="delivery"
                      value="freeDelivery"
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                    />
                    <label htmlFor="freeDelivery">
                      Standard Delivery: Delivery within{" "}
                      <span> 2 - 5 days (FREE)</span>
                    </label>
                  </div>

                  <div className="delivery-group">
                    <input
                      type="radio"
                      id="premiumDelivery"
                      name="delivery"
                      value="premiumDelivery"
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                    />
                    <label htmlFor="premiumDelivery">
                      Premium Delivery: Delivery by tomorrow{" "}
                      <span> (charged @ AED 25.00)</span>
                    </label>
                  </div>

                  <button className="delivery-btn">Save & Continue</button>
                </form>
              </section>

              {/* SECTION: PAYMENT DETAILS */}
              {/* <section className="payment-details">
                <h2 className="payment-title">Payment Details</h2>
                <div className="credit-card">
                   <p>Pay via Credit Card</p>
                  <form className="cc-form" onSubmit={pmtFormHandler}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="paymentMethod"
                      value="PayPal"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label htmlFor="paymentMethod">PayPal</label>
                    <button className="cc-btn">Save & Continue</button>
                  </form>
                </div>
              </section> */}
            </div>

            {/* SECTION: ORDER SUMMARY */}
            <section className="order-summary">
              <div className="summary-card">
                <h4 className="summary-title">Order Summary</h4>

                <div className="summary-subtotal-flex">
                  <p className="subtotal">Subtotal ({subtotalQty} items)</p>
                  <p className="subtotal-amt">AED {subtotalAmt.toFixed(2)}</p>
                </div>

                <div className="summary-delivery-flex">
                  <p className="delivery">Delivery Charges</p>
                  <p className="delivery-amt">
                    {deliveryMethod === "premiumDelivery"
                      ? `AED ${premiumDeliveryCharge.toFixed(2)}`
                      : "FREE"}
                  </p>
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
                    onClick={placeOrderHandler}
                    disabled={!shippingAddress}
                  >
                    Place Order
                  </button>
                  <small
                    style={{
                      textAlign: "center",
                      display: "block",
                      marginBlock: "-15px 10px",
                      color: "crimson",
                      fontSize: "12px",
                    }}
                  >
                    {message}
                  </small>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default CartShipPmtScreen;
