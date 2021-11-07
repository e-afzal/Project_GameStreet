import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// STYLE
import "../styles/orderHistory.css";

// COMPONENT
import ScreenBgd from "./../components/ScreenBgd";

// REDUX RELATED
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../actions/orderActions";

const OrderHistory = () => {
  // REDUX RELATED
  const dispatch = useDispatch();

  const ordersFetch = useSelector((state) => state.ordersFetch);
  const { orders, loading, error } = ordersFetch;

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <ScreenBgd brightNess={"35%"} />
      <section id="dashboard-orderHistory">
        <div className="dashboard-grid">
          <div className="left-pane">
            <div className="fixed-container">
              <div className="account-settings">
                <h4 className="account-settings-title">Account Settings</h4>
                <ul className="account-group">
                  <li>
                    <a href="/dashboard#personal-details">Personal Details</a>
                  </li>
                  <li>
                    <a href="/dashboard#change-password">Change Password</a>
                  </li>
                  <li>
                    <a href="/dashboard#delivery-address">Delivery Address</a>
                  </li>
                  <li>
                    <a href="/dashboard#payment-details">Payment Details</a>
                  </li>
                </ul>
              </div>
              <div className="my-orders">
                <h4 className="my-orders-title">My Orders</h4>
                <Link to="/dashboard/orderHistory">Order History</Link>
              </div>
            </div>
          </div>

          <div className="right-pane">
            {/* ORDER HISTORY */}
            <div className="order-history" id="order-history">
              <h3 className="order-history-title">Order History</h3>
              <table className="history-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders &&
                    orders.map((eachOrder) => (
                      <tr>
                        <td>
                          {eachOrder._id.substr(eachOrder._id.length - 5)}
                        </td>
                        <td>{eachOrder.paidAt.substr(0, 10)}</td>
                        <td>{eachOrder.totalPrice.toFixed(2)}</td>
                        <td>
                          <a href={`/dashboard/orderHistory/${eachOrder._id}`}>
                            VIEW DETAILS
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderHistory;
