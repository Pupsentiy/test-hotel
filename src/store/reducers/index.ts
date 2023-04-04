import { combineReducers, } from "redux";
import hotelReducer from "./hotelReducer";

export const rootReducer = combineReducers({
  hotelReducer,
});