import React, { createContext } from "react"
import { useContext } from "react";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const storeTokenInLs = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }

    return (
        <AuthContext.Provider value={{ storeTokenInLs }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)