import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  token: "",
  userData: [],
  currentlyPlaying: "",
  userPlaylists: [],
  featuredPlaylists: [],
  topArtists: []
};

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return Object.assign({}, state, {
        token: action.value
      });
    case "SET_USERDATA":
      return Object.assign({}, state, {
        userData: action.value
      });
    case "SET_CURRENTLY_PLAYING":
      return Object.assign({}, state, {
        currentlyPlaying: action.value
      });
    case "SET_USER_PLAYLISTS":
      return Object.assign({}, state, {
        userPlaylists: action.value
      });
    case "SET_FEATURED_PLAYLISTS":
      return Object.assign({}, state, {
        featuredPlaylists: action.value
      });
    case "SET_TOP_ARTISTS":
      return Object.assign({}, state, {
        topArtists: action.value
      });
    default:
      return state;
  }
};

// ACTIONS
export const setToken = value => dispatch => {
  return dispatch({
    type: "SET_TOKEN",
    value
  });
};

export const setUserData = value => dispatch => {
  return dispatch({
    type: "SET_USERDATA",
    value
  });
};

export const setCurrentlyPlaying = value => dispatch => {
  return dispatch({
    type: "SET_CURRENTLY_PLAYING",
    value
  });
};

export const setUserPlaylists = value => dispatch => {
  return dispatch({
    type: "SET_USER_PLAYLISTS",
    value
  });
};

export const setFeaturedPlaylists = value => dispatch => {
  return dispatch({
    type: "SET_FEATURED_PLAYLISTS",
    value
  });
};

export const setTopArtists = value => dispatch => {
  return dispatch({
    type: "SET_TOP_ARTISTS",
    value
  });
};

export function initializeStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
