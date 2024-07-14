import React, { useEffect, useState } from "react";
import { TodoType } from "../types_&_Reducers/types";
import Todo from "./Todo";
function Todos() {
  
  const [ todoList, setTodoList ] = useState<TodoType[]>([])

  useEffect(() => {
    const storedTodos:TodoType[] = JSON.parse(localStorage.getItem("todos") || "[]") ;
    setTodoList(storedTodos);
    console.log("comming")
  }, []);

  return <div style={{ display:"flex", flexDirection:"column", gap:"20px",padding:"30px", border:"1px solid black", width:"400px" }} >
      {
        todoList?.map( (item,index)=>{
          return <Todo key={index} item={item}/>
        } )
      }
      {/* All Todos Should be shown here  */}
    </div>;
}

export default Todos;
