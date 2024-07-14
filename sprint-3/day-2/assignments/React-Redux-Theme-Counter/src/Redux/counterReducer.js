//Complete the reducer function logic inside the curly braces {}

import { ADD, REDUCE } from "./actionTypes";

// the counter initstate shouldbe 10
const counterReducer = ( state={counter:10}, action ) => {
    switch(action.type){
        case ADD : return {counter: (state.counter + action.payload) } ;
        case REDUCE : 
            if(state.counter>0) {
                return { counter:(state.counter - action.payload) } ;
            }
        default : return state ; 
    }
};

export { counterReducer };


