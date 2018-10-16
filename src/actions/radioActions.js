import axios from "axios";

import { GET_CURRENT_SHOW, GET_CURRENT_WEEK } from "./types";

export const getCurrentShow = () => dispatch => {
  axios
    .get("https://bentennas.airtime.pro/api/live-info")
    .then(res =>
      dispatch({
        type: GET_CURRENT_SHOW,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CURRENT_SHOW,
        payload: null
      })
    );
};

export const getCurrentWeek = () => dispatch => {
  axios
    .get("https://bentennas.airtime.pro/api/week-info")
    .then(res =>
      dispatch({
        type: GET_CURRENT_WEEK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CURRENT_WEEK,
        payload: null
      })
    );
};
