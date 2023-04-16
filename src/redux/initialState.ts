
import { TicketType } from "./data-types";

export type TicketState = {
  auth: {
    loading: boolean,
    token: any,
  },
  ticket: {
    loading: boolean,
    tickets: TicketType[] | null,
    legs: any[],
    file: any,
  },
  profile: {
    loading: boolean,
    info: any,
  },
  error: {}
}

let initialState: TicketState = {
  auth: {
    loading: false,
    token: null,
  },
  ticket: {
    loading: false,
    tickets: [],
    legs: [],
    file: null,
  },
  profile: {
    loading: false,
    info: null,
  },
  error: {},
}
// eslint-disable-next-line import/no-anonymous-default-export
export default initialState;
