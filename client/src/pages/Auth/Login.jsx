import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import login from "../../assets/images/login.png"
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../../contexts/AuthContext';
import { toast } from "react-toastify"

const initialState = { email: "", Password: "" };

export default function Login() {
  const [state, setState] = useState(initialState)
  const navigate = useNavigate();
  const { storeTokenInLs, API } = useAuthContext();
  const [form] = Form.useForm();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }))
  }

  const URL = `${API}/api/auth/login`

  const handleLogin = async () => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)

      })
      const res_data = await response.json();
      if (response.ok) {
        // console.log(res_data)
        storeTokenInLs(res_data.token)
        form.resetFields();
        toast.success("Login Successfull")
        navigate("/")
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log(error)
    }
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
                      form={form}
                      layout='vertical'
                      autoComplete="off"
                      onFinish={handleLogin}
                    >

                      <Form.Item
                        label={<label className='label' style={{ color: "white" }}>Email</label>}
                        name="email"
                        hasFeedback
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: 'Please input your valid email!',
                      //   },
                      //   { type: 'email', message: 'Please enter a valid email.' }
                      // ]}
                      >
                        <Input name='email' prefix={<MailOutlined />} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                      </Form.Item>

                      <Form.Item
                        label={<label className='label' style={{ color: "white" }}>Password</label>}
                        name="password"
                        hasFeedback
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: 'Please input your password!',
                      //   },
                      //   {
                      //     min: 7,
                      //     message: "password must be at least 7 character"

                      //   }

                      // ]}
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
