import React, { useEffect, useState } from 'react'
export default function Products() {
  let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";
  const [products, setProducts] = useState([])
  async function fetchData(){
    try{
       let res = await fetch(url);
       let data = await res.json();
       console.log(data.data);
       setProducts(data.data);
    }
    catch(error){console.log(error);}
 }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1 >All Products</h1 >
      <div className= "products-wrapper">
            {products.map((product) => {
              return <div key={product.id}>
                        <div className = "id" >product.id</div>
                        <h3 className = "title" >product.title </h3>
                        <div className = "category" >product.category </div>
                        <div className = "price" >product.price </div>
                      </div>
            })}
      </div>
    </div>
  )
}