import React from 'react'


export default function Dashboard() {

  return (
   <div>
     <h2>Groceries Dashboard</h2>
      <div className = "grocery_data_cont" >
      {/* Map the below div against your grocery data  */}
      <div className = "grocery_item" style = {{width: "250px"}}  >
        <img className = "image" alt = "img" />
        <div className = "name"></div>
        <div className = "price"> </div>
        <div className = "createdAt"> </div>
      </div>
    </div>
   </div>
   
  )
}
