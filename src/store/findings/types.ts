import {
    FETCH_FINDINGS_REQUEST,
    FETCH_FINDINGS_SUCCESS,
    FETCH_FINDINGS_FAILURE,
    SET_SELECTED_FINDING,
  } from "./actionTypes";
  
  export interface IFinding {
    type?: string;
    x?: string;
    y?: string;
    label?: string;
    note?: string;
    hours?: string;
    minutes?: string;
    distanceFromCenter?: string;
  }
  
  export interface FindingsState {
    pending: boolean;
    findings: IFinding[];
    selectedFinding: number;
    error: string | null;
  }
  
  // Fetch Findings
  export interface FetchFindingsSuccessPayload {
    findings: IFinding[];
  }
  
  export interface FetchFindingsFailurePayload {
    error: string;
  }

  export interface FetchFindingsRequest {
    type: typeof FETCH_FINDINGS_REQUEST;
  }
  
  export type FetchFindingsSuccess = {
    type: typeof FETCH_FINDINGS_SUCCESS;
    payload: FetchFindingsSuccessPayload;
  };
  
  export type FetchFindingsFailure = {
    type: typeof FETCH_FINDINGS_FAILURE;
    payload: FetchFindingsFailurePayload;
  };

// Selected Findings
  export interface SetSelectedFindingPayload {
    id: number;
  }

  export type SetSelectedFinding = {
    type: typeof SET_SELECTED_FINDING;
    payload: SetSelectedFindingPayload;
  };

  export type FindingsActions =
    | FetchFindingsRequest
    | FetchFindingsSuccess
    | FetchFindingsFailure
    | SetSelectedFinding;