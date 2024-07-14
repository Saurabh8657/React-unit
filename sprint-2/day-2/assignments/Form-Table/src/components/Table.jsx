import React from "react";
import Row from "./Row";
import { UserDataContext } from "../context/UserDataContext";
import { useContext } from "react";


function Table() {
  const {loginDatas} = useContext(UserDataContext) ;
  return (
    <table data-testid="table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
          <th>GENDER</th>
        </tr>
      </thead>
      <tbody>
        {loginDatas.map( (item,index)=> 
          <Row  key={index} item={ item }/>
        )}
      </tbody>
    </table>
  );
}

export default Table;
