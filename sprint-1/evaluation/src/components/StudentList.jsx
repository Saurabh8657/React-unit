// import { useState } from "react";
// import { useEffect } from "react";


// StudentList component to render a list of students
export  function StudentList(props){
  return (
    <>
    <div  >
      <h2>Student List</h2>
	    <div className="student-container" >
        { props.students.map( (item,index)=> {
          return (
            <div key={index} className="studentCard" > 
              <img src={item.image}  />
              <p className="name" > {item.firstName}{" "}{item.lastName} </p>
              <p className="email" > {item.email} </p>
              <p className="phone" > {item.phone} </p>
            </div>
          )

        } )}
        {/* render div containing image,firstName Lastname, email, phone. 
        name,email,phone can be render on p tag individually after image. */}
	    </div>
    </div>
    </>
  );
};


