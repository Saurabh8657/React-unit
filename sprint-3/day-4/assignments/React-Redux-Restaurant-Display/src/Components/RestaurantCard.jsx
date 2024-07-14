import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({item}) => {
  const navigate = useNavigate();

  function handleNavigate(item){
    navigate(`/restaurant/${item.id}`)
  }

  return <div className="restaurant_card"  
    style={{
      border:"1px solid black",
      borderRadius:"10px",
      padding:"20px"
    }}
    onClick={()=>handleNavigate(item)}
    >
      <img src={item.image} alt="" className="image" style={{width:"100%",height:"150px"}} />
      <h3 className="name">Name: {item.name}</h3>
      <h4 className="type">Type: {item.type}</h4>
      <p className="votes">Votes: {item.number_of_votes}</p>
      <p className="price">Price: {item.price_starts_from}</p>
      <p className="rating">Rating: {item.rating}</p>
  </div>
};
// id
// : 
// 1
// image
// : 
// "https://picsum.photos/200"
// name
// : 
// "Shute"
// number_of_votes
// : 
// 588
// price_starts_from
// : 
// 925
// rating
// : 
// 4.5
// type
// : 
// "fine_dining"
export default RestaurantCard;
