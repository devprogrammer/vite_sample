import headers from "./headers";
import http from "@/utils/http-base";
import { AppRoutes } from "@/app/route/AppRoute";
import { GET_ERRORS, LOADING_AUTH_FINISHED, LOADING_AUTH_STARTED, USER_LOGIN } from "../action-types";

export const login = (data: any, navigate: any) => (dispatch: any) => {
  dispatch({ type: LOADING_AUTH_STARTED });
  http.client
    .post(`/login`, data, headers())
    .then((res: any) => {
      const { data } = res.data;
      localStorage.setItem("jwtToken", data);
      dispatch({
        type: USER_LOGIN,
        payload: data,
      })
      navigate(AppRoutes.main.ticket);
    })
    .catch((err: any) => {
      dispatch({ type: LOADING_AUTH_FINISHED });
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    })
}