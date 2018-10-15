import { GET_STREAM } from "../actions/types";

const initialState = {
  stream: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STREAM:
      return {
        ...state,
        stream: action.payload
      };
    default:
      return state;
  }
}
