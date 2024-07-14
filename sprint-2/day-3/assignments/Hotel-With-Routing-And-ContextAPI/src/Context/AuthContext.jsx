import React, { createContext, useState } from "react";

let AuthContext = createContext();

function AuthContextProvider({children}) {
  let providerState = {} ;
  const [ AuthState, setAuthState ] = useState({isAuth: false, token: null}) ;

  // ////donot remove/change the below code
  if (window.Cypress) {
    window.store = providerState;
  }
  // //////

  //Below you can reuturn provider by passing the value as per the problem statement
  return <AuthContext.Provider value={{AuthState, setAuthState}} >
    {children}
  </AuthContext.Provider>

}

export default AuthContextProvider ;
export { AuthContext }
