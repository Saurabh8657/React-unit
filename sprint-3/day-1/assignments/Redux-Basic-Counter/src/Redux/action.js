//DO NOT change the function names

//function to return the add action object
const handleAddActionObj = (payload) => ({
    type: 'ADD',
    payload,
});

//function to return the reduce action object
const handleReduceActionObj = (payload) => ({
    type:'REDUCE',
    payload,
});

export { handleAddActionObj, handleReduceActionObj };
