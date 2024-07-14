import { ProductObj } from "../../constants";
import { CartActionType, CartActions } from "./action.types";

 
 const initialState:ProductObj[] = []

 export const cartReducer = (state = initialState, action: CartActionType ):ProductObj[] => {
    switch(action.type){
        case CartActions.ADD : 
            for( let i=0; i<state.length; i++ ){
                if( state[i].id === action.payload.id ){
                    alert("Product Already in Cart");
                    return state ;
                }
            }
            return [ ...state, action.payload ] ;
        case CartActions.DELETE : 
            return state.filter((item) => item.id !== action.payload.id);
        case CartActions.CLEAR : 
            return [] ;
        default : 
            return state ; 
    }
 }