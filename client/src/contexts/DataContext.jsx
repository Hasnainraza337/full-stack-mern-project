import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { toast } from "react-toastify"


const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const { authorizationToken } = useAuthContext();
    const [users, setUsers] = useState([])
    const [contacts, setContacts] = useState([])

    // get all users
    const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            // console.log(response)
            if (response.ok) {
                const usersData = await response.json();
                setUsers(usersData.users)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // user delete
    const deleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/delete/${userId}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            if (response.ok) {
                toast.success("User deleted successfully")
                getAllUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }
 
    // get all contacts
    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            // console.log(response)
            if (response.ok) {
                const contactsData = await response.json();
                setContacts(contactsData.contacts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsers()
        getAllContacts()
    }, [])

    return (
        <DataContext.Provider value={{ users, contacts, deleteUser, }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)