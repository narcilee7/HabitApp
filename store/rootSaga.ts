
import { all, fork } from "redux-saga/effects";
import habitSaga from "./habits/sagas";


export default function* rootSaga() {
  yield all([
    fork(habitSaga),
  ]);
}
