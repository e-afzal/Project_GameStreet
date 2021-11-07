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

export const gamesListReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case GAMES_LIST_REQUEST:
      return { loading: true, games: [] };
    case GAMES_LIST_SUCCESS:
      return { loading: false, games: action.payload };
    case GAMES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gameDetailsReducer = (
  state = { game: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case GAME_DETAILS_REQUEST:
      return { loading: true, ...state };
    case GAME_DETAILS_SUCCESS:
      return { loading: false, game: action.payload };
    case GAME_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const consolesListReducer = (state = { consoles: [] }, action) => {
  switch (action.type) {
    case CONSOLES_LIST_REQUEST:
      return { loading: true, consoles: [] };
    case CONSOLES_LIST_SUCCESS:
      return { loading: false, consoles: action.payload };
    case CONSOLES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const consoleDetailsReducer = (
  state = { console: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case CONSOLE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case CONSOLE_DETAILS_SUCCESS:
      return { loading: false, console: action.payload };
    case CONSOLE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const accessoriesListReducer = (state = { accessories: [] }, action) => {
  switch (action.type) {
    case ACCESSORIES_LIST_REQUEST:
      return { loading: true, accessories: [] };
    case ACCESSORIES_LIST_SUCCESS:
      return { loading: false, accessories: action.payload };
    case ACCESSORIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const accessoryDetailsReducer = (
  state = { accessory: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ACCESSORY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ACCESSORY_DETAILS_SUCCESS:
      return { loading: false, accessory: action.payload };
    case ACCESSORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const merchandisesListReducer = (
  state = { merchandises: [] },
  action
) => {
  switch (action.type) {
    case MERCHANDISES_LIST_REQUEST:
      return { loading: true, merchandises: [] };
    case MERCHANDISES_LIST_SUCCESS:
      return { loading: false, merchandises: action.payload };
    case MERCHANDISES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const merchandiseDetailsReducer = (
  state = { merchandise: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case MERCHANDISE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case MERCHANDISE_DETAILS_SUCCESS:
      return { loading: false, merchandise: action.payload };
    case MERCHANDISE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
