import React, { useEffect, useState } from "react";
import { TodoType } from "../types_&_Reducers/types";



const Add = () => {
  const [ todo, setTodo ] = useState<TodoType>({title:"",description:"",status:false}) ;
  const [ todoList, setTodoList ] = useState<TodoType[]>([])


  useEffect(() => {
    const storedTodos:TodoType[] = JSON.parse(localStorage.getItem("todos") || "[]") ;
    setTodoList(storedTodos);
  }, []);
  

  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ):void=>{
    e.preventDefault();
    setTodoList( (prevTodoList) => [...prevTodoList, todo] ) ;
    localStorage.setItem("todos",JSON.stringify([...todoList,todo])) ;
    setTodo({title:"",description:"",status:false}) ;
  }

  const hangleInputChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
    e.preventDefault();
    setTodo( (prev) => { return {...prev, title:e.target.value} } )
  }

  const hangleDescriptionChange = (e:React.ChangeEvent<HTMLTextAreaElement>):void =>{
    e.preventDefault();
    setTodo( (prev) => { 
      return {...prev, description:e.target.value} 
    } )
  }


  return ( 
    <form data-testid="form" 
      style={{ display: "flex", flexDirection: "column",gap:"20px",border:"1px solid black",padding:"20px" , width: "300px", margin: "30px" }} 
      onSubmit={(e)=>handleSubmit(e)}
    >
      <h2 style={{textAlign:"center"}}> Create New Todo </h2>
      <input data-testid="title" type="text" id="title" 
        placeholder="Title" 
        value={todo.title}
        onChange={(e)=>hangleInputChange(e)}
      />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        placeholder="Description"
        value={todo.description}
        onChange={(e)=>hangleDescriptionChange(e)}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
