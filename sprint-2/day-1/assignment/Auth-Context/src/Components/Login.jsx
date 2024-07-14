import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, initialState } from '../Context/AuthContextProvider';

const initialUserData = {email:"",password:""}

export default function Login() {
    const { loginData,setloginData } = useContext(AuthContext);
    const [ userData, setUserData ] = useState(initialUserData)

    async function fetchData(){
        try{
            let response = await fetch(`https://reqres.in/api/login`,{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(userData)
            });
            let data = await response.json();
            console.log(data.token) ;
            setloginData( (prevloginData) => { return {...prevloginData,isAuth: true,token: data.token} } )
        }
        catch(error){console.log(error)} ;
    }
    useEffect(() => {
        console.log(loginData);
    }, [loginData]);
    
    function handleSubmit(e){
        e.preventDefault();
        fetchData();
        setUserData(initialUserData) ;
    }

    return (
        <div>
            <form data-testid = "auth_form" onSubmit={ (e)=>handleSubmit(e) } >
                <input type = "email" data-testid = "email" value={userData.email} placeholder = "Enter Email" onChange={ (e) => setUserData({...userData,email:e.target.value}) } />
                <br />
                <input type = "password" data-testid = "password" value={userData.password} placeholder = "Enter password" onChange={ (e) => setUserData({...userData,password:e.target.value}) } />
                <br />
                <input type = "submit"/>
            </form>                
        </div>
    )
}
