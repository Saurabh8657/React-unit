//DO NOT change the function names

import { useDispatch, useSelector } from "react-redux";
import { ADD, REDUCE, CHANGE_THEME } from "./actionTypes";


const handleAdd = (value) => {
    return {type:ADD , payload:value} ;
};

const handleReduce = (value) => {
    return {type:REDUCE , payload:value} ;
};
const handleTheme = (value) => {
    return {type:CHANGE_THEME, payload:value} ;
};

export { handleAdd, handleReduce, handleTheme };
