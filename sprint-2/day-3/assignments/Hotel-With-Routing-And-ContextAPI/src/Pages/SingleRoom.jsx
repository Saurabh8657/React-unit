import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleRoom = () => {
  const {id} = useParams();
  const [ singleRoom,setSingleRoom ] = useState({}) ;
  const [ isBooked,setIsBooked ] = useState(false) ;
  async function fetchData(){
    try{
      let response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms/${id}`);
      let data = await response.json();
      console.log(data) ;
      setSingleRoom(data) ;
    }catch(error){ console.log(error); }
  }

  useEffect( ()=>{
    fetchData();
    console.log(singleRoom) ;
  },[id] )

  function handleBooking(e){
    e.preventDefault();
    setIsBooked(true) ;
  }

  return <div data-testid="SingleRoom">
    <div data-testid="room-info">
      <h2>{singleRoom.name}</h2>
      <img src={singleRoom.image} alt="" />
      <p>{singleRoom.description}</p>
      <h3>{singleRoom.bathroom}</h3>
      <h3>Capacity:{singleRoom.capacity}</h3>
      <h3>Size : {singleRoom.size}</h3>
      <h3>Price : {singleRoom.price}</h3>
      <h3>Amenities</h3>
      <ul>
        {singleRoom.amenities?.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>

    { !isBooked && <button onClick={(e)=>{handleBooking(e)}} >Book Now</button> }
    { isBooked && <h3>Booking Successful goto <Link to={`/dashboard`}>Dashboard</Link></h3> }
    </div>
  </div>
}
export default SingleRoom;
