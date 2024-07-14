import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../Redux/action";
import RestaurantCard from "../Components/RestaurantCard";
import Pagination from "../Components/Pagination";
import { useParams } from "react-router-dom";

const HomePage = () => {
  // Show below loading indicator while data is being loaded
  const restaurants = useSelector( state => state.restaurants ) ;
  const isLoading  = useSelector( state => state.isLoading ) ;
  const totalPages = useSelector( state => state.totalPages ) ;
  const dispatch = useDispatch();
  
  useEffect( ()=>{
    dispatch(getRestaurants())
  },[dispatch] )

  return (
    <div>
      { isLoading && <h1 className="loading_indicator">Loading...</h1> }

      <div className="restaurants_wrapper" style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr",gap:"30px",padding:"0px 100px"}}>
        {  restaurants.map( (item,index)=>{
          return <RestaurantCard key={index} item={item}/>
        } ) }
        {/* Import RestaurantCard.jsx and populate restaurants data */}
      </div>

        <Pagination totalPages={totalPages}/>
      {/* Import Pagination.jsx and pass required props*/}
    </div>
  );
};

export default HomePage;
