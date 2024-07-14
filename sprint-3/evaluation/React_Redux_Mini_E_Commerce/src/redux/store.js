import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { cartReducer, productsReducer, wishlistReducer } from "./reducers";

// NOTE: use this store variable to create a store.
const rootReducer = combineReducers({
  products: productsReducer ,
  cart: cartReducer ,
  wishlist: wishlistReducer
})
const store = legacy_createStore(rootReducer,applyMiddleware(thunk)) ;

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
