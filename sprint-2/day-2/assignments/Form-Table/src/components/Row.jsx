import React from "react";
import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";

function Row({item,index}) {
  
  return <tr data-testid="row" key={index}>
   <td> {item.name} </td>
   <td> {item.email}  </td>
   <td> {item.password}  </td>
   <td> {item.gender}  </td>
  </tr>;
}

export default Row;
