import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [ loginData, setLoginData ] = useState( {email:"",password:""} )
  const [ userList, setUserList ] = useState( [] ) ;
  const { AuthState, setAuthState } = useContext(AuthContext) ;
  const navigate = useNavigate();

  async function fetchData(){
    try{
      let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`);
      let data = await response.json();
      console.log(data) ;
      setUserList(data) ;
    }catch(error){ console.log(error); }
  }
  function handleSubmit(e){
    e.preventDefault(e);
    userList.forEach( (item,index)=>{
       if( item.email===loginData.email && item.password===loginData.password ){
        setAuthState({isAuth:true,token:item.token}) ;
        navigate("/dashboard") ;
       }
    } )
  }
  useEffect( ()=>{
    fetchData();
  },[] )

  return (
    <div>
      <form data-cy="login-form" onSubmit={(e)=>{handleSubmit(e)}} >
        <div>
          <label>
            {" "}
            Email
            <input
              data-cy="login-email"
              type="email"
              placeholder="Enter Email"
              value={loginData.email}
              onChange={ (e)=>{setLoginData( {...loginData,email:e.target.value} )} }
            />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password
            <input
              data-cy="login-password"
              type="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={ (e)=>{setLoginData( {...loginData,password:e.target.value} )} }
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div className="go-back-link-div">
        {/* Add a Link tag here with textContent `Go Back` on clicking it we will be redirected to HomePage */}
        <Link to="/" >Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
