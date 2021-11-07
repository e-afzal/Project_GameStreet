// IMPORTS
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_EMPTY,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // SINGLE ITEM saved to 'ITEM'
      const item = action.payload;

      // See if item exists by checking with 'item.product' which is the ID. If it does, save to 'existItem'.
      // NOTE: As per our addToCart action from 'cartActions.js', the 'product' is the 'data._id'.
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        // If ITEM aleady exists in CART
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            // If the current items in CART's IDs are = to 'existItem.product' which is the ID, we return the 'item' from above else return 'x' from the 'cartItems'
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // Simply saving the 'item' to the 'cartItems'
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        // Filter out the item being removed. 'product' being the ID
        cartItems: state.cartItems.filter(
          // action.payload is the 'id' being transferred from the 'removeFromCart' action in the 'cartActions' file
          (item) => item.product !== action.payload
        ),
      };

    case CART_EMPTY:
      return {
        ...state,
        cartItems: action.payload,
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
