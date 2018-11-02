import {
  ADD_PAST,
  GET_PASTS,
  GET_PAST,
  DELETE_PAST,
  PAST_LOADING
} from "../actions/types";

const initialState = {
  pasts: [],
  past: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PAST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PASTS:
      return {
        ...state,
        pasts: action.payload,
        loading: false
      };
    case GET_PAST:
      return {
        ...state,
        past: action.payload,
        loading: false
      };
    case ADD_PAST:
      return {
        ...state,
        pasts: [action.payload, ...state.pasts]
      };
    case DELETE_PAST:
      return {
        ...state,
        pasts: state.pasts.filter(past => past._id !== action.payload)
      };
    default:
      return state;
  }
}
