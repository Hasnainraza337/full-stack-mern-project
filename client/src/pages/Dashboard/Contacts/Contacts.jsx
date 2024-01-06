import React from 'react'
import { Button, Typography } from 'antd'
import { Table, } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { LuMenu } from "react-icons/lu";
import { useDataContext } from '../../../contexts/DataContext';

const columns = [
    {
        title: 'Sr',
        dataIndex: 'sr',
        key: 'sr',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Message',
        dataIndex: 'message',
        key: 'message',
    },

    {
        title: 'Action',
        key: 'action',
        render: () => {
            return (
                <div>
                    <Button type='primary' style={{ borderRadius: 5 }}><EditOutlined style={{ fontSize: 20 }} /></Button>
                    <Button type='primary' danger style={{ marginLeft: 5, borderRadius: 5 }}><DeleteOutlined style={{ fontSize: 20 }} /></Button>
                </div>
            )
        },

    },
];

export default function Contacts() {
    const { contacts } = useDataContext();


    const data = contacts.map((contact, i) => {
        return {
            key: i,
            sr: i + 1,
            name: contact.userName,
            email: contact.email,
            message: contact.message,
        }
    })

    return (
        <>
            <div className="container-fluid bg-light py-1">
                <div className="row">
                    <div className="col dashHeader">
                        <p className='dashMenu'><LuMenu style={{ fontSize: 22, cursor: "pointer" }} /></p>
                        <Typography.Title className='text-center'>Admin Contacts</Typography.Title>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <Table columns={columns} dataSource={data} scroll={{ x: true }} />
                    </div>
                </div>
            </div>
        </>
    )
}
