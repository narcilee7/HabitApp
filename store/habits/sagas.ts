import { takeEvery, put, delay } from "redux-saga/effects";
import { sethabits } from "./reducers";


function* loadhabits() {
  yield delay(500);
  yield put(
    sethabits([
      { id: "1", title: "早起打卡" },
      { id: "2", title: "读书30分钟" },
    ])
  );
}

export default function* habitSaga() {
  yield takeEvery("habit/loadhabits", loadhabits);
}