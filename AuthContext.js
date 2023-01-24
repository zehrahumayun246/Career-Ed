import react,{useContext,useState} from 'react'
import {auth} from "../../firebase"

const AuthContext=react.createContext()
export function useAuth(){
    return useContext(AuthContext)
}
function signup(username,firstname,lastname,field,linkers,password,email){
    return auth.currentUserWithEmailAndPassword(username,firstname,lastname,field,linkers,password,email)
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser]=useState()
    const value={
        currentUser,
        signup
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
