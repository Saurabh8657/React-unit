import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [ loginCred, setLoginCred ] = useState( {email:"", password:""} )
    const { isAuth,setisAuth } = useContext(AuthContext) ;
    const navigate = useNavigate();

    let url = `https://reqres.in/api/login` ;
    async function fetchData(url){
        try{
            let response = await fetch(`${url}`,{
                method:"POST",
                headers:{ "Content-type":"application/json" },
                body: JSON.stringify(loginCred) 
            });
            let data = await response.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        fetchData(url);
        setisAuth(true) ;
        navigate('/')
    }
    return (
        <div>
            <form className = "auth_form" onSubmit={ (e)=>{ return handleSubmit(e)} } >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email" className = "email" placeholder = "Enter Email"
                    value={loginCred.email}
                    onChange={ (e)=>{setLoginCred({ ...loginCred, email:e.target.value }) } }    />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"  className = "password" placeholder = "Enter password"
                    value={loginCred.password}
                    onChange={ (e)=>{setLoginCred({ ...loginCred, password:e.target.value }) } } 
                />
                <br />
                <input className = "submit" type = "submit"/>
            </form>  
                          
        </div>
    )
}