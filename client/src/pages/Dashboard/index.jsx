import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from './Home'
import Users from './Users'
import Contacts from './Contacts'
import NoPage from '../Frontend/NoPage'
import Sider from '../../components/Sider'
import { Space } from 'antd'

export default function index() {
    const location = useLocation();
    const selectedKey = location.pathname;
    const openKeys = selectedKey.startsWith('/dashboard') ? '/dashboard/contacts' : '';
    return (
        <>
            <Space style={{ columnGap: 0 }}>
                <Sider selectedKey={selectedKey} openKeys={openKeys} />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/contacts" element={<Contacts />} />
                        {/* <Route path="/services" element={<User />} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
            </Space>
        </>
    )
}
