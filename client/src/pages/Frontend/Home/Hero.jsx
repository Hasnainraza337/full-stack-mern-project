import { Button } from 'antd'
import React from 'react'
import Home from "../../../assets/images/Home.webp"
import Getstarted from "../../../assets/images/getstarted.webp"

export default function Hero() {
  return (
    <>
      <section className='hero-section py-2'>
        <div className="container">
          <div className="row hero-flex">
            <div className="col-12 col-lg-6 mt-4 mt-lg-0 ">
              <p className='mb-0'>We are  <abbr style={{ cursor: "pointer", color: "#0d6efd" }} title='MongoDb,Express,React,Node'>MERN</abbr> stack developer.</p>
              < h1 style={{ fontSize: "55px" }}>Welcom to our website</h1>
              <p>
                Are you ready to take your business to the next level with cutting-edge
                IT solutions? I am providing the IT services and solutions tailored to
                meet your unique needs.
              </p>
              <div className='mt-5'>
                <Button type='primary' style={{ marginRight: 20, borderRadius: 5 }}>Connect Now</Button>
                <Button style={{ background: "transparent", color: "white", borderRadius: 5 }}>Learn More</Button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className='marginleft'>
                <img src={Home} alt="A person using Lapto for coding" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='anylatics-section py-4'>
        <div className="container anylatics-container">
          <div className="row">
            <div className="col  analatic-col">
              <h2>50+</h2>
              <p>registered companies</p>
            </div>
            <div className="col  analatic-col">
              <h2>100,00+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="col   analatic-col  ">
              <h2>500+</h2>
              <p>well known developers</p>
            </div>
            <div className="col   ">
              <h2>24/7</h2>
              <p>service</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-3">
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <img src={Getstarted} alt="startin coding" style={{ maxWidth: 500, height: 500 }} />
            </div>
            <div className="col-12 col-lg-6">
              <div className='marginleft'>
                <p className='mb-0'>we are here to help you</p>
                <h1>Get Started Today</h1>
                <p>
                  Ready to take the firs step towards a more efficient and secure IT
                  infrastructure? Contact us today for a free consulation  and let's discuss
                  how we can help your business  thrive in the digitel age.
                </p>
                <div className='mt-5  getstarted-btn'>
                  <Button type='primary' style={{ marginRight: 20, borderRadius: 5 }}>Connect Now</Button>
                  <Button style={{ background: "transparent", color: "white", borderRadius: 5 }}>Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
