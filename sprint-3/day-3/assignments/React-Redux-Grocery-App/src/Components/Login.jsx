import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin, handleLoginReset } from '../Redux/AppReducer/actionType';
import { fetchLogin } from '../Redux/AppReducer/reducer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const stateValue = useSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault() ;
        console.log(userData) ;
        dispatch(fetchLogin(userData)) ;
        navigate("/dashboard") ;
    }
    useEffect( ()=>{  console.log(stateValue) },[stateValue] )

    return (
        <div>
            <form className="auth_form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="email"
                    className="email"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
                <br />
                <input
                    type="password"
                    className="password"
                    placeholder="Enter password"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                />
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
}
