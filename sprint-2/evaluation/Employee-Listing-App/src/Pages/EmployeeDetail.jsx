import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [ item, setItem ] = useState({}) ;
  const { id } = useParams() ;

  async function fetchData(){
    try{
      let response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees/${id}`);
      let data = await response.json();
      console.log(data.data) ;
      setItem(data.data) ;
    }catch(error){console.log(error)} 
  }
  useEffect( ()=>{
    console.log("hey") ;
    fetchData() ;
  },[] )

  return (
    <div className="employee-detail-container">
      <main className="employee-detail" >
        
        <img src={item.image} alt="hey" className="employee-image" />
        <p className="employee-name" >{item.name}</p>
        <p className="employee-id" >Employee ID: {item.id}</p>
        <p className="employee-gender" >Gender: {item.gender}</p>
        <p className="employee-department" >Department: {item.department}</p>
        <p className="employee-salary" >Salary: ${item.salary}</p>
      </main>
    </div>
  );
};

export default EmployeeDetail;
