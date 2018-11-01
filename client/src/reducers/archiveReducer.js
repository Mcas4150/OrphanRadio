import {
  ADD_ARCHIVE,
  GET_ARCHIVES,
  GET_ARCHIVE,
  DELETE_ARCHIVE,
  ARCHIVE_LOADING
} from "../actions/types";

const initialState = {
  archives: [],
  archive: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ARCHIVE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ARCHIVES:
      return {
        ...state,
        archives: action.payload,
        loading: false
      };
    case GET_ARCHIVE:
      return {
        ...state,
        archive: action.payload,
        loading: false
      };
    case ADD_ARCHIVE:
      return {
        ...state,
        archives: [action.payload, ...state.archives]
      };
    case DELETE_ARCHIVE:
      return {
        ...state,
        archive: state.archives.filter(
          archive => archive._id !== action.payload
        )
      };
    default:
      return state;
  }
}
