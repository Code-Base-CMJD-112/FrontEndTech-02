import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { AuthContextType } from "../model/AuthContextType"


const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}:{children: ReactNode})=> {

    const [isAuthenticated,setIsAuthenticated] = useState(false)

    // getToken
    useEffect(()=>{
        const token = localStorage.getItem("cmjd112")
        if(token){
            setIsAuthenticated(!!token)
        }
    },[])

    const login = (token:string) =>{
        localStorage.setItem("cmjd112",token)
        setIsAuthenticated(true)

    }
    const logout = ()=>{
        localStorage.removeItem("cmjd112")
        setIsAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    )   
}

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error ("Auth Error")
    }
    return context;
}