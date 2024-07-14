import React, { useState } from "react";

function PasswordInput({ changeHandler, state }) {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  return (
    <div style={{ marginBottom: 10 }}>
      <input data-testid="password-input" value={state} placeholder="Password" type={isShowingPassword ? "text" : "password"} id="password" onChange={changeHandler}/>
      <div style={{ display: "flex" }}>
        <input data-testid="visibility-checkbox" checked={isShowingPassword} style={{ width: 20, height: 20 }} type="checkbox"  onChange={() => {setIsShowingPassword(!isShowingPassword) }}/>
        <label style={{ marginLeft: 5 }}>Show Password</label>
      </div>
    </div>
  );
}

export default PasswordInput;
