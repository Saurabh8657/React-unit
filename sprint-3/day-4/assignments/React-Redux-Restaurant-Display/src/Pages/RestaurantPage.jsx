import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleRestaurant } from "../Redux/action";

const RestaurantPage = () => {
  const restaurant  = useSelector( state => state.restaurant ) ;
  const [ book, setBook ] = useState(false) ;
  const {id} = useParams();
  const dispatch = useDispatch();

  function handleBooking(e){
    e.preventDefault() ;
    setBook(true) ;
  }

  useEffect( ()=>{
    dispatch(getSingleRestaurant(id)) ;
  },[id,dispatch] )
  
  return (<>
    { book && <h1 className="success_msg">Restaurant Booked Successfully !!</h1>}
    <div className="restaurant_single_card"
      style={{
        border:"1px solid black",
        borderRadius:"10px",
        padding:"20px",
        textAlign:"center",
        width: "400px",
        height: "auto",
        margin:"auto"
      }}
      >
        <img src={restaurant.image} alt="" className="image"  />
        <h3 className="name">Name: {restaurant.name}</h3>
        <h4 className="type">Type: {restaurant.type}</h4>
        <p className="votes">Votes: {restaurant.number_of_votes}</p>
        <p className="price">Price: {restaurant.price_starts_from}</p>
        <p className="rating">Rating: {restaurant.rating}</p>
        { !book && <button className="book_now_btn"
        onClick={(e)=>{handleBooking(e)}}
        >Book Now!</button> }
        { book && <Link className="go_back" to={"/"}>Go To Home</Link> }
    </div>
    </>

  );
};

export default RestaurantPage;
