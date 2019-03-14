import axios from "axios";

import {
  ADD_ARTIST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ARTISTS,
  GET_ARTIST,
  ARTIST_LOADING,
  DELETE_ARTIST
} from "./types";

// Add Post
export const addArtist = artistData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/artists", artistData)
    .then(res =>
      dispatch({
        type: ADD_ARTIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Posts
export const getArtists = () => dispatch => {
  dispatch(setArtistLoading());
  axios
    .get("/api/artists")
    .then(res =>
      dispatch({
        type: GET_ARTISTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ARTISTS,
        payload: null
      })
    );
};

// Get Post
export const getArtist = id => dispatch => {
  dispatch(setArtistLoading());
  axios
    .get(`/api/artists/${id}`)
    .then(res =>
      dispatch({
        type: GET_ARTIST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ARTIST,
        payload: null
      })
    );
};

// Delete Post
export const deleteArtist = id => dispatch => {
  axios
    .delete(`/api/artists/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ARTIST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setArtistLoading = () => {
  return {
    type: ARTIST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
