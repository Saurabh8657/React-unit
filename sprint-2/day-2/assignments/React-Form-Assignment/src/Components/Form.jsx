import React, { useState } from "react";
import "./Form.css";
import ShowFormData from "./ShowFormData";
let initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phNumber: "",
  country: "",
  birthDate: "",
  avatar: "",
  marriageStatus: false,
  gender: "",
}
const Form = () => {
 const [userDetails, setUserDetails] = useState({})
 const [submitStatus, seSubmitStatus] = useState(false)
 function handleSubmit(e){
  e.preventDefault();
  seSubmitStatus(true)
  console.log(userDetails);
 }
  return (
    <div>
      <div>
        <h1>React Form Assignment</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* First Name */}
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" placeholder="First Name" value={userDetails.firstName} onChange={(e)=>setUserDetails({...userDetails,firstName: e.target.value})} />
          {/* Last Name */}
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" placeholder="Last Name" value={userDetails.lastName} onChange={(e)=>setUserDetails({...userDetails,lastName: e.target.value})} />
          {/* Email */}
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email: e.target.value})} />
          {/* Password */}
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" placeholder="Password" value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password: e.target.value})} />
          {/* Phone number */}
          <label htmlFor="phNumber">Phone number: </label>
          <input type="number" name="phNumber" placeholder="Phone number" value={userDetails.phNumber} onChange={(e)=>setUserDetails({...userDetails,phNumber: e.target.value})} />
          {/* Country Select Tage */}
          <label htmlFor="country">Country: </label>
          <select  name="country" value={userDetails.country} onChange={(e)=>setUserDetails({...userDetails,country: e.target.value})} >
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Russia">Russia</option>
            <option value="Brazil">Brazil</option>
            <option value="China">China</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
          </select>
          {/* Birth Date Selector */}
          <label htmlFor="birthDate">Birth Date: </label>
          <input type="date" name="birthDate" placeholder="Birth Date" value={userDetails.birthDate} onChange={(e)=>setUserDetails({...userDetails,birthDate: e.target.value})} />
          {/* Profile Pic Selector */}
          <label htmlFor="avatar">Profile Pic: </label>
          <input type="file" name="avatar" placeholder="Profile Pic" value={userDetails.avatar} onChange={(e)=>setUserDetails({...userDetails,avatar: e.target.value})} />
          {/* Married Status Selector */}
          <input type="checkbox" name="marriagestatus" checked={userDetails.marriagestatus} onChange={(e)=>setUserDetails({...userDetails,marriagestatus: e.target.value})} />
          <label htmlFor="marriagestatus"> :Married</label>
          {/* Gender Selector */}
          <label>Gender: </label>
            <input type="radio" id="male" name="gender" value="male" checked={userDetails.gender === "male"} onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })} />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" checked={userDetails.gender === "female"} onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })} />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" checked={userDetails.gender === "other"} onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })} />
            <label htmlFor="other">Other</label>
          {/* Submit Button - input type submit */}
          <input type="submit" value="submit" />
        </form>
        {/* if form submitted then show ShowFormData component here */}
        {submitStatus && <ShowFormData userDetails={userDetails} />}
      </div>
    </div>
  );
};
export default Form;