import React, { useEffect, useState } from "react";

let initialTodo = {
  activity: "",
  user: "",
  gender: "",
  time: 0,
}

export const AddActivity = () => {
  const [ todo, setTodo ] = useState( initialTodo ) ;
  const [ todoList, setTodoList ] = useState( [] ) ;

  function handleSubmit(e){
    e.preventDefault();
    setTodoList( [...todoList,todo] ) ;
    setTodo(initialTodo) ;
  }
  useEffect( ()=>{
    console.log(todoList) ;
  },[todoList] )
  
  return (
    <div>
      <h1>Add Activity</h1>
      <form data-testid="input-form" onSubmit={ (e)=>{handleSubmit(e)} } >
        <div className="activity-wrapper" data-testid="activity-wrapper">
          <label>Activity :  </label>
          <input type="text" name="activity" value={todo.activity} onChange={ (e)=>{ setTodo({...todo, activity:e.target.value})  } } />
        </div>

        <div className="user-wrapper" data-testid="user-wrapper">
          <label>User :  </label>
          <input type="text" name="user"  value={todo.user} onChange={ (e)=>{ setTodo({...todo, user:e.target.value})  } } />
        </div>

        <div className="gender-wrapper" data-testid="gender-wrapper">
          <label>Gender :  </label>
          <select  name="gender" id="gender"  value={todo.gender} onChange={ (e)=>{ setTodo({...todo, gender:e.target.value})  } } >
            <option  value=""> Select </option>
            <option  value="Male"> Male </option>
            <option  value="Female"> Female </option>
            <option  value="Other"> Other </option>
          </select>
        </div>

        <div className="time-wrapper" data-testid="time-wrapper">
          <label>Time : </label>
          <input type="number" name="time"   value={todo.time} onChange={ (e)=>{ setTodo({...todo, time:e.target.value})  } } />
        </div>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};
