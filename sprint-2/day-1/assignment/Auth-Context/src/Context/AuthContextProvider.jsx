import React, {createContext, useState} from 'react'

const initialState ={
  isAuth: false,
  loading: false, 
  error: null,
  token: ""
}

const AuthContext = createContext();


export default function AuthContextProvider({children}) {
  const [ loginData, setloginData ] = useState(initialState) ;

  return (
    <AuthContext.Provider value={ {loginData,setloginData} } >
      {children}
    </AuthContext.Provider>
    // <div></div>
  )
}

export { AuthContext,initialState }