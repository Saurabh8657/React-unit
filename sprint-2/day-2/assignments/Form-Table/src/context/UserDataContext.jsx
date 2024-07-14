import { useState } from "react";
import { createContext } from "react";

const intitalData ={
    name:"",
    email:"",
    password:"",
    gender:""
}

const UserDataContext = createContext(intitalData) ;

function UserDataContextProvider({children}){
    const [loginDatas,setLoginDatas] = useState([]) ;

    return <UserDataContext.Provider value={ { loginDatas,setLoginDatas } } >
        {children}
    </UserDataContext.Provider>
}

export { UserDataContext,UserDataContextProvider,intitalData } 