import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Users from './Users'
import Contacts from './Contacts'
import NoPage from '../Frontend/NoPage'
import Sider from '../../components/Sider'

export default function index() {
    return (
        <>
            <div className='d-flex'>
                <Sider />
                <main id='dashboardMain'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/contacts" element={<Contacts />} />
                        {/* <Route path="/services" element={<User />} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}
