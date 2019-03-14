import axios from "axios";

import {
  ADD_RELEASE,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_RELEASES,
  GET_RELEASE,
  RELEASE_LOADING,
  DELETE_RELEASE
} from "./types";

// Add Post
export const addRelease = releaseData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/releases", releaseData)
    .then(res =>
      dispatch({
        type: ADD_RELEASE,
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
export const getReleases = () => dispatch => {
  dispatch(setReleaseLoading());
  axios
    .get("/api/releases")
    .then(res =>
      dispatch({
        type: GET_RELEASES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RELEASES,
        payload: null
      })
    );
};

// Get Post
export const getRelease = id => dispatch => {
  dispatch(setReleaseLoading());
  axios
    .get(`/api/releases/${id}`)
    .then(res =>
      dispatch({
        type: GET_RELEASE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RELEASE,
        payload: null
      })
    );
};

// Delete Post
export const deleteRelease = id => dispatch => {
  axios
    .delete(`/api/releases/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_RELEASE,
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
export const setReleaseLoading = () => {
  return {
    type: RELEASE_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
