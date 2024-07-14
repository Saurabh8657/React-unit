import { deleRequest, togglePatchRequest } from "../apiRequests"
import { Todo } from "../constants"
import { useState } from "react"

interface TodoItemPropTypes extends Todo {
  deleteTaskWithoutFetchRequest: (taskObj:Todo) => void,
}


export default function TodoItem({id,task,status,deleteTaskWithoutFetchRequest}:TodoItemPropTypes) {

  const [ newStatus, setNewStatus ] = useState<boolean>(status) ;

  const handleTaskToggle = () =>{
    togglePatchRequest( id, newStatus )
    .then( res => {
      console.log(res.data) ;
      setNewStatus(res.data.status) ;
    } )
  }


  const handleTaskComplete = () =>{
    deleRequest( id )
    .then( res => {
      console.log(res.data) ;
      deleteTaskWithoutFetchRequest(res.data) ;
    } )
  }

  return (
    <div>
      <h3>Task : {task}</h3>
      <p>Status : {newStatus ? "Completed":"Pending"} </p>
      <button  onClick={handleTaskToggle} >Toggle</button>
      <button onClick={handleTaskComplete} >Completed</button>
    </div>
  )
}
