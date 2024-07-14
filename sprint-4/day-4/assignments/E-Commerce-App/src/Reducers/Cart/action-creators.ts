import { ProductObj } from "../../constants"
import { CartActionType, CartActions } from "./action.types"


export const addToCart = ( product:ProductObj ): CartActionType => {
    return {
        type : CartActions.ADD ,
        payload : product
    }
}


export const deleteFromCart = ( product:ProductObj ): CartActionType => {
    return {
        type : CartActions.DELETE ,
        payload : product
    }
}


export const clearCart = ( ): CartActionType => {
    return {
        type : CartActions.CLEAR 
    }
}