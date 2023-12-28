import { Button, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='error-page'>
                            <div className="content">
                                <h2 className='header'>404</h2>
                                <h4>Sory! page not found</h4>
                                <p>
                                    Oops! It seems like the page you're trying to access doesn't exist.<br />
                                    If you belive there's an issue , feel free to report it, and we'll
                                    look into it.
                                </p>
                                <div className='errorpage-btn'>
                                    <Space>
                                        <Link to="/"><Button type='primary' className='btnn' style={{ background: "transparent" }}>RETURN HOME</Button></Link>
                                        <Link to="/contact"><Button type='primary' className='btnn' style={{ background: "transparent" }}>REPORT PROBLEM</Button></Link>
                                    </Space>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
