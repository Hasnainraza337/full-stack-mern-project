import { Button, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from "../../../contexts/AuthContext"
import { Table, } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

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


export default function User() {
  const { authorizationToken } = useAuthContext();
  const [users, setUsers] = useState([])
  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      })
      console.log(response)
      if (response.ok) {
        const usersData = await response.json();
        setUsers(usersData.users)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const data = users.map((user, i) => {
    return {
      key: i,
      sr: i + 1,
      name: user.userName,
      email: user.email,
      phone: user.phone,
    }
  })


  return (
    <>
      <div className="container-fluid bg-light py-1">
        <div className="row">
          <div className="col">
            <Typography.Title className='text-center'>Admin Users</Typography.Title>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <Table columns={columns} dataSource={data} scroll={{x:true}} />
          </div>
        </div>
      </div>

    </>
  )
}




