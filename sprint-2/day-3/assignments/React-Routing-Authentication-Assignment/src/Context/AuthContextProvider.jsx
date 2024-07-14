import { createContext, useState } from "react";


const AuthContext = createContext();


function AuthContextProvider({children}){
    const [ isAuth ,setisAuth ] = useState(false); 

    return <AuthContext.Provider value={ { isAuth, setisAuth } } >
        {children}
    </AuthContext.Provider>
}

export { AuthContext,AuthContextProvider }