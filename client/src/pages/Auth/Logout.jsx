import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../../contexts/AuthContext';

export default function Logout() {
    const navigate = useNavigate();
    const { userLogout } = useAuthContext();
    useEffect(() => {
        userLogout();
    }, [userLogout])


    return (
        navigate("/")
    )
}
