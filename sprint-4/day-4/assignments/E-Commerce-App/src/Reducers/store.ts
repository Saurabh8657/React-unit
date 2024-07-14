import { combineReducers, legacy_createStore } from "redux";
import { cartReducer } from "./Cart/reducer";
import { ProductObj } from "../constants";

export type rootState = ReturnType<typeof rootReducer> ;

export const rootReducer = combineReducers({
  cart: cartReducer 
}) ;

export const store = legacy_createStore(rootReducer); // Create your Store here

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

declare global {
  interface Window {
    Cypress: object | undefined;
    store: object;
  }
}
if (window.Cypress) {
  window.store = store;
}
