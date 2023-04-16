import http from "@/utils/http-base";
import headers from "./headers";
import { AppRoutes } from "@/app/route/AppRoute";
import { 
  LOADING_PROFILE_STARTED, 
  LOADING_PROFILE_FINISHED, 
  GET_ERRORS, 
  GET_PROFILE, 
} from "../action-types";

export const getProfile = (token: any) => (dispatch: any) => {
  dispatch({ type: LOADING_PROFILE_STARTED });
  http.client
    .get(`/profile`, headers(token))
    .then((res: any) => {
      const { data } = res.data;
      dispatch({
        type: GET_PROFILE,
        payload: data,
      })
    })
    .catch((err: any) => {
      dispatch({ type: LOADING_PROFILE_FINISHED });
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
}