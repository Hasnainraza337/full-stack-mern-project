import React, { createContext, useEffect, useState } from "react"
import { useContext } from "react";
import { useAuthContext } from "./AuthContext";


const ServiceContext = createContext();

export const ServiceContextProvider = ({ children }) => {
    const [serviceData, setServiceData] = useState([])
    const { API } = useAuthContext()

    const services = async () => {
        try {
            const response = await fetch(`${API}/api/data/service`)
            if (response.ok) {
                const data = await response.json()
                setServiceData(data.response)
            }
        } catch (error) {
            console.log("Error occur while getting service data")
        }
    }

    useEffect(() => {
        services()
    }, [])

    return (
        <ServiceContext.Provider value={{ serviceData }}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useServiceContext = () => useContext(ServiceContext)