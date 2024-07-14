import React from "react";
import { Link } from "react-router-dom";

const RoomsContainer = ({item}) => {
  return <div data-testid="rooms-container">
    <h2>{item.name}</h2>
    <img src={item.image} alt={item.name}/>
    <p>{item.description}</p>
    <Link to={`/dashboard/${item.id}`}><button>View Details</button></Link>
  </div>
};

export default RoomsContainer;
