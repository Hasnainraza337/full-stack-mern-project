import React, { createContext, useState } from "react"
import { useContext } from "react";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))

    const storeTokenInLs = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }

    const isLoggedIn = !!token;
    console.log(isLoggedIn)

    // user logout
    const userLogout = () => {
        setToken("");
        return localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLs, userLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)