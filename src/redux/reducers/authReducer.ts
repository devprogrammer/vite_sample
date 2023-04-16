import * as types from "../action-types";
import initState from "../initialState";

export const authReducer = (state = initState.auth, action: any) => {
  switch (action.type) {
    case types.LOADING_AUTH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.LOADING_AUTH_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.USER_LOGIN:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    default:
      return state;
  }
};
