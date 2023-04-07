import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { getSumDays } from "../../../core/helpers/dateFormat.helpers";

import {
  fetchHotelsFailureAction,
  fetchHotelsSuccessAction,
} from "../../actions";

import {
  ResponseGenerator,
  THotels,
  TGetHotelsFromApiProps,
  ActionTypesHotels,
} from "../../types/store.types";

const getHotelsFromApi = async (payload: TGetHotelsFromApiProps) => {
  const { location, currentDate, amountOfDays } = payload;
  const sumDays = getSumDays(currentDate, amountOfDays);
  return await axios.get<THotels[]>(
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&language=ru&checkIn=${currentDate}&checkOut=${sumDays}&limit=20`
  );
};

export function* fetchHotelList(action: {
  type: string;
  payload: TGetHotelsFromApiProps;
}) {
  try {
    const responce: ResponseGenerator = yield call(
      getHotelsFromApi,
      action.payload
    );
    yield put(fetchHotelsSuccessAction(responce.data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log("error message: ", e.message);
      yield put(fetchHotelsFailureAction(e.message));
    } else {
      console.log("unexpected error: ", e);
      yield put(fetchHotelsFailureAction("произошла непредвиденная ошибка"));
    }
  }
}

export default function* watchHotelsSaga() {
  yield all([
    takeLatest(ActionTypesHotels.LOAD_HOTELS_REQUEST, fetchHotelList),
  ]);
}
