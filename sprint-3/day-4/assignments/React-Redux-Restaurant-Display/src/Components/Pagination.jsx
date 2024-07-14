import { useDispatch } from "react-redux";
import { getRestaurants } from "../Redux/action";
import { useState } from "react";


const Pagination = ({totalPages}) => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const dispatch = useDispatch(); 
  const paginationArr = [];
  for(let i=1; i<=totalPages; i++){
    paginationArr.push(i);
  }
  function handlePaggination(e,pageNo){
    e.preventDefault();
    setCurrentPage(pageNo) ;
    dispatch(getRestaurants(pageNo)) ;
  }
  return <>
  <div className="pagination_wrapper" style={{textAlign:"center",margin:"20px"}}>
      {paginationArr.map( (pageNo,index)=>{
        return <button key={index} 
        style={{
          marginRight: "10px",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          backgroundColor: currentPage === pageNo ? "red" : "teal",
        }}
        onClick={(e)=>{
          handlePaggination(e,pageNo);
        }}
        disabled={ currentPage===pageNo }
        > 
          {pageNo} 
        </button>
      } )}
    </div>
  </>
};

export default Pagination;
