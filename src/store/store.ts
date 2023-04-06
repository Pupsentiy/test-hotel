import {
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from 'redux-saga'


import { composeEnhancers } from "../core/constants/constants";
import rootSaga from "./sagas";
import { rootReducer } from "./reducers";
import { saveToLocalStorage } from "../core/helpers/localStorage.helpers";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveToLocalStorage(store.getState().favoriteHotelReducer.favorite,'favorite');
  saveToLocalStorage(store.getState().signInReducer.auth,'auth');
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store