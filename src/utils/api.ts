
import http from './http-base';
import headers from '../redux/actions/headers';

export const purchaseTicket = async(data: any, token: string) => {
  return http.client.post(`/purchaseTicket`, data, headers())
}

// admin api
export const getPendingBooks = async() => {
  return http.admin.get(`/getPendingBookings`, headers())
}

export const addPriceToBooking = async(data: any) => {
  return http.admin.post(`/addPriceToBooking`, data, headers());
}