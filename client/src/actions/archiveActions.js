import axios from "axios";

import {
  ADD_ARCHIVE,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ARCHIVES,
  GET_ARCHIVE,
  ARCHIVE_LOADING,
  DELETE_ARCHIVE
} from "./types";

// Add Post
export const addArchive = archiveData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/archives", archiveData)
    .then(res =>
      dispatch({
        type: ADD_ARCHIVE,
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
export const getArchives = () => dispatch => {
  dispatch(setArchiveLoading());
  axios
    .get("/api/archives")
    .then(res =>
      dispatch({
        type: GET_ARCHIVES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ARCHIVES,
        payload: null
      })
    );
};

// Get Post
export const getArchive = id => dispatch => {
  dispatch(setArchiveLoading());
  axios
    .get(`/api/archives/${id}`)
    .then(res =>
      dispatch({
        type: GET_ARCHIVE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ARCHIVE,
        payload: null
      })
    );
};

// Delete Post
export const deleteArchive = id => dispatch => {
  axios
    .delete(`/api/archive/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ARCHIVE,
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
export const setArchiveLoading = () => {
  return {
    type: ARCHIVE_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
