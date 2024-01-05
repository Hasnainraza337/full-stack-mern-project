import React, { useState } from 'react'
import { Button, Card, Typography } from 'antd'
import { FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Chart from 'react-apexcharts'
import { LuMenu } from "react-icons/lu";
import { useDataContext } from '../../../contexts/DataContext';


export default function Hero() {
  const { users } = useDataContext();
  const [state, setState] = useState(
    {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [{
        name: 'Users',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      },
      {
        name: 'Contacts',
        data: [10, 20, 30, 40, 45, 55, 67, 81, 98]
      }
      ]
    }
  )

  const [pie, setPie] = useState({
    series: [44, 55,],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ["Users", "Contacts"],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  })
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
                <p style={{ fontSize: 20, marginBottom: 0 }}>10</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Chart options={state.options} series={state.series} type="bar" />
          </div>
          <div className="col-12 col-lg-6">
            <Chart options={pie.options} series={pie.series} type="pie" height={350} />
          </div>
        </div>
      </div>
    </>
  )
}
