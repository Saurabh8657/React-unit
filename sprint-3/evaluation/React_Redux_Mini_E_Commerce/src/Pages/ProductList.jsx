import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../redux/actionTypes";

const ProductsList = () => {
  const hey = useSelector(state => state);
  const productsState = useSelector(state => state.products);
  const productList = productsState.products.products ;
  const totalPages = productsState.totalPages ;
  const dispatch = useDispatch();
  const [ currPage, setCurrPage ] = useState(1);

  console.log(hey) ;
  console.log(productList) ;
  console.log(totalPages) ;
  function handlePagination(e,pageNo){
    e.preventDefault();
    if(pageNo<=4 && pageNo>=1){
      setCurrPage(pageNo);
      dispatch(getProducts(pageNo));
    }
  }

  useEffect( ()=>{
    dispatch(getProducts())
  },[] )

  return ( <div>
      <div className="products-list-container">
        {/* Display all products here */}
        
        {productList[0]?.map( (item,index) => {
          return <ProductCard key={index} item={item} />
        })}
      </div>
      <div className="pagination-buttons">
        <button className="prev-button"
          onClick={(e) => handlePagination(e, currPage - 1)}
          disabled={currPage === 1}
        >
          Prev
        </button>

        <button className="next-button"
         onClick={(e) => handlePagination(e, currPage + 1)}
         disabled={currPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
