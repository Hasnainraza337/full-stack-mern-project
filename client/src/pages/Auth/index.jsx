import React from 'react'
import { Routes, Route } from "react-router-dom"
import Register from './Register'
import Login from './Login'

export default function index() {
    return (
        <>
            <main className='Auth'>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        </>
    )
}
