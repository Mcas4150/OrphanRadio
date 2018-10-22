import {
  ADD_RESIDENT,
  GET_RESIDENTS,
  GET_RESIDENT,
  DELETE_RESIDENT,
  RESIDENT_LOADING
} from "../actions/types";

const initialState = {
  residents: [],
  resident: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESIDENT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_RESIDENTS:
      return {
        ...state,
        residents: action.payload,
        loading: false
      };
    case GET_RESIDENT:
      return {
        ...state,
        resident: action.payload,
        loading: false
      };
    case ADD_RESIDENT:
      return {
        ...state,
        residents: [action.payload, ...state.residents]
      };
    case DELETE_RESIDENT:
      return {
        ...state,
        residents: state.residents.filter(
          resident => resident._id !== action.payload
        )
      };
    default:
      return state;
  }
}
