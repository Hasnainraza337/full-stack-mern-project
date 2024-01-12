import React from 'react'
import { Button, Typography } from 'antd'
import { Table, } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { LuMenu } from "react-icons/lu";
import { useDataContext } from '../../../contexts/DataContext';
import { Link } from "react-router-dom"




export default function User() {
  const { users, deleteUser } = useDataContext();


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
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <div>
            <Link to={`/dashboard/users/${record.userId}/edit`}><Button type='primary' style={{ borderRadius: 5 }}><EditOutlined style={{ fontSize: 20 }} /></Button></Link>
            <Button type='primary' danger onClick={() => deleteUser(record.userId)} style={{ marginLeft: 5, borderRadius: 5 }}><DeleteOutlined style={{ fontSize: 20 }} /></Button>
          </div >
        )
      },

    },
  ];

  const data = users.map((user, i) => {
    return {
      key: i,
      sr: i + 1,
      name: user.userName,
      email: user.email,
      phone: user.phone,
      userId: user._id
    }
  })


  return (
    <>
      <div className="container-fluid bg-light py-1">
        <div className="row">
          <div className="col dashHeader">
            <p className='dashMenu'><LuMenu style={{ fontSize: 22, cursor: "pointer" }} /></p>
            <Typography.Title className='text-center'>Admin Users</Typography.Title>
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




