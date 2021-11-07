import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/singleOrder.css";

// COMPONENTS
import ScreenBgd from "./../components/ScreenBgd";
import ScrollToTop from "../util/ScrollToTop";

// ICON
import chevronLeft from "../assets/icons/Chevron-left.svg";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../actions/orderActions";

const OrderScreen = ({ match }) => {
  // REDUX RELATED
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading: orderLoading, order } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(match.params.id));
  }, [match, dispatch]);

  const deliveryCharge = 25;

  const orderItemsArray = order ? order.orderItems : [];

  return (
    <>
      <ScreenBgd brightNess="35%" />
      <ScrollToTop />
      <section id="order_summary">
        <div className="left-pane">
          <div className="return">
            <Link to="/dashboard/orderHistory">
              <img src={chevronLeft} alt="Chevron Left" />
              Return to Dashboard
            </Link>
          </div>
          {/* SHIPPING DETAILS */}
          <div className="shipping-details">
            <h2 className="shipping-title">Shipping Details</h2>
            <p className="shipping-name">
              Name:{" "}
              {order &&
                `${order.shippingAddress.fName} ${order.shippingAddress.lName}`}
            </p>
            <p className="shipping-email">Email: {userInfo.email}</p>
            <p className="shipping-number">
              Contact number: {order && order.shippingAddress.number}
            </p>
            <p className="shipping-address">
              Address: {order && order.shippingAddress.streetAddress}
            </p>
            <p className="shipping-city">
              City: {order && order.shippingAddress.city}
            </p>
          </div>
          <hr />
          {/* PAYMENT DETAILS */}
          <div className="payment-details">
            <h2 className="payment-title">Payment Details</h2>
            <p className="payment-status">
              Payment status: <span>PAID</span>
            </p>
            <p className="payment-date">
              Payment date: {order && order.paidAt.substr(0, 10)}
            </p>
            <p className="payment-mode">
              Mode of Payment: {order && order.paymentMethod}
            </p>
          </div>
          <hr />
          {/* ORDER ITEMS */}
          <div className="items-list">
            <h2 className="items-title">Order Items</h2>

            {orderItemsArray.map((eachProduct) => (
              <div className="item-container">
                <div className="item-img">
                  <img
                    src={eachProduct && eachProduct.image}
                    alt="Item Image"
                  />
                </div>
                <div className="item-details">
                  <p className="item-title">
                    {eachProduct && eachProduct.name}
                  </p>
                  <p className="item-platform">
                    Platform: {eachProduct && eachProduct.platform}
                  </p>
                  <p className="unit-price">
                    Price per unit: AED{" "}
                    {eachProduct && eachProduct.price.toFixed(2)}
                  </p>
                  <p className="qty-ordered">
                    Quantity Ordered: {eachProduct && eachProduct.qty}{" "}
                    {eachProduct.qty > 1 ? "units" : "unit"}
                  </p>
                  <p className="item-edition">
                    Edition: {eachProduct && eachProduct.edition}
                  </p>
                  <p className="item-condition">
                    Condition: {eachProduct && eachProduct.condition}
                  </p>
                </div>
                <div className="item-price-container">
                  <h4 className="item-price">
                    AED {(eachProduct.qty * eachProduct.price).toFixed(2)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="right-pane">
          <div className="order-summary">
            <div className="summary-card">
              <h4 className="summary-title">Order Summary</h4>

              <div className="summary-subtotal-flex">
                <p className="subtotal">Subtotal (2 items)</p>
                <p className="subtotal-amt">
                  AED {order && order.subtotalPrice.toFixed(2)}
                </p>
              </div>

              <div className="summary-delivery-flex">
                <p className="delivery">Delivery Charges</p>
                <p className="delivery-amt">
                  {order &&
                  order.shippingAddress.deliveryMethod === "premiumDelivery"
                    ? `AED ${deliveryCharge.toFixed(2)}`
                    : "FREE"}
                </p>
              </div>

              <div className="summary-tax-flex">
                <p className="tax">VAT @ 5%</p>
                <p className="tax-amt">{`AED ${
                  order && order.taxPrice.toFixed(2)
                }`}</p>
              </div>

              <hr />

              <div className="summary-total-flex">
                <p className="total">Total Amount</p>
                <p className="total-amt">{`AED ${
                  order && order.totalPrice.toFixed(2)
                }`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderScreen;
