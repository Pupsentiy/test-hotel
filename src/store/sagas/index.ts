import { all, fork } from "redux-saga/effects";
import watchHotelsSaga from "./hotels/hotelSaga";

export default function* rootSaga() {
  yield all([fork(watchHotelsSaga)]);
}
