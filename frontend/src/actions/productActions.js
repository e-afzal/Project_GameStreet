// PACKAGE
import axios from "axios";

// IMPORTS
import {
  ACCESSORIES_LIST_FAIL,
  ACCESSORIES_LIST_REQUEST,
  ACCESSORIES_LIST_SUCCESS,
  ACCESSORY_DETAILS_FAIL,
  ACCESSORY_DETAILS_REQUEST,
  ACCESSORY_DETAILS_SUCCESS,
  CONSOLES_LIST_FAIL,
  CONSOLES_LIST_REQUEST,
  CONSOLES_LIST_SUCCESS,
  CONSOLE_DETAILS_FAIL,
  CONSOLE_DETAILS_REQUEST,
  CONSOLE_DETAILS_SUCCESS,
  GAMES_LIST_FAIL,
  GAMES_LIST_REQUEST,
  GAMES_LIST_SUCCESS,
  GAME_DETAILS_FAIL,
  GAME_DETAILS_REQUEST,
  GAME_DETAILS_SUCCESS,
  MERCHANDISES_LIST_FAIL,
  MERCHANDISES_LIST_REQUEST,
  MERCHANDISES_LIST_SUCCESS,
  MERCHANDISE_DETAILS_FAIL,
  MERCHANDISE_DETAILS_REQUEST,
  MERCHANDISE_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const listGames = () => async (dispatch) => {
  try {
    dispatch({ type: GAMES_LIST_REQUEST });

    const res = await axios.get("/api/products/games");
    dispatch({ type: GAMES_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GAMES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGameDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GAME_DETAILS_REQUEST });

    const res = await axios.get(`/api/products/games/${id}`);
    dispatch({ type: GAME_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GAME_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listConsoles = () => async (dispatch) => {
  try {
    dispatch({ type: CONSOLES_LIST_REQUEST });

    const res = await axios.get("/api/products/consoles");
    dispatch({ type: CONSOLES_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: CONSOLES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listConsoleDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONSOLE_DETAILS_REQUEST });

    const res = await axios.get(`/api/products/consoles/${id}`);
    dispatch({ type: CONSOLE_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: CONSOLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listAccessories = () => async (dispatch) => {
  try {
    dispatch({ type: ACCESSORIES_LIST_REQUEST });

    const res = await axios.get("/api/products/accessories");
    dispatch({ type: ACCESSORIES_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ACCESSORIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listAccessoryDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACCESSORY_DETAILS_REQUEST });

    const res = await axios.get(`/api/products/accessories/${id}`);
    dispatch({ type: ACCESSORY_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ACCESSORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMerchandises = () => async (dispatch) => {
  try {
    dispatch({ type: MERCHANDISES_LIST_REQUEST });

    const res = await axios.get("/api/products/merchandises");
    dispatch({ type: MERCHANDISES_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: MERCHANDISES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMerchandiseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MERCHANDISE_DETAILS_REQUEST });

    const res = await axios.get(`/api/products/merchandises/${id}`);
    dispatch({ type: MERCHANDISE_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: MERCHANDISE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
