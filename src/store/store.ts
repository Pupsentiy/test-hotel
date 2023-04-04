import {
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from 'redux-saga'


import { composeEnhancers } from "../core/constants/constants";
import rootSaga from "./sagas";
import { rootReducer } from "./reducers";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store