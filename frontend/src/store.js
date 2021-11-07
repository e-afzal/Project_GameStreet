import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  accessoriesListReducer,
  accessoryDetailsReducer,
  consoleDetailsReducer,
  consolesListReducer,
  gameDetailsReducer,
  gamesListReducer,
  merchandiseDetailsReducer,
  merchandisesListReducer,
  // productDetailsReducer,
  // productListReducer,
} from "./reducers/productReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateAddressReducer,
  userUpdatePasswordReducer,
  userUpdatePersonalDetailsReducer,
} from "./reducers/userReducers.js";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  ordersFetchReducer,
} from "./reducers/orderReducers.js";

const reducer = combineReducers({
  // PRODUCT RELATED
  // productList: productListReducer,
  // productDetails: productDetailsReducer,
  gamesList: gamesListReducer,
  gameDetails: gameDetailsReducer,
  consolesList: consolesListReducer,
  consoleDetails: consoleDetailsReducer,
  accessoriesList: accessoriesListReducer,
  accessoryDetails: accessoryDetailsReducer,
  merchandisesList: merchandisesListReducer,
  merchandiseDetails: merchandiseDetailsReducer,
  // CART RELATED
  cart: cartReducer,
  // USER RELATED
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdatePersonalDetails: userUpdatePersonalDetailsReducer,
  userUpdatePassword: userUpdatePasswordReducer,
  userUpdateAddress: userUpdateAddressReducer,
  // ORDER RELATED
  orderCreate: orderCreateReducer,
  ordersFetch: ordersFetchReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
});

// 'cartItems' from LOCAL STORAGE set in 'addToCart Action from cartActions.js'. If item(s) exist, save else save as EMPTY array
// So if you check REDUX browser tool in 'state' tab, cartItems will exist under 'cart' either as EMPTY ARRAY, or with products in it
// Here we are 'PARSING' from JSON to normal string object
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

// Below, we save above 'cartItemsFromStorage' to the 'initialState'
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
