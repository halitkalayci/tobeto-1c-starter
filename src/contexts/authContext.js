import { createContext } from "react";

export const AuthContext = createContext();


export const AuthProvider = (props) => {
    return <AuthContext.Provider value={{ id: 1, user: null, isAuthenticated: false }}>{props.children}</AuthContext.Provider>
}