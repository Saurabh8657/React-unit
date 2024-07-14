import React from 'react'
import "../App.css"
import { useDispatch } from 'react-redux'
import { handleAddition, handleDivision, handleMultiplication, handleReset, handleSubtraction, handleUpdation } from '../Redux/actionType';
const Button = ({item,buttonIds}) => {
  
  const dispatch = useDispatch() ;

  const handleClick = () => {
    switch (item) {
      case '/':
        dispatch(handleDivision());
        break;
      case '*':
        dispatch(handleMultiplication());
        break;
      case '+':
        dispatch(handleAddition());
        break;
      case '-':
        dispatch(handleSubtraction());
        break;
      case '=':
        dispatch(handleUpdation());
        break;
      case 'Clear':
        dispatch(handleReset());
        break;
      default:
        // If the button is a number, you can dispatch an action to update the result
        // Handle this according to your application's logic
        break;
    }
  };

  return (
    <button className="button" id={buttonIds} 
      onClick={()=>handleClick()}
    >
      {item}
    </button>
  )
}

export default Button

