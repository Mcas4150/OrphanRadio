import axios from "axios";

import {
  ADD_RESIDENT,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_RESIDENTS,
  GET_RESIDENT,
  RESIDENT_LOADING,
  DELETE_RESIDENT
} from "./types";

// Add Post
export const addResident = residentData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/residents", residentData)
    .then(res =>
      dispatch({
        type: ADD_RESIDENT,
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
export const getResidents = () => dispatch => {
  dispatch(setResidentLoading());
  axios
    .get("/api/residents")
    .then(res =>
      dispatch({
        type: GET_RESIDENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RESIDENTS,
        payload: null
      })
    );
};

// Get Post
export const getResident = id => dispatch => {
  dispatch(setResidentLoading());
  axios
    .get(`/api/residents/${id}`)
    .then(res =>
      dispatch({
        type: GET_RESIDENT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_RESIDENT,
        payload: null
      })
    );
};

// Delete Post
export const deleteResident = id => dispatch => {
  axios
    .delete(`/api/residents/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_RESIDENT,
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
export const setResidentLoading = () => {
  return {
    type: RESIDENT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
