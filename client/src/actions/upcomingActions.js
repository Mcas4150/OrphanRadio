import axios from "axios";

import {
  ADD_UPCOMING,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_UPCOMINGS,
  GET_UPCOMING,
  UPCOMING_LOADING,
  DELETE_UPCOMING
} from "./types";

// Add Post
export const addUpcoming = upcomingData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/upcomings", upcomingData)
    .then(res =>
      dispatch({
        type: ADD_UPCOMING,
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
export const getUpcomings = () => dispatch => {
  dispatch(setUpcomingLoading());
  axios
    .get("/api/upcomings")
    .then(res =>
      dispatch({
        type: GET_UPCOMINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_UPCOMINGS,
        payload: null
      })
    );
};

// Get Post
export const getUpcoming = id => dispatch => {
  dispatch(setUpcomingLoading());
  axios
    .get(`/api/upcomings/${id}`)
    .then(res =>
      dispatch({
        type: GET_UPCOMING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_UPCOMING,
        payload: null
      })
    );
};

// Delete Post
export const deleteUpcoming = id => dispatch => {
  axios
    .delete(`/api/upcomings/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_UPCOMING,
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
export const setUpcomingLoading = () => {
  return {
    type: UPCOMING_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
