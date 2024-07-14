import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { loginReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";



const store = legacy_createStore(loginReducer, applyMiddleware(thunk))

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}