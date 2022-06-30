import { combineReducers } from "redux";

import findingsReducer from "../findings/reducer";

const rootReducer = combineReducers({
  findings: findingsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;