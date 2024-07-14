// create store using legacy_createStore
// Don't use combineReducer
import thunk from "redux-thunk" ;
import { applyMiddleware, legacy_createStore } from "redux" ;
import { resturantReducer } from "./reducer" ;

export const store = legacy_createStore( resturantReducer, applyMiddleware(thunk))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
