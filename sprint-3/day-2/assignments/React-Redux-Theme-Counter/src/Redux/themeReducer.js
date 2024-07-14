//Complete the reducer function logic inside the curly braces {}

import { CHANGE_THEME } from "./actionTypes";

// the theme initstate shouldbe light
const themeReducer = ( state={theme:"light"}, action ) => {
    switch(action.type){
        case CHANGE_THEME : return {...state, theme: action.payload };
        default :  return state  ;
    }
};

export { themeReducer };
