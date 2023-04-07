import {
  AnyAction,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import { rootReducer } from "./reducers";

import { composeEnhancers } from "../core/constants/constants";
import { saveToLocalStorage } from "../core/helpers/localStorage.helpers";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware, thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveToLocalStorage(
    store.getState().favoriteHotelReducer.favorite,
    "favorite"
  );
  saveToLocalStorage(store.getState().signInReducer.auth, "auth");
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;

export default store;
