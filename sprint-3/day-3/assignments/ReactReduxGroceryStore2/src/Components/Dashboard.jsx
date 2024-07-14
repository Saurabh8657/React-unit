import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroceries } from '../Redux/AppReducer/reducer';


export default function Dashboard() {

  const dispatch = useDispatch()
  const groceryData = useSelector(state => state.groceryData);
  console.log(groceryData);
  
  useEffect(()=>{
    dispatch(fetchGroceries())
  },[])

  return (
   <div>
     <h2>Groceries Dashboard</h2>
      <div className = "grocery_data_cont" style={{display: "flex", gap : "30px"}} >
      {/* Map the below div against your grocery data  */}
      {groceryData?.map((item, index) => (
          <div className="grocery_item" key={index} style={{ width: "250px" }}>
        <img className = "image" src={item.image} alt = "img" style={{width: "90%"}} />
        <div className = "name">{item.name}</div>
        <div className = "price"> {item.price}</div>
        <div className = "createdAt"> {item.updatedAt}</div>
      </div>))}
    </div>
   </div>
   
  )
}

