import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(false);

  /**
   * Do not remove or comment the below given code
   */
  ////////////////////////////////////
  if (window.Cypress) {
    window.myAuthContext = auth;
  }
  ////////////////////////////////////

  return <>
    <AuthContext.Provider value={{auth, setAuth}} >
      {children}
    </AuthContext.Provider>
  </>;
};


export {AuthContext}