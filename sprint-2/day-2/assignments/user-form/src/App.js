import { useState } from "react";
import "./App.css";
import { UserRow } from "./components/UserRow";
import { useEffect } from "react";


const initialData = {
  name:"",
  gender:"",
  role:"",
  maritalStatus:true,
  id:0
}

function App() {
  const [ userData,setUserData] = useState(initialData)
  const [ usersList,setUsersList] = useState([])

  function handleSumit(e){
    e.preventDefault();
    setUsersList(  [...usersList,userData]) ;
    setUserData(initialData) ;
  }
  useEffect( ()=>{
    console.log(usersList) ;
    console.log(usersList[usersList.length-1]?.maritalStatus)

    console.log(userData) ;
    console.log(userData.maritalStatus)
  },[usersList] )
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={(e)=>{ handleSumit(e)}} >
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" value={userData.name} onChange={(e)=>{setUserData( {...userData,name:e.target.value } )}} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" value={userData.gender} onChange={(e)=>{setUserData( {...userData,gender:e.target.value } )}} >
              {/* <option value="" > Choose </option> */}
                <option value="Male" > Male </option>
                <option value="Female" > Female </option>
                <option value="Prefer Not to Say" >Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role"  data-testid="role-select" value={userData.role} onChange={(e)=>{setUserData( {...userData,role:e.target.value } )}} >
              {/* <option  value=""> Choose Role </option> */}
                <option  value="FrontEnd Developer" name="FrontEnd Developer" > FrontEnd Developer </option>
                <option value="BackEnd Developer" name="BackEnd Developer" > BackEnd Developer </option>
                <option   value="FullStack Developer" name="FullStack Developer" > FullStack Developer </option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type="checkbox"  onChange={(e)=>{setUserData( {...userData,maritalStatus:!userData.maritalStatus } )}} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>


       { usersList.length!==0 && <table>
            <thead>
              <tr>
                <th>S,no.</th>
                <th>User</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Marital Status</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map( (item,index)=>{ return <UserRow key={index} item={item} index={index} /> })}
            </tbody>
          </table>
        }
      {/* map through the userdata and render UserRow component to display the data in tabular format */}
      {/* print "no users found"  in there is no user data */}

      { usersList.length===0 &&  <h2 data-testid="no-user-container" > no users found  </h2> }

    </div>
  );
}

export default App;
