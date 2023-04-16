// import isEmpty from '../../utils/validation/is-empty';
import * as types from "../action-types";

import initState from "../initialState";

export const errorReducer = (state = initState.error, action: any) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;
    case types.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};
