import { ADDITION, DIVISION, MULTIPLICATION, RESET, SUBTRACTION, UPDATION } from "./action";

export function handleAddition(value){
    return { type: ADDITION , payload: value } ;
}

export function handleSubtraction(value){
    return { type: SUBTRACTION , payload: value } ;
}

export function handleMultiplication(value){
    return { type: MULTIPLICATION , payload: value } ;
}

export function handleDivision(value){
    return { type: DIVISION , payload: value } ;
}

export function handleUpdation(value){
    return { type: UPDATION , payload: value } ;
}

export function handleReset(value){
    return { type: RESET , payload: value } ;
}