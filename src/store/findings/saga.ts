import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../api/api";
import { Finding } from "../../data-structures/data";

import { fetchFindingsFailure, fetchFindingsSuccess } from "./actions";
import { FETCH_FINDINGS_REQUEST } from "./actionTypes";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchFindingsSaga() {
  try {
    const response: Finding[] =  yield call(API.GetFindings);

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


// // This is a saga to handle the setting of the selected finding, however is commented out since it is not needed
// function* setSelectedFindingSaga(
//   { type, payload }: 
//   { type: typeof SET_SELECTED_FINDING, payload: number }
// ) {
//     yield put(
//       setSelectedFinding({
//         id: payload
//       })
//     );
// }

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/

function* findingsSaga() {
  yield takeLatest(FETCH_FINDINGS_REQUEST, fetchFindingsSaga);
}

export default findingsSaga;