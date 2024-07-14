
import { handleLogin, setGroceries, setIsloading } from "./action";
import { FETCHING_GROCERIES, FETCH_GROCERIES, LOGIN } from "./actionType";

const initialState = {
    groceryData: [],
    isAuth: false,
    isLoading: false
};

function loginReducer(state = initialState, action) {
   switch(action.type){
    case LOGIN : return {...state, isAuth: true};
    case FETCHING_GROCERIES : return {...state, isLoading: true};
    case FETCH_GROCERIES : return { ...state, groceryData:  action.payload, isLoading: false };
    default : return state;
   }
};



const fetchLogin = (userData)=> async (dispatch)=>{
      try{
         let res = await fetch(`https://reqres.in/api/login`,{
            method: "POST",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(userData)
         })
         let data = await res.json();
         if(data.token){
            dispatch(handleLogin());
        }
      }
      catch(error){console.log(error);}
}

const fetchGroceries = ()=> async (dispatch)=>{
    try{
       dispatch(setIsloading())
       let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`)
       let data = await res.json();
      console.log(data.data);
        dispatch(setGroceries(data.data))
    }
    catch(error){console.log(error);}
}


export { loginReducer, fetchLogin, fetchGroceries };