import React from 'react'
import { Button, Typography } from 'antd'
import { Table, } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { LuMenu } from "react-icons/lu";
import { useDataContext } from '../../../contexts/DataContext';



export default function Contacts() {
    const { contacts, deleteContact } = useDataContext();

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
            render: (text, record) => {
                return (
                    <div>
                        <Button type='primary' danger onClick={() => deleteContact(record.contactId)} style={{ borderRadius: 5 }}><DeleteOutlined style={{ fontSize: 20 }} /></Button>
                    </div>
                )
            },

        },
    ]; ``

    const data = contacts.map((contact, i) => {
        return {
            key: i,
            sr: i + 1,
            name: contact.userName,
            email: contact.email,
            message: contact.message,
            contactId: contact._id
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
