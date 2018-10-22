import {
  ADD_ARTIST,
  GET_ARTISTS,
  GET_ARTIST,
  DELETE_ARTIST,
  ARTIST_LOADING
} from "../actions/types";

const initialState = {
  artists: [],
  artist: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ARTIST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ARTISTS:
      return {
        ...state,
        artists: action.payload,
        loading: false
      };
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
        loading: false
      };
    case ADD_ARTIST:
      return {
        ...state,
        artists: [action.payload, ...state.artists]
      };
    case DELETE_ARTIST:
      return {
        ...state,
        artists: state.artists.filter(artist => artist._id !== action.payload)
      };
    default:
      return state;
  }
}
