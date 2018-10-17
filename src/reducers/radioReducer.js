import { GET_CURRENT_SHOW, GET_CURRENT_WEEK } from "../actions/types";

const initialState = {
  currentShowStream: null,
  // currentShowStream: { currentShow: [{ name: "not-playing" }] },
  currentWeekStream: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_SHOW:
      return {
        ...state,
        currentShowStream: action.payload
      };
    case GET_CURRENT_WEEK:
      return {
        ...state,
        currentWeekStream: action.payload
      };
    default:
      return { ...state };
  }
}
