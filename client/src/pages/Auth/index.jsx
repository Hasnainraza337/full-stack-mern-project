import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from './Register'
import Login from './Login'
import NoPage from '../Frontend/NoPage'
import Logout from './Logout'

export default function index() {
    return (
        <>
            <main className='Auth'>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </main>
        </>
    )
}
