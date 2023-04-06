import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";

export const LOGIN = "LOGIN";

export const loginAction = (payload: any) => ({
  type: LOGIN,
  payload,
});

const initialState: any = {
  auth: getFromLocalStorage("auth")
    ? JSON.parse(getFromLocalStorage("auth") || "{}")
    : {},
};

export default function signInReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: { login: action.payload},
      };
    default:
      return state;
  }
}
