import { Button } from 'antd'
import React from 'react'
import Aboutimg from "../../../assets/images/about.webp"

export default function About() {
  return (
    <>
      <section className='hero-section py-3'>
        <div className="container">
          <div className="row hero-flex">
            <div className="col-12 col-lg-6 mt-4 mt-lg-0 ">
              <p className='mb-0'>Welcom, Hasnain Raza</p>
              <h1>Why Chose Us?</h1>
              <p>
                Experties: Our team consists of experienced IT Professional
                who are passionate about staying up-to-date with the latest
                industery trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: Web prioritize your satisfication and
                provide top-notch  support to address your IT concern.
              </p>
              <p>
                Affordability: We offer competitive  pricing without compromising on
                the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there you need us.We're committed
                to ensuring your IT environment is reliable and available 24/7.
              </p>
              <div className='mt-5'>
                <Button type='primary' style={{ marginRight: 20, borderRadius: 5 }}>Connect Now</Button>
                <Button style={{ background: "transparent", color: "white", borderRadius: 5 }}>Learn More</Button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className='marginleft'>
                <img src={Aboutimg} alt="A person using Lapto for coding" style={{ width: 500 }} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='anylatics-section py-4'>
        <div className="container anylatics-container">
          <div className="row">
            <div className="col analatic-col">
              <h2>50+</h2>
              <p>registered companies</p>
            </div>
            <div className="col analatic-col">
              <h2>70+</h2>
              <p>projrct done</p>
            </div>
            <div className="col analatic-col">
              <h2>100+</h2>
              <p>happy clients</p>
            </div>
            <div className="col">
              <h2>500k</h2>
              <p>youtube subscribe</p>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
