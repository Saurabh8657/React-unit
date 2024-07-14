import axios from "axios";
import React, { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";

const Coffee = () => {
  const [ coffeeList, setCoffeeList ] = useState([]) ;
  const getCoffeeRequest = async()=>{
    let res = await axios.get(`http://localhost:${import.meta.env.VITE_APP_JSON_SERVER_PORT}/coffee`) ;
    console.log(res) ;
    setCoffeeList(res.data)
  }

  return (
    <div>
      <button  onClick={getCoffeeRequest} >GET coffee</button>

      <div className="coffee_container">
        {
          coffeeList?.map( (item,index)=>{
            return <CoffeeCard  key={index} item={item} />
          } )
        }
      </div>
    </div>
  );
};

export default Coffee;