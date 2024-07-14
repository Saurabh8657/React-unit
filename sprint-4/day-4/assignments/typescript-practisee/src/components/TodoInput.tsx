import React, { useState } from 'react'
import { postTasks } from '../apiRequests';
import { Todo } from '../constants';

type TodoInputPropTypes = {
  addTaskWithoutFetchRequest: (taskObj:Todo) => void,
}

export default function TodoInput({addTaskWithoutFetchRequest}:TodoInputPropTypes) {

    const [ task, setTask ] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setTask(e.target.value) ;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postTasks(task)
        .then( res => {
          console.log(res.data)  ;
          addTaskWithoutFetchRequest( res.data ) ;
        } )
        setTask("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Enter Your Task : </label>
        <input type="text" name='task' value={task} onChange={handleChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
