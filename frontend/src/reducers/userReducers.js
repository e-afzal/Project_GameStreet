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
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// REGISTRATION RELATED
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// User 'GET PROFILE DETAILS' RELATED
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// User 'UPDATE PROFILE DETAILS' RELATED - DEPRECATED
// export const userUpdateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_UPDATE_PROFILE_REQUEST:
//       return { loading: true };
//     case USER_UPDATE_PROFILE_SUCCESS:
//       return { loading: false, success: true, userInfo: action.payload };
//     case USER_UPDATE_PROFILE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// User 'UPDATE PROFILE PERSONAL DETAILS' RELATED
export const userUpdatePersonalDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PERSONAL_REQUEST:
      return { loading: true };
    case USER_UPDATE_PERSONAL_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PERSONAL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// User 'UPDATE PROFILE PASSWORD' RELATED
export const userUpdatePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PASSWORD_REQUEST:
      return { loading: true };
    case USER_UPDATE_PASSWORD_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// User 'UPDATE PROFILE DELIVERY ADDRESS' RELATED
export const userUpdateAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_ADDRESS_REQUEST:
      return { loading: true };
    case USER_UPDATE_ADDRESS_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_ADDRESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
