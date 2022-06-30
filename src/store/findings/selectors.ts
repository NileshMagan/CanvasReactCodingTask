import { createSelector } from "reselect";

import { AppState } from "../reducers/rootReducers";

const getPending = (state: AppState) => state.findings.pending;

const getFindings = (state: AppState) => state.findings.findings;

const getError = (state: AppState) => state.findings.error;

const getSelectedFinding = (state: AppState) => state.findings.selectedFinding;

export const getFindingsSelector = createSelector(
  getFindings, 
  (findings) => findings
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(
  getError, 
  (error) => error
);     

export const getSelectedFindingSelector = createSelector(
  getSelectedFinding, 
  (error) => error
);     