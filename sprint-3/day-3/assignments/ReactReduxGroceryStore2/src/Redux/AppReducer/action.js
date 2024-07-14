import { FETCHING_GROCERIES, FETCH_GROCERIES, LOGIN } from "./actionType";


export function handleLogin(){
       return { type: LOGIN }
}

export function setIsloading(){
    return {type: FETCHING_GROCERIES}
}

export function setGroceries(value){
    return {type: FETCH_GROCERIES, payload : value}
}