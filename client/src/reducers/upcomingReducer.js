import {
  ADD_UPCOMING,
  GET_UPCOMINGS,
  GET_UPCOMING,
  DELETE_UPCOMING,
  UPCOMING_LOADING
} from "../actions/types";

const initialState = {
  upcomings: [],
  upcoming: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPCOMING_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_UPCOMINGS:
      return {
        ...state,
        upcomings: action.payload,
        loading: false
      };
    case GET_UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
        loading: false
      };
    case ADD_UPCOMING:
      return {
        ...state,
        upcomings: [action.payload, ...state.upcomings]
      };
    case DELETE_UPCOMING:
      return {
        ...state,
        upcomings: state.upcomings.filter(
          upcoming => upcoming._id !== action.payload
        )
      };
    default:
      return state;
  }
}
