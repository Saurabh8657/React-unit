// Import necessary React hooks and libraries
// import React from "react";
import { useEffect,useState } from "react";
import { StudentList } from "./components/StudentList";
import { Timer } from "./components/Timer"
import "./App.css";


// Main App component
const App = () => {
  let url = "https://dummyjson.com/users";
  const[showTimer,setshowTimer] = useState(false);
  const[timer,setTimer] = useState(0);
  const[students,setStudents] = useState( [] ) ;

  useEffect( ()=>{
    async function fetchData(){
      try{
        let response = await fetch(`${url}`) ;
        let data = await response.json();
        console.log(data.users) ;
        setStudents(data.users)
      }catch(error){
        console.log(error);
      }
    }
    fetchData();
  },[] )

  useEffect( ()=>{
    let id ;
    if(!showTimer){
      clearInterval(id) ;
      setTimer(0)
    }
    if(showTimer){
      id = setInterval( ()=>{
        setTimer( (prev)=> prev+1 ) ;
      },1000 )
    }
    return ()=>{
      clearInterval(id)
    }
  },[timer,showTimer] )

  return (
    <div>
      <h1>Student Management System</h1>

      <button onClick={ ()=>{
        setshowTimer(!showTimer);
        } } > {showTimer? "Hide":"Show"}   </button>
      { showTimer && <Timer timer={timer}/> }  

      <StudentList students={students} />
    </div>
  );
};

export default App;
