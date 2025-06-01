import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import habitReducer from './habits/reducers';
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  habit: habitReducer,
  // future reducers...
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
