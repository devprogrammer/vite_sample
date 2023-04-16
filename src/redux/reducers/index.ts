import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import { profileReducer } from "./profileReducer";
import { ticketReducer } from "./ticketReducer";

export default combineReducers({
  auth: authReducer,
  ticket: ticketReducer,
  profile: profileReducer,
  error: errorReducer,
});
