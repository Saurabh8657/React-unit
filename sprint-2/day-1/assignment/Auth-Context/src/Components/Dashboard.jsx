import React, { useContext } from 'react'
import { AuthContext, initialState } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const { loginData,setloginData }  = useContext(AuthContext);
    function handlelogout(){
        setloginData(initialState) ;
    }
    return (
        <div >
            <h3 data-testid = "token" >Token: { loginData.token } </h3>
            <button data-testid = "logout" onClick={handlelogout} >LOGOUT</button>
        </div>
    )
}
