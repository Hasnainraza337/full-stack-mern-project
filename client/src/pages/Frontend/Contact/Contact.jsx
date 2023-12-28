import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import contactimg from "../../../assets/images/contact.webp"

const initialState = { userName: "", email: "", message: "" };

export default function Contact() {
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
                <Form
                  layout='vertical'
                  autoComplete="off"
                  onFinish={onFinish}
                >
                  <Form.Item
                    label={<label className='contact-user' style={{ color: "white" }}>Username</label>}
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
                    <Input name="userName" style={{ width: 350, borderRadius: 5 }} onChange={handleChange} />
                  </Form.Item>

                  <Form.Item
                    label={<label className='contact-email' style={{ color: "white" }}>Email</label>}
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
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Map */}
      <div className='map' style={{ height: '450px', overflow: "hidden" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1704.1122043601922!2d72.73600995000001!3d31.325175050000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392252ea35e9f185%3A0xec12eaf8079d5cf3!2sNew%20Lahore%20City%2C%20Naya%20Lahore%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab!5e0!3m2!1sen!2s!4v1685239036330!5m2!1sen!2s" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
