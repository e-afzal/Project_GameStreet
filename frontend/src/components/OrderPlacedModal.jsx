import React from "react";

// STYLE
import "../styles/orderPlacedModal.css";

// IMAGE
import marioLuigi from "../assets/images/Mario_&_Luigi.png";

// Appears when order is successful
const OrderPlacedModal = () => {
  return (
    <div id="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-img">
          <img src={marioLuigi} alt="Mario & Luigi" />
        </div>
        <div className="modal-content">
          <h2>Order placed successfully!</h2>
          <p>
            The products will be dispatched at the earliest. Thank you for your
            purchase.
          </p>
          <div className="button-flex">
            <button className="home">
              <a href="/">Return Home</a>
            </button>
            <button className="dashboard">
              <a href="/dashboard/orderHistory">Return to Dashboard</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlacedModal;
