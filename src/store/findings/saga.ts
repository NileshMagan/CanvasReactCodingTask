import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { API } from "../../api/api";

import { fetchFindingsFailure, fetchFindingsSuccess, setSelectedFinding, unsetSelectedFinding } from "./actions";
import { FETCH_FINDINGS_REQUEST, SET_SELECTED_FINDING, UNSET_SELECTED_FINDING } from "./actionTypes";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchFindingsSaga() {
  try {
    const response: any[] =  yield call(API.GetFindings);

    // Add IDs
    if (response) {
      response.forEach((finding, i) => {
        finding.id = i + 1;
      });
    }
    
    yield put(
      fetchFindingsSuccess({
        findings: response
      })
    );
  } catch (e: any) {
    yield put(
      fetchFindingsFailure({
        error: e.message,
      })
    );
  }
}

function* setSelectedFindingSaga(
  { type, payload }: 
  { type: typeof SET_SELECTED_FINDING, payload: number }
) {
    yield put(
      setSelectedFinding({
        // findings: response.data,
        id: payload
      })
    );
}

function* unsetSelectedFindingSaga(
  {type, payload}: 
  { type: typeof UNSET_SELECTED_FINDING, payload: number }
) {
    yield put(
      unsetSelectedFinding({
        id: payload
      })
    );
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
// function* findingsSaga() {
  // yield all([takeLatest(FETCH_FINDINGS_REQUEST, fetchFindingsSaga)]);
  // export function* findingsSaga() {
function* findingsSaga() {
  // yield all([takeLatest(FETCH_FINDINGS_REQUEST, fetchFindingsSaga),
  //            takeLatest(SET_SELECTED_FINDING, setSelectedFindingSaga),
  //            takeLatest(UNSET_SELECTED_FINDING, unsetSelectedFindingSaga)]);
  yield takeEvery(FETCH_FINDINGS_REQUEST, fetchFindingsSaga);
  // yield takeLatest(SET_SELECTED_FINDING, setSelectedFindingSaga);
  // yield takeEvery(UNSET_SELECTED_FINDING, unsetSelectedFindingSaga);
  // yield takeEvery(FETCH_FINDINGS_REQUEST, () => console.log('hwhrurjerujenjernjrfn'));
  console.log('triggered');
}

export default findingsSaga;