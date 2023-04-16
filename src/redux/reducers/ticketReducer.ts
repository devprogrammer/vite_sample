import * as types from "../action-types";
import initState from "../initialState";

export const ticketReducer = (state = initState.ticket, action: any) => {
  switch (action.type) {
    case types.LOADING_TICKET_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.LOADING_TICKET_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.GET_ALL_TICKETS:
      return {
        ...state,
        loading: false,
        legs: [],
        tickets: action.payload,
      };
    case types.LEGS_ARR:
      return  {
        ...state,
        legs: action.payload,
      }
    case types.SAVE_FILE:
      return {
        ...state,
        file: action.payload,
      }
    case types.GET_ERRORS:
      return {
        ...state,
        loading: false,
        legs: [],
        error: action.payload,
      }
    default:
      return state;
  }
};
