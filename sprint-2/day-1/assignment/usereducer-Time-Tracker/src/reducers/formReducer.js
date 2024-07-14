const initialFormState = {};

const formReducer = (state,action) => {
    switch(action.type){
        case "ACTIVITY" : return {} ;
        case "USER" : return  ;
        case "GENDER" : return  ;
        case "TIME" : return  ;
        case "RESET" : return  ;
        default : return  ;
    }
};
// "ACTIVITY"
// "USER"
// "GENDER"
// "TIME"
// "RESET" - (For resetting the state)
// "ADD_ACTIVITY"
export { formReducer, initialFormState };
