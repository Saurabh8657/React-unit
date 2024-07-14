import React from "react";
import PasswordInput from "./PasswordInput";
import { useContext } from "react";
import { UserDataContext, intitalData } from "../context/UserDataContext";
import { useState } from "react";
import { useEffect } from "react";

function Form() {
  const [ logincred,setlogincred ] = useState( intitalData ) ;
  const { loginDatas,setLoginDatas } = useContext(UserDataContext) ;
  // const intitalData ={
  //     name:"",
  //     email:"",
  //     password:"",
  //     gender:""
  // }
  function handleSubmit(e){
    e.preventDefault();
    console.log(logincred) ;
    setLoginDatas( (prev)=>[...prev, logincred] )
  }
  useEffect( ()=>{
    console.log(loginDatas) ;
  },[loginDatas] )

  return (
    <div data-testid="user-form" id="create">
      <h1>Add New User</h1>
      <form  onSubmit={ (e)=>handleSubmit(e) } >
        <input data-testid="form-name" placeholder="Name" type="text" id="name" value={logincred.name}  onChange={ (e)=>setlogincred( {...logincred,name:e.target.value} ) } />
        <input data-testid="form-email" placeholder="Email" type="email" id="email"  value={logincred.email}  onChange={ (e)=>setlogincred( {...logincred,email:e.target.value} ) }  />
        <PasswordInput />
        <select data-testid="form-gender" id="gender"  value={logincred.gender}  onChange={ (e)=>setlogincred( {...logincred,gender:e.target.value} ) } >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}

export default Form;
