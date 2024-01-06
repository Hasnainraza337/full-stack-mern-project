import React, { useState, useEffect } from 'react'
import { Button, Card, Typography } from 'antd'
import { FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Chart from 'react-apexcharts'
import { LuMenu } from "react-icons/lu";
import { useDataContext } from '../../../contexts/DataContext';


export default function Hero() {
  const { users, contacts } = useDataContext();







  const [pie, setPie] = useState({
    series: [users.length, contacts.length],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Users', 'Contacts'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });


  useEffect(() => {
    // Update the state when users or contacts change

    setPie((prev) => ({
      ...prev,
      series: [users.length, contacts.length],
    }));
  }, []);

  return (
    <>
      <div className="container-fluid bg-light py-1">
        <div className="row">
          <div className="col dashHeader">
            <p className='dashMenu'><LuMenu style={{ fontSize: 22, cursor: "pointer" }} /></p>
            <Typography.Title className='text-center'>Admin Dashboard</Typography.Title>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3">
            <Card
              className='userbg'
            >
              <div style={{ textAlign: "center", fontSize: 40 }}>
                <FaUser />
              </div>
              <div className='d-flex justify-content-between align-items-center mt-3'>
                <Typography.Title level={4}>Total Users</Typography.Title>
                <p style={{ fontSize: 20, marginBottom: 0 }}>{users.length}</p>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-3 col-lg-3">
            <Card
              className='contactbg'
            >
              <div style={{ textAlign: "center", fontSize: 40 }}>
                <MdContactPhone />

              </div>
              <div className='d-flex justify-content-between align-items-center mt-3'>
                <Typography.Title level={4}>Total Contacts</Typography.Title>
                <p style={{ fontSize: 20, marginBottom: 0 }}>{contacts.length}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Chart options={pie.options} series={pie.series} type="pie" height={350} />
          </div>
        </div>
      </div>
    </>
  )
}
