import React from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import Home from './Home'
import Users from './Users'
import Contacts from './Contacts'
import NoPage from '../Frontend/NoPage'
import Sider from '../../components/Sider'
import { Space, Spin } from 'antd'
import EditUser from './EditUser';
import { useAuthContext } from '../../contexts/AuthContext'

export default function index() {
    const location = useLocation();
    const selectedKey = location.pathname;
    const openKeys = selectedKey.startsWith('/dashboard') ? '/dashboard/contacts' : '';
    const navigate = useNavigate()

    const { user, isLoading } = useAuthContext()
    

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", background: "rgba(0, 0, 0, 0.05)" }}>
                <Spin tip="Loading" size="large">
                    <div className="content" style={{
                        padding: "50px",
                        background: "rgba(0, 0, 0, 0.05)",
                        borderRadius: "4px",
                    }} />
                </Spin>
            </div>
        )
    }

    if (!user.isAdmin) {
        return navigate("/")
    }

    return (
        <>
            <Space style={{ columnGap: 0 }}>
                <Sider selectedKey={selectedKey} openKeys={openKeys} />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/users/:id/edit" element={<EditUser />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
            </Space>
        </>
    )
}
