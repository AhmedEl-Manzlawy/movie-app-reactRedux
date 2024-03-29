import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/combainReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export default createStore(reducers ,composeWithDevTools(applyMiddleware(thunk)) );