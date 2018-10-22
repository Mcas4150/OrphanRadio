import { combineReducers } from "redux";
import radioReducer from "./radioReducer";
import authReducer from "./authReducer";
import artistReducer from "./artistReducer";
import residentReducer from "./residentReducer";

export default combineReducers({
  radio: radioReducer,
  auth: authReducer,
  artist: artistReducer,
  resident: residentReducer
});
