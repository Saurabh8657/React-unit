//Complete the reducer function logic inside the curly braces {}

const initialState={
    counter: 10,
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return {counter: state.counter + action.payload};

        case 'REDUCE':
            return {counter: state.counter - action.payload};
        
        default :
        return state;
    }
};

export { reducer };
