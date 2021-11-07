// PACKAGE
import axios from "axios";

// IMPORTS
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDERS_FETCH_REQUEST,
  ORDERS_FETCH_SUCCESS,
  ORDERS_FETCH_FAIL,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
    // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo' since only LOGGED IN users can CREATE AN ORDER
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // Passing the ENTIRE 'ORDER' object from the 'ShipnPmtScreen'
    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDERS_FETCH_REQUEST,
    });

    // GET USER INFO for TOKEN
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/orders/myorders", config);

    dispatch({
      type: ORDERS_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDERS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
    // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo' since only LOGGED IN users can GET ORDER DETAILS by providing the orderId
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        // Since we are making a GET request, no need for 'Content-Type' since we are not 'POSTING' or 'UPDATING' anything
        // But we do need to provide the 'TOKEN' for auth purpose.
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${orderId}`, config);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    // Two things being passed: 'order' Object and paymentResult coming from 'PAYPAL'
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });

      // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
      // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo' since only LOGGED IN users can GET ORDER DETAILS by providing the orderId
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // Passing the ENTIRE 'ORDER' object from the 'ShipnPmtScreen'
      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );

      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
