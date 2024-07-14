import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import EmployeeCard from "../Components/EmployeeCard";

const EmployeeList = () => {

  const [ empList, setEmpList ] = useState([]) ;
  // const navigate = useNavigate() ;
  const { auth } = useContext(AuthContext) ;

  async function fetchData(){
    try{
      let response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`);
      let data = await response.json();
      console.log(data.data) ;
      setEmpList(data.data) ;
    }catch(error){console.log(error)} 
  }
  useEffect( ()=>{
    console.log(auth) ;
    fetchData() ;
  },[] )

  return (
    <div className="employee-list-container">
      <h2 className="employee-list-title">Employee List</h2>
      <div className="employee-list" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr ", padding:"20px 30px" , gap:"10px"}} >
        {/* Show the list of all employees here */}
        { empList?.map( (item,index)=>{
          return  <EmployeeCard key={index} item={item} />
        } ) }
      </div>
    </div>
  );
};

export default EmployeeList;
