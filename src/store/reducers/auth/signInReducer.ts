import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";
import {
  ActionTypesAuth,
  TSetLoginAction,
  TSignInReducerState,
} from "../../types/store.types";

const initialState: TSignInReducerState = {
  auth: getFromLocalStorage("auth")
    ? JSON.parse(getFromLocalStorage("auth") || "{}")
    : {},
};

export default function signInReducer(
  state = initialState,
  action: TSetLoginAction
): TSignInReducerState {
  switch (action.type) {
    case ActionTypesAuth.LOGIN:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
}
