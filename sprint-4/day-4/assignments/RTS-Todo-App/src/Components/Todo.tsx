import React, { useEffect } from "react";
import { TodoType } from "../types_&_Reducers/types";
function Todo(props:{item:TodoType}) {
  const { item } = props ;

  useEffect( ()=>{
    console.log("rerendered")
  },[item.status] )

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault();
    item.status = !item.status ;
    const storedTodos:TodoType[] = JSON.parse(localStorage.getItem("todos") || "[]") ;
    storedTodos.map( (ele,index)=>{
      if(ele.title===item.title){
        ele.status = item.status 
      }
      return ele ;
    } )
    localStorage.setItem("todos",JSON.stringify(storedTodos)) ;
  }

  return (
    <div data-testid="todo-container" style={{border:"1px solid black",padding:"20px"}} >
      <h2 data-testid="todo-title">{item.title}</h2>
      <p data-testid="todo-desc">{item.description}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input data-testid="todo-status" type="checkbox" checked={item.status}  onChange={(e)=>handleChange(e)} />
    </div>
  );
}

export default Todo;
