// create all reducers

import { ADD_TO_CART, ADD_TO_WISHLIST, GET_PRODUCTS_FAILURE, GET_PRODUCTS_ISLOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes";

// const initialState = {
//     products:{
//                 isLoading: false,
//                 isError: false,
//                 products: [],
//                 totalPages:0
//              },
//     cart: [],
//     wishlist: []
// }
export function productsReducer(state={products:{
    isLoading: false,
    isError: false,
    products: [],
    totalPages:0
 }},action){
    switch (action.type){
        case GET_PRODUCTS_ISLOADING : return {  products: { ...state.products, isLoading: true } } ; 
        case GET_PRODUCTS_SUCCESS : return  {  products: {...state.products,isLoading: false, isError: false, products: [action.payload.data], totalPages: action.payload.totalPages } } ; 
        case GET_PRODUCTS_FAILURE : return  { products: { ...state.products, isError: true } } ; 
        default : return state ; 
    }
}
const cart = [] ;
export function cartReducer(state=cart,action){
    switch (action.type){
        case ADD_TO_CART : return [...state, action.payload]  ; 
        default : return state ; 
    }
}
const wishlist = [] ;
export function wishlistReducer(state=wishlist ,action){
    switch (action.type){
        case ADD_TO_WISHLIST : return [...state, action.payload]  ; 
        default : return state ; 
    }
}