import {
  ADD_RELEASE,
  GET_RELEASES,
  GET_RELEASE,
  DELETE_RELEASE,
  RELEASE_LOADING
} from "../actions/types";

const initialState = {
  releases: [],
  release: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RELEASE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RELEASES:
      return {
        ...state,
        releases: action.payload,
        loading: false
      };
    case GET_RELEASE:
      return {
        ...state,
        release: action.payload,
        loading: false
      };
    case ADD_RELEASE:
      return {
        ...state,
        releases: [action.payload, ...state.releases]
      };
    case DELETE_RELEASE:
      return {
        ...state,
        releases: state.releases.filter(
          release => release._id !== action.payload
        )
      };
    default:
      return state;
  }
}
