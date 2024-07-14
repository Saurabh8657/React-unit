import { ProductObj } from "../../constants"

export enum CartActions {
    ADD = "ADD_TO_CART",
    DELETE = "DELETE_FROM_CART",
    CLEAR = "CLEAR_THE_CART"
}

type AddActionType = {
    type : CartActions.ADD ;
    payload: ProductObj ;
}
type DeleteActionType = {
    type : CartActions.DELETE ;
    payload: ProductObj ;
}

type ClearActionType = {
    type : CartActions.CLEAR ;
}

export type CartActionType = AddActionType | DeleteActionType | ClearActionType

