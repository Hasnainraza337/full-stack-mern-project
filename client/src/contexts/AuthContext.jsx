import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";



const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("")

    const storeTokenInLs = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }

    const isLoggedIn = !!token;
    console.log(isLoggedIn)

    // user logout
    const userLogout = () => {
        setToken("");
        return localStorage.removeItem("token")
    }


    // jwt Autentication and get currently user data

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/auth/user", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                // console.log(data.userData)
                setUser(data.userData)
            }
        } catch (error) {
            console.log("fecthing data error")
        }
    }

    useEffect(() => {
        userAuthentication()
    }, [userAuthentication])


    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLs, userLogout, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)