import React from "react";

// STYLE
import "../styles/emptyCartComp.css";

// IMAGE
import marioThink from "../assets/images/Mario_Thinking.png";

const CartEmpty = () => {
  return (
    <section id="emptyCart">
      <div class="empty-content">
        <h1>Your cart is empty</h1>
        <p>
          Please feel free to look around the website or browse through a
          catalogue of various gaming products that might be of interest to you
          by clicking the link below:
        </p>
        <div class="button-flex">
          <button>
            <a href="/products/search">BROWSE PRODUCTS</a>
          </button>
          <button>
            <a href="/">HEAD HOME</a>
          </button>
        </div>
      </div>
      <div class="empty-image">
        <img src={marioThink} alt="Mario Thinking" />
      </div>
    </section>
  );
};

export default CartEmpty;
