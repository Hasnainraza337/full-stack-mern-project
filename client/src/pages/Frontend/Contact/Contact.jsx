import React, { useState } from 'react'
import { Button, } from 'antd';
import contactimg from "../../../assets/images/contact.webp"
import { useAuthContext } from '../../../contexts/AuthContext';
import { toast } from 'react-toastify';


const initialState = { userName: "", email: "", message: "" }
const URL = "http://localhost:8000/api/form/contact"

export default function Contact() {
  // const [form] = Form.useForm()
  const [state, setState] = useState(initialState)
  const [userData, setUserData] = useState(true)
  const { user } = useAuthContext();

  if (userData && user) {
    setState({
      userName: user.userName,
      email: user.email,
      message: "",
    })

    setUserData(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(s => ({ ...s, [name]: value }))
  }

  const handleContact = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)

      });
      // console.log(response)
      const res_data = await response.json();
      if (response.ok) {
        toast.success("message send successfull")
        setState(initialState)
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
            <h1>Contact Us</h1>
          </div>
        </div>

        <section>
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <div className='text-center'>
                <img src={contactimg} alt="contact img" className='contact-img' />
              </div>
            </div>
            <div className="col-12 col-lg-6 contactform">
              <div className='contactleft'>
                <form >
                  <div className="row">
                    <div className="col">
                      <label htmlFor='userName'>UserName</label><br />
                      <input type="text" name='userName' required value={state.userName} className='form-control mt-1' onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor='email'>Email</label><br />
                      <input type="email" name='email' required value={state.email} className='form-control mt-1' onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <label htmlFor='message'>Message</label><br />
                      <textarea name="message" required value={state.message} cols="30" rows="5" className='form-control mt-1' onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <Button type="primary" htmlType="submit" onClick={handleContact}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
                {/* <Form
                  form={form}
                  layout='vertical'
                  autoComplete="off"
                  onFinish={onFinish}
                >
                  <Form.Item
                    label={<label className='contact-user' style={{ color: "white" }}>Username</label>}
                    name="userName"
                  // hasFeedback
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'Please input your username!',
                  //   },
                  //   { whitespace: true, },
                  //   { min: 3 }
                  // ]}
                  >
                    <Input name="userName" defaultValue={user.userName} style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                  </Form.Item>

                  <Form.Item
                    label={<label className='contact-email' style={{ color: "white" }}>Email</label>}
                    name="email"
                  // hasFeedback
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'Please input your valid email!',
                  //   },
                  //   { type: 'email', message: 'Please enter a valid email.' }
                  // ]}
                  >
                    <Input name='email' style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                  </Form.Item>

                  <Form.Item
                    label={<label className='contact-message' style={{ color: "white" }}>Message</label>}
                    name="message"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Message!',
                      },
                      {
                        min: 10,
                        message: "message cannot more than 100 character"

                      }

                    ]}

                  >
                    <Input.TextArea rows={6} name='message' style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                  </Form.Item>

                  <Form.Item className='submitbtn'  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Map */}
      <div className='map mt-4' style={{ height: '450px', overflow: "hidden" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1704.1122043601922!2d72.73600995000001!3d31.325175050000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392252ea35e9f185%3A0xec12eaf8079d5cf3!2sNew%20Lahore%20City%2C%20Naya%20Lahore%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab!5e0!3m2!1sen!2s!4v1685239036330!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
