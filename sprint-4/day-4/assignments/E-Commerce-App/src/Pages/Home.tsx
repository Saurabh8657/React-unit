import React, { useEffect, useState } from "react";
import { getProductsRequest } from "../apiRequests";
import { ProductObj } from "../constants";
import Product from "../Components/Product";

function Home() {
  const [ productList, setProductsList ] = useState<ProductObj[]>([]);
  useEffect(() => {
    getProductsRequest()
    .then( res => {
      console.log(res)  ;
      setProductsList( res.data.data ) ;
    })
    // Fetch the data for initial products here
  }, []);

  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "30px" }} >
      {
        productList.map( (item,index) => {
          return <Product key={index} product={item} inCart={false}/>
        } )
      }
    </div>
    </>
  );
}

export default Home;
