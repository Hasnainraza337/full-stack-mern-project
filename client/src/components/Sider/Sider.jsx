import { Menu } from 'antd'
import React from 'react'
import { AppstoreOutlined, UserOutlined, ContactsOutlined, HomeOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from 'react-router-dom'


export default function Sider({ selectedKey, openKeys }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Menu
                style={{
                    width: "200px",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    overflow: "auto"
                }}
                defaultSelectedKeys={[selectedKey]}
                defaultOpenKeys={[openKeys]}
                onClick={(item) => {
                    navigate(item.key)
                }}
                items={[
                    {
                        key: "/dashboard",
                        icon: <AppstoreOutlined />,
                        label: "Dashboard",
                    },
                    {
                        key: "/dashboard/users",
                        icon: <UserOutlined />,
                        label: "Users",
                    },
                    {
                        key: "/dashboard/contacts",
                        icon: <ContactsOutlined />,
                        label: "Contacts",
                    },
                    {
                        key: "/",
                        icon: <HomeOutlined />,
                        label: "Home",
                    },
                ]} />


        </>
    )
}
