import React, { useState } from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import signup from "../../assets/images/new-user-registration.webp"
import { UserOutlined, MailOutlined, PhoneOutlined, UnlockOutlined } from '@ant-design/icons'

const initialState = { userName: "", email: "", phone: "", Password: "" };

export default function Register() {
  const [state, setState] = useState(initialState)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }))
  }

  const onFinish = () => {
    console.log(state)
  };



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="register-parent">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className='register-img'>
                    <img src={signup} alt="register image" className='form-img' />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className='register-form'>
                    <h2 className='mb-4'>Registration Form</h2>
                    <Form
                      layout='vertical'
                      autoComplete="off"
                      onFinish={onFinish}
                    >
                      <Form.Item
                        label={<label style={{ color: "white" }}>Username</label>}
                        name="userName"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                          { whitespace: true, },
                          { min: 3 }
                        ]}
                      >
                        <Input name="userName" prefix={<UserOutlined />} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                      </Form.Item>
                      <Form.Item
                        label={<label style={{ color: "white" }}>Email</label>}
                        name="email"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please input your valid email!',
                          },
                          { type: 'email', message: 'Please enter a valid email.' }
                        ]}
                      >
                        <Input name='email' prefix={<MailOutlined />} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                      </Form.Item>
                      <Form.Item
                        label={<label style={{ color: "white" }}>Phone</label>}
                        name='phone'
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Phone Number!',
                          },
                          { min: 10 }
                        ]}
                      >
                        <Input name='phone' prefix={<PhoneOutlined />} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                        {/* <InputNumber name='phone' prefix={<PhoneOutlined />} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} /> */}
                      </Form.Item>

                      <Form.Item
                        label={<label style={{ color: "white" }}>Password</label>}
                        name="password"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: 'Please input your password!',
                          },
                          {
                            min: 7,
                            message: "password must be at least 7 character"

                          }

                        ]}
                      >
                        <Input.Password name='password' prefix={<UnlockOutlined />} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                      </Form.Item>

                      <Form.Item className='submitbtn' >
                        <Button type="primary" htmlType="submit">
                          Submit Now
                        </Button>
                      </Form.Item>
                    </Form>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
