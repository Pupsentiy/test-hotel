import { getFromLocalStorage } from "../../../core/helpers/localStorage.helpers";
import { LOGIN } from "../../sagas";
import { TSetLoginAction, TSignInReducerState, TSinInAction } from "../../types/store.types";


const initialState:TSignInReducerState  = {
  auth: getFromLocalStorage("auth")
    ? JSON.parse(getFromLocalStorage("auth") || "{}")
    : {},
};

export default function signInReducer(state = initialState, action:TSetLoginAction):TSignInReducerState {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload)
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
}
