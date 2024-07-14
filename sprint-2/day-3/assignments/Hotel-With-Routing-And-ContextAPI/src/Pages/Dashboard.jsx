import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import RoomsContainer from "../Components/RoomsContainer";

function Dashboard() {
  const { AuthState, setAuthState } = useContext(AuthContext) ;
  const [ rooms, setRooms ] = useState([]) ;
  const [ loader, setLoader ] = useState(true) ;
  const navigate = useNavigate();

  async function fetchData(){
    try{
      let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms`);
      let data = await response.json();
      console.log(data) ;
      setRooms(data) ;
      setLoader(false) ;
    }catch(error){ console.log(error); }
  }

  useEffect( ()=>{
    fetchData();
    console.log(rooms)
  },[] )

  function handleLogout(e){
    e.preventDefault() ;
    setAuthState({isAuth: false, token: null});
    navigate("/")
  }

  return (
    <div data-testid="dashboard-component">
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={(e)=>{handleLogout(e)}} >Logout</button>
        <p>
          Token: {AuthState.token} ;
          {/* The token should be displayed below */}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div data-testid="room-container">
        {/* Either Loader or RoomsContainer should exist below */}
        {loader ? <Loader/> : ( rooms.map( (item,index)=>{
          return <RoomsContainer key={index} item={item} />
          } ))
        }
      </div>
    </div>
  );
}

export default Dashboard;
