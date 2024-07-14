import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../Redux/AppReducer/reducer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [ userData, setUserData] = useState({email : "", password: ""});
    const dispatch = useDispatch();
    const stateValue = useSelector((state)=> state.login);
    const navigate = useNavigate();

    useEffect(()=>{console.log(stateValue)},[stateValue])

     function handleSubmit(e){
        e.preventDefault();
        dispatch(fetchLogin(userData)).then(()=>navigate('/dashboard'))
     }
    
    return (
        <div>
            <form className = "auth_form" onSubmit={(e)=>handleSubmit(e)}  >
                <input
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    value={userData.email}
                    onChange={(e)=>setUserData({...userData, email: e.target.value})}
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    value={userData.password}
                    onChange={(e)=>setUserData({...userData, password: e.target.value})}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>               
        </div>
    )
}