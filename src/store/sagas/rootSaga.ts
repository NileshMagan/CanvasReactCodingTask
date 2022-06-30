import { all, fork } from "redux-saga/effects";

import findingsSaga from "../findings/sagas";

export function* rootSaga() {
  yield all([
    fork(findingsSaga)
  ])
}