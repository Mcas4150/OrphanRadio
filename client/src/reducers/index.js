import { combineReducers } from "redux";
import radioReducer from "./radioReducer";

export default combineReducers({
  radio: radioReducer
});
