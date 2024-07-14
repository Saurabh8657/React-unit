import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { loginReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login : loginReducer 
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk) ) ;

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}