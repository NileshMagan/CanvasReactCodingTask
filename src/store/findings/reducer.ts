import { idText } from "typescript";
import {
    FETCH_FINDINGS_REQUEST,
    FETCH_FINDINGS_SUCCESS,
    FETCH_FINDINGS_FAILURE,
    SET_SELECTED_FINDING,
  } from "./actionTypes";
  
  import { FindingsActions, FindingsState } from "./types";
  
  const initialState: FindingsState = {
    pending: false,
    findings: [],
    selectedFinding: 0,
    error: null,
  };
  
  const stateHandler = (state = initialState, action: FindingsActions) => {
    switch (action.type) {
      case FETCH_FINDINGS_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_FINDINGS_SUCCESS:
        return {
          ...state,
          pending: false,
          findings: action.payload.findings,
          error: null,
        };
      case FETCH_FINDINGS_FAILURE:
        return {
          ...state,
          pending: false,
          findings: [],
          error: action.payload.error,
        };
      case SET_SELECTED_FINDING:
        return {
          ...state,
          selectedFinding: action.payload.id,
        };
      default:
        return {
          ...state,
        };
    }
  };

  export default stateHandler;