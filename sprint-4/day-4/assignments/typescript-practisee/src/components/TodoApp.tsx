import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import { Todo } from '../constants'
import { getTasks } from '../apiRequests'
import TodoItem from './TodoItem'

export default function TodoApp() {
  const [ taskList, setTaskList ] = useState<Todo[]>([])

  useEffect( ()=>{
    getTasks()
    .then( res => setTaskList(res.data) )
  },[] )

  const addTaskWithoutFetchRequest = (newTask:Todo)=>{
    setTaskList( prev => [...prev, newTask] ) ;
  }

  const deleteTaskWithoutFetchRequest = (deletedTask:Todo)=>{
    setTaskList( prev => 
      prev.filter( (item)=> item.id===deletedTask.id ? false:true ) 
    ) ;
  }

  return (
    <div>
      <TodoInput addTaskWithoutFetchRequest={addTaskWithoutFetchRequest} />
      {
        taskList?.map( (item,index) => {
          return <TodoItem key={item.id} {...item} deleteTaskWithoutFetchRequest={deleteTaskWithoutFetchRequest}  />
        } )
      }
    </div>
  )
}
