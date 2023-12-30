import React from 'react'
import { useServiceContext } from '../../../contexts/ServiceContext'
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import serviceImg from "../../../assets/images/services.png"

export default function Services() {
  const { serviceData } = useServiceContext();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Services</h1>
          </div>
        </div>
        <Row gutter={24} className='mt-4'>
          {serviceData.map((item, i) => {
            return (
              <Col span={8}>
                <Card
                  className='mb-4'
                  hoverable
                  style={{
                    width: 370,
                  }}
                  cover={<img alt="example" src={serviceImg} />}
                >
                  <div className='d-flex justify-content-between'>
                    <p>{item.provider}</p>
                    <p>{item.price}</p>
                  </div>
                  <Meta title={item.service} description={item.description} />
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </>
  )
}
