import axios, { AxiosInstance } from "axios";
import { ADIM_API_URL, API_URL } from "@/constants/config";

let Authorization = localStorage.getItem("jwtToken");
// export default axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Credentials": "true",
//     Authorization: Authorization ? `Bearer ${Authorization}` : "",
//     "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
//   },
// });

type HttpType = AxiosInstance & {
  client: AxiosInstance;
  admin: AxiosInstance;
};

const create = () => {
  let http: HttpType = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      Authorization: Authorization ? `Bearer ${Authorization}` : '',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, PATCH, DELETE, OPTIONS'
    }
  }) as HttpType;

  http.client = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      "x-access-token": Authorization ? `Bearer ${Authorization}` : '',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, PATCH, DELETE, OPTIONS'
    }
  });

  http.admin = axios.create({
    baseURL: ADIM_API_URL,
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      Authorization: `Bearer ${'R99XvVfW2kEfV5a57TgcLQdv88bED9ql'}`,
      'Access-Control-Allow-Methods': 'GET, PUT, POST, PATCH, DELETE, OPTIONS'
    }
  });

  return http;
};

export default create();
