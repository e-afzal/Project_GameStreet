// PACKAGE
import axios from "axios";

// IMPORTS
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_EMPTY,
} from "../constants/cartConstants";

export const addToCart =
  (id, qty, edition, condition, category) => async (dispatch, getState) => {
    // Using 'getState' we can get access to all items in reducer such as "productList", "productDetails", etc

    const { data } = await axios.get(`/api/products/${category}/${id}`);

    // We select the items to insert in the payload to be used in the CART SCREEN.
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name ? data.name : data.title,
        image: data.box_art ? data.box_art : data.productImages[0],
        price: data.price,
        countInStock: data.countInStock,
        platform: data.platform.name,
        category: data.category,
        qty,
        edition,
        condition,
      },
    });

    // STORING TO "LOCAL STORAGE" as JSON format, NOT 'JS' format. When we need it, we need to 'parse' it back to JS format
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart = (id) => (dispatch, getState) => {
  // NOTE: 'ID' is coming from 'CartItemsScreen' when 'removeFromCartHandler' is executed by clicking an item's REMOVE button
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const emptyCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_EMPTY,
    payload: [],
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING ADDRESS on the 'CartShipPmtScreen' or 'ShippingScreen' for Brad.
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    // 'data' refers to the { fName, lName, deliveryAddress, city, number, deliveryMethod } coming from the 'CartShipPmtScreen' form
    payload: data,
  });
  // SAVING 'Shipping Details' / 'data' into Local Storage
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    // 'data' refers to 'paymentMethod' const coming from 'CartShipPmtScreen'
    payload: data,
  });
  // SAVING 'Shipping Details' / 'data' into Local Storage
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
