import axios from "axios";

import { GET_STREAM } from "./types";

export const getStream = () => {
  axios
    .get("https://bentennas.airtime.pro/api/live-info")
    .then(res =>
      dispatch({
        type: GET_STREAM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_STREAM,
        payload: null
      })
    );
};
