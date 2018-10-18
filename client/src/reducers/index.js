import { combineReducers } from "redux";
import radioReducer from "./radioReducer";
import authReducer from "./authReducer";

export default combineReducers({
  radio: radioReducer,
  auth: authReducer
});
