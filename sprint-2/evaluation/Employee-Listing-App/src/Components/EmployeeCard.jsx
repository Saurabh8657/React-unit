import { useNavigate } from "react-router-dom";

const EmployeeCard = ({item}) => {
  const navigate = useNavigate();

  function handleNavigate(e){
    e.preventDefault() ;
    console.log("hey");
    navigate(`/employeeDetail/${item.id}`) ;
  }
  return (
    <div className="employee-card" style={{border:"1px solid black"}}  onClick={(e)=>{handleNavigate(e)}} >
      <img src={item.image} alt="hey" className="employee-image" />
      <p className="employee-name" >{item.name}</p>
      <p className="employee-gender" >Gender: {item.gender}</p>
    </div>
  );
};

export default EmployeeCard;
