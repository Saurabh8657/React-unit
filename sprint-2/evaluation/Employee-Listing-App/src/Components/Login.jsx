import { useContext, useEffect, useState } from "react";
import "../global.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [ loginData, setLoginData ] = useState({email:"",password:""}) ;
  const navigate = useNavigate() ;
  const { auth, setAuth } = useContext(AuthContext) ;

  async function fetchData(){
    try{
      let response = await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(loginData) 
      }) ;
      let data = await response.json();
      console.log(data) ;
      setAuth(true) ;
      navigate("/")
    }catch(error){console.log(error)} 
  }
  useEffect( ()=>{
    console.log(auth) ;
    // if(auth){
      
    // }
  },[auth] )

  function handleSubmit(e){
    e.preventDefault() ;
    console.log("hey");
    fetchData() ;
  }

  return (
    <form className="login-container" onSubmit={(e)=>{handleSubmit(e)}} >
      <h2>Login</h2>
      {/* provide all input fields here */}
      <label htmlFor="email">Username:</label>
      <input type="text" name="email" id="username" value={loginData.email} onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}} />

      <label htmlFor="password">Password:</label>
      <input type="text" name="password" id="password" value={loginData.password} onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}} /> 

      <input type="submit" className="submit" value="Login" />
    </form>
  );
};

export default Login;
