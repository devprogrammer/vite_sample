import { GET_ERRORS, CLEAR_ERRORS } from "../action-types";

// Set logged in user
export const setErrorMessage = (payload: any) => {
  return {
    type: GET_ERRORS,
    payload: payload,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
