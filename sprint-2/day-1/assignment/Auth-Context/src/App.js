import React, { useContext } from 'react'
import Login from './Components/Login'
import AuthContextProvider, { AuthContext } from './Context/AuthContextProvider'
import { Dashboard } from './Components/Dashboard'

export default function App() {
  const {loginData} = useContext(AuthContext) ;
  return (
    <>
      <Login />
      { loginData.isAuth && <Dashboard/> }
    </>
  )
}
