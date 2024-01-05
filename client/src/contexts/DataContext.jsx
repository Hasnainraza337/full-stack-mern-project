import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";
import { useAuthContext } from "./AuthContext";


const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const { authorizationToken } = useAuthContext();
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            console.log(response)
            if (response.ok) {
                const usersData = await response.json();
                setUsers(usersData.users)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <DataContext.Provider value={{ users }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)