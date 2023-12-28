import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import User from './User'
import NoPage from '../Frontend/NoPage'

export default function index() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/user" element={<User />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </>
    )
}
