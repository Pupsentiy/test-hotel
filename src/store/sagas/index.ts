import { all, fork } from "redux-saga/effects";
import watchHotelsSaga from "./hotels/hotelSaga";

export default function* rootSaga() {
  yield all([fork(watchHotelsSaga)])
}

export const LOAD_HOTELS_REQUEST = "LOAD_HOTELS_REQUEST"
export const LOAD_HOTELS_SUCCESS = "LOAD_HOTELS_SUCCESS"
export const LOAD_HOTELS_FAILURE = "LOAD_HOTELS_FAILURE"
export const ADD_FAVORITE_HOTELS = "ADD_FAVORITE_HOTELS"
export const DELETE_FAVORITE_HOTELS = "DELETE_FAVORITE_HOTELS"
export const SORT_RATING_ASC = "SORT_RATING_ASC"
export const SORT_RATING_DESC = "SORT_RATING_DESC"
export const SORT_PRICE_ASC = "SORT_PRICE_ASC"
export const SORT_PRICE_DESC = "SORT_PRICE_DESC"
export const LOGIN = "LOGIN"
