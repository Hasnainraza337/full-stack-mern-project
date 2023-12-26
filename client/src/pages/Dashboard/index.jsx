import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import User from './User'

export default function index() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/dashboard/user" element={<User />} />
            </Routes>
        </>
    )
}
