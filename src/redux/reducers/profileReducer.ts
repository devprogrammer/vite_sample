import * as types from "../action-types";
import initState from "../initialState";

export const profileReducer = (state = initState.profile, action: any) => {
  switch (action.type) {
    case types.LOADING_PROFILE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.LOADING_PROFILE_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.GET_PROFILE:
      return {
        ...state,
        info: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
