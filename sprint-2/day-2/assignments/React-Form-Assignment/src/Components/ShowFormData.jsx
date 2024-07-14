import React from "react";
import "./ShowFormData.css";
const ShowFormData = ( {userDetails} ) => {
  return (
    <div>
      <h1>Form Data</h1>
      <h3 data-cy="first-name">First Name: {userDetails.firstName}</h3>
      <h3 data-cy="last-name">Last Name: {userDetails.lastName}</h3>
      <h3 data-cy="email">Email: {userDetails.email}</h3>
      <h3 data-cy="password">Password: {userDetails.password} </h3>
      <h3 data-cy="phNumber">Phone: {userDetails.phNumber} </h3>
      <h3 data-cy="country">Country: {userDetails.country}</h3>
      <h3 data-cy="birth-date">Birth Date: {userDetails.birthDate}</h3>
      <h3 data-cy="marriage-status">Married: {userDetails.marriagestatus ? "Yes" : "No" }</h3>
      <h3 data-cy="image-url">Image URL: {userDetails.avatar} </h3>
      <h3 data-cy="gender">Gender: {userDetails.gender}</h3>
    </div>
  );
};
export default ShowFormData;