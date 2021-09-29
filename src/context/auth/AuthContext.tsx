import { createContext, useEffect, useReducer } from "react";
import {  ActionsAuth, User } from "../../types/interfaces";
import { authReducer, initialUser } from "./authReducer";

interface Context{
    user: User,
    dispatch: React.Dispatch<ActionsAuth>;
}

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext({} as Context);

export const AuthProvider: React.FC<Props> = ({children}) => {

    const [user, dispatch] = useReducer(authReducer, initialUser)

    useEffect(() => {
        localStorage.setItem("user-hero_app", JSON.stringify(user))
    }, [user])
    
    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
