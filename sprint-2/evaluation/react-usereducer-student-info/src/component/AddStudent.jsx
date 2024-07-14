import React, { useEffect, useReducer } from "react";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive"
};

export const reducer = (state,action) => {
  switch(action.type){
    case "NAME": return {...state,name:action.payload} ;
    case "BATCH": return {...state,batch:action.payload} ;
    case "COURSE": return {...state,course:action.payload} ;
    case "IMAGE": return {...state,image:action.payload} ;
    case "RATING": return {...state,rating:action.payload} ;
    case "STATUS": return {...state,status:action.payload? "active" : "inactive"} ;
    case "RESET": return initialState ;
    default : return state;
  }
};

export const AddStudent = () => {
  const [ state, dispatch ] = useReducer( reducer , initialState ) ;

  function handleSubmit(e){
    e.preventDefault();
    dispatch({type:"RESET"})
  }

  useEffect( ()=>{
    console.log(state);
  },[state] )

  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={(e)=>{handleSubmit(e)}} >
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
            <input type="text" value={state.name} onChange={(e)=>{dispatch({type:"NAME",payload:e.target.value})}}/>
            {/* Provide Input tag Here */}
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
            <input type="text" value={state.batch} onChange={(e)=>{dispatch({type:"BATCH",payload:e.target.value})}} />
            {/* Provide Input tag Here */}
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            <input type="text" value={state.course} onChange={(e)=>{dispatch({type:"COURSE",payload:e.target.value})}} />
            {/* Provide Input tag Here */}
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            <input type="text" value={state.image} onChange={(e)=>{dispatch({type:"IMAGE",payload:e.target.value})}} />
            {/* Provide Input tag Here */}
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            <select name="rating" id="rating" data-testid="rating-select"value={state.rating} onChange={(e)=>{dispatch({type:"RATING",payload:e.target.value})}} >
            <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* Provide Select tag Here */}
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
              {/* Provide checkbox Here */}
              <input type="checkbox"  onChange={(e)=>{dispatch({type:"STATUS",payload:e.target.checked })}}/>
              <label>Active</label>
            </div>
          </div>
          <input type="submit" value="Add Student" />
          {/* Provide Button to submit Here */}
        </form>
      </div>
    </div>
  );
};
