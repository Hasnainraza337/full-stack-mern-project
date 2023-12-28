import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import login from "../../assets/images/login.png"
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'

const initialState = { email: "", Password: "" };

export default function Login() {
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
                <div className="col-12  col-lg-6">
                  <div className="register-img">
                    <img src={login} alt="register image" className='form-img' />
                  </div>
                </div>
                <div className="col-12  col-lg-6">
                  <div className='register-form login-form'>
                    <h2 className='mb-5'>Login Form</h2>
                    <Form
                      layout='vertical'
                      autoComplete="off"
                      onFinish={onFinish}
                    >

                      <Form.Item
                        label={<label className='label' style={{ color: "white" }}>Email</label>}
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
                        label={<label className='label' style={{ color: "white" }}>Password</label>}
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

                      <Form.Item className='submitbtn'  >
                        <Button type="primary" htmlType="submit">
                          Sign In
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
