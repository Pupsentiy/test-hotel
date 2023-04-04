import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";
import { FETCH_HOTELS, SET_HOTELS, setHotel } from "../reducers/hotelReducer";
import { json } from "stream/consumers";
import { fetchHotelsFromApi } from "../../api";

// const fetchHotelsFromApi = () =>
//   fetch(
//     "https://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=hotel&limit=10"
//   );

function* fetchHotelWorker(): any {
  const data = yield call(fetchHotelsFromApi);
  yield put(setHotel(data));
}

export function* hotelWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelWorker);
}
