import { createStore, applyMiddleware } from "redux";
import { ThunkMiddleware } from "redux-thunk";
import rootReducer from "../reducer";
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;
