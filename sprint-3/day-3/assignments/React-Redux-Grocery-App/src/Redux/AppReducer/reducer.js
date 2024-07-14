import { LOGIN, LOGOUT, RESET } from "./action";
import { handleLogin, handleLoginReset } from "./actionType";


const initialState = {
    groceryData: [],
    isAuth: false,
    isLoading: false
};

function loginReducer(state=initialState,action){
    switch(action.type){
        case LOGIN : return {...state,isAuth:true} ;
        // case LOGOUT : return initialState ;
        // case RESET : return initialState ;
        default : return state ;
    }
}

 const fetchLogin = (userData) => async (dispatch)=> {
    try {
        let response = await fetch(`https://reqres.in/api/login`,{
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(userData) 
        });
        let data = await response.json();
        console.log(data);

        if(data.token){
            dispatch(handleLogin()) ;
        }
        // else{
        //     dispatch(handleLoginReset()) ;
        // }
    } catch (error) {
        console.log(error);
    }
}


export { loginReducer, initialState,fetchLogin } ;
