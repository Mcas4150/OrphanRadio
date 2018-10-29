import { combineReducers } from "redux";
import radioReducer from "./radioReducer";
import authReducer from "./authReducer";
import artistReducer from "./artistReducer";
import residentReducer from "./residentReducer";
import releaseReducer from "./releaseReducer";
import archiveReducer from "./archiveReducer";

export default combineReducers({
  radio: radioReducer,
  auth: authReducer,
  artist: artistReducer,
  resident: residentReducer,
  release: releaseReducer,
  archive: archiveReducer
});
