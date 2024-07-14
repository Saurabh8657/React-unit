import { LOGIN, LOGOUT, RESET } from "./action";


export function handleLogin(){
    return { type:LOGIN } ;
}
export function handleLogout(){
    return { type:LOGOUT } ; 
}
export function handleLoginReset(){
    return { type:RESET } ;
}
