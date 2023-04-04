// import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
// // import { fetchHotelData } from "../../api";
// import { GET_HOTEL_DATA } from "../actions/actionCreator";


// export function* workerSaga():any {
//   const data:any = yield call(fetchHotelData)
//   console.log(data)
//  yield put({type:GET_HOTEL_DATA,payload:data})
// }

// export function* wathcCLickSaga() {
//   yield take(GET_HOTEL_DATA);
//   console.log("Saga ready");
// }

import {all} from 'redux-saga/effects'
import { hotelWatcher } from './hotelSaga'

export default function* rootSaga() {
  yield hotelWatcher();
}

// export function* rootWatcher(){
//   yield all([hotelWatcher()])
// } 