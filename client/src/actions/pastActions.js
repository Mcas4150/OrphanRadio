import axios from "axios";

import {
  ADD_PAST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_PASTS,
  GET_PAST,
  PAST_LOADING,
  DELETE_PAST
} from "./types";

// Add Post
export const addPast = pastData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/pasts", pastData)
    .then(res =>
      dispatch({
        type: ADD_PAST,
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
export const getPasts = () => dispatch => {
  dispatch(setPastLoading());
  axios
    .get("/api/pasts")
    .then(res =>
      dispatch({
        type: GET_PASTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PASTS,
        payload: null
      })
    );
};

// Get Post
export const getPast = id => dispatch => {
  dispatch(setPastLoading());
  axios
    .get(`/api/pasts/${id}`)
    .then(res =>
      dispatch({
        type: GET_PAST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PAST,
        payload: null
      })
    );
};

// Delete Post
export const deletePast = id => dispatch => {
  axios
    .delete(`/api/pasts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PAST,
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
export const setPastLoading = () => {
  return {
    type: PAST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
