import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import { useParams, useNavigate } from "react-router-dom"
import { useAuthContext } from '../../../contexts/AuthContext';
import { useDataContext } from '../../../contexts/DataContext';
import { toast } from "react-toastify"

const initialState = { userName: "", email: "", phone: "" }

export default function EditUser() {
    const [state, setState] = useState(initialState)
    const { authorizationToken, API } = useAuthContext()
    const { getAllUsers } = useDataContext()

    const params = useParams()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(s => ({ ...s, [name]: value }))
    }

    // get sinlge user
    const getOneUser = async () => {
        try {
            const response = await fetch(`${API}/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })

            if (response.ok) {
                const user = await response.json()
                setState(user.user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // update user
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(state)
            })
            if (response.ok) {
                toast.success("User update successfully")
                navigate("/dashboard/users")
                getAllUsers()
            } else {
                toast.error("Not update")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOneUser()
    }, [])
    return (
        <>
            <section>
                <div className="container py-5" style={{ marginTop: "100px" }}>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-lg-6">
                            <div>
                                <form onSubmit={handleUpdate}>
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
                                            <label htmlFor='email'>Phone</label><br />
                                            <input type="number" name='phone' required value={state.phone} className='form-control mt-1' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col text-center">
                                            <Button type="primary" htmlType="submit" >
                                                Update User
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
