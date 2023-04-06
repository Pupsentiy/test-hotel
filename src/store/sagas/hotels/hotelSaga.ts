import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_HOTELS_REQUEST,
  fetchHotelsFailureAction,
  fetchHotelsSuccessAction,
} from "../../reducers/hotels/hotelReducer";
import axios from "axios";
import { getSumDays } from "../../../core/helpers/dateFormat.helpers";

const getHotelsFromApi = async (payload: any) => {
  const { location, currentDate, amountOfDays } = payload;

  const sumDays = getSumDays(currentDate, amountOfDays)
  return await axios.get<any>(
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&language=ru&checkIn=${currentDate}&checkOut=${sumDays}&limit=20`
  );
};

export function* fetchHotelList({ payload }: any): any {
  try {
    const responce = yield call(getHotelsFromApi, payload);
    yield put(
      fetchHotelsSuccessAction({
        data: responce.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchHotelsFailureAction({
        error: e.message,
      })
    );
  }
}

export default function* watchHotelsSaga() {
  yield all([takeLatest(LOAD_HOTELS_REQUEST, fetchHotelList)]);
}
