import {
  GET_ALL_TICKETS,
  UPLOAD_TICKET,
  UPLOAD_IMAGE,
  GET_ERRORS,
  LEGS_ARR,
  SAVE_FILE,
  LOADING_TICKET_STARTED,
  LOADING_TICKET_FINISHED,
} from "../action-types";
import headers from "./headers";
import http from "@/utils/http-base";
import { AppRoutes } from "@/app/route/AppRoute";

export const getTickets = (token: string) => (dispatch: any) => {
  dispatch({ type: LOADING_TICKET_STARTED });
  http.client
    .get(`/getRecords`, headers(token))
    .then((res: any) => {
      const data = res.data.data;
      dispatch({
        type: GET_ALL_TICKETS,
        payload: data,
      });
    })
    .catch((err: any) => {
      dispatch({ type: LOADING_TICKET_FINISHED })
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const createTicket = (token: any, data: any, file?: any, navigate?: any) => (dispatch: any) => {
  dispatch({ type: LOADING_TICKET_STARTED });
  http.client
    .post(`/createTicket`, data, headers(token))
    .then((res: any) => {
      console.log("res ===>", res);
      dispatch(uploadFile(file, res.data.data.BookingId, token));
      dispatch(getTickets(token));
      navigate && navigate(AppRoutes.main.request);
    })
    .catch((err: any) => {
      dispatch({ type: LOADING_TICKET_FINISHED })
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
}

export const cancelTicket = (data: any, token: any) => (dispatch: any) => {
  dispatch({ type: LOADING_TICKET_STARTED });
  http.client
    .post(`/cancelTicket`, data, headers(token))
    .then((res: any) => {
      const data = res.data.data;
      dispatch(getTickets(data.Passport));
    })
    .catch((err: any) => {
      dispatch({ type: LOADING_TICKET_FINISHED })
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
}

const uploadFile = (file: any, id: any, token: any) => (dispatch: any) => {
  
  dispatch({ type: LOADING_TICKET_STARTED });

  const formData = new FormData();
  formData.append('Image', file);
  // formData.append('Type', "passport");
  formData.append('Type', "other");
  formData.append('BookingId', id);
  const config = {
    headers: { 
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'X-Requested-With': 'XMLHttpRequest',
      'x-access-token': token,
    }
  };
  http.client
    .post(`/upload`, formData, config)
    .then((res: any) => {
      console.log("file uploading result ===>", res.data.data);
      dispatch({ type: LOADING_TICKET_FINISHED })
    })
    .catch((err: any) => {
      dispatch({ type: LOADING_TICKET_FINISHED })
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    })
}

export const selectedLegs = (data: any[]) => (dispatch: any) => {
  dispatch({ 
    type: LEGS_ARR,
    payload: data,
  })
}

export const selectedFile = (data: any) => (dispatch: any) => {
  dispatch({
    type: SAVE_FILE,
    payload: data,
  })
}