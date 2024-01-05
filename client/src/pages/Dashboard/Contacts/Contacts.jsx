import { Typography } from 'antd'
import React from 'react'
import { LuMenu } from "react-icons/lu";

export default function Contacts() {
    return (
        <>
            <div className="container-fluid bg-light py-1">
                <div className="row">
                    <div className="col dashHeader">
                        <p className='dashMenu'><LuMenu style={{ fontSize: 22, cursor: "pointer" }} /></p>
                        <Typography.Title className='text-center'>Admin Contacts</Typography.Title>
                    </div>
                </div>
            </div>
        </>
    )
}
