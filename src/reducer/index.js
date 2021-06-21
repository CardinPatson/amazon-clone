import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  myReducer: reducer,
});

export default rootReducer;
