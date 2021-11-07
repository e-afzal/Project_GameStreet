// PACKAGE
import axios from "axios";

// IMPORTS
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_ADDRESS_FAIL,
  USER_UPDATE_ADDRESS_REQUEST,
  USER_UPDATE_ADDRESS_SUCCESS,
  USER_UPDATE_PASSWORD_FAIL,
  USER_UPDATE_PASSWORD_REQUEST,
  USER_UPDATE_PASSWORD_SUCCESS,
  USER_UPDATE_PERSONAL_FAIL,
  USER_UPDATE_PERSONAL_REQUEST,
  USER_UPDATE_PERSONAL_SUCCESS,
} from "../constants/userConstants";

// LOGIN RELATED
export const login = (email, password) => async (dispatch) => {
  // Above parameter requires 'email' & 'password' from user for us to verify with the server
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // Using 'config' to tell the server the type of DATA being TRANSMITTED to the server. This case, 'JSON' data
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    // Save user info (data) received from server to Local Storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  // Remove 'userInfo' containing user details from LOCAL STORAGE
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};

// REGISTRATION RELATED
export const register =
  (fName, lName, email, number, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        { fName, lName, email, number, password },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      // V.IMP below - Immediately login user after successful registration
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      // Setting user data in local storage since its a part of 'logging in'
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// USER 'PROFILE DETAILS' RELATED
export const getUserDetails = (id) => async (dispatch, getState) => {
  // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo'
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER 'UPDATE PROFILE PERSONAL DETAILS' RELATED
export const updatePersonalDetails = (user) => async (dispatch, getState) => {
  // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
  try {
    dispatch({
      type: USER_UPDATE_PERSONAL_REQUEST,
    });

    // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo'
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // To UPDATE, we are sending the ENTIRE 'USER' object passed from 'DashboardScreen'
    const { data } = await axios.put(
      `/api/users/profile/personalDetails`,
      user,
      config
    );

    dispatch({
      type: USER_UPDATE_PERSONAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PERSONAL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER 'UPDATE PROFILE PASSWORD' RELATED
export const updatePassword = (user) => async (dispatch, getState) => {
  // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
  try {
    dispatch({
      type: USER_UPDATE_PASSWORD_REQUEST,
    });

    // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo'
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // To UPDATE, we are sending the ENTIRE 'USER' object passed from 'DashboardScreen'
    const { data } = await axios.put(
      `/api/users/profile/password`,
      user,
      config
    );

    dispatch({
      type: USER_UPDATE_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER 'UPDATE PROFILE DELIVERY ADDRESS' RELATED
export const updateDeliveryAddress = (user) => async (dispatch, getState) => {
  // Using 'getState', we can get the userInfo from 'userLogin' in the state IF we are already logged in.
  try {
    dispatch({
      type: USER_UPDATE_ADDRESS_REQUEST,
    });

    // Pulling 'userInfo' out of 'userLogin' to get hold of the 'token' available on 'userInfo'
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // To UPDATE, we are sending the ENTIRE 'USER' object passed from 'DashboardScreen'
    const { data } = await axios.put(
      `/api/users/profile/address`,
      user,
      config
    );

    dispatch({
      type: USER_UPDATE_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_ADDRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
