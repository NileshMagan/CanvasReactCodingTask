import { all, fork } from "redux-saga/effects";

import findingsSaga from "../findings/saga";

export function* rootSaga() {
  yield all([
    fork(findingsSaga)
  ])
}